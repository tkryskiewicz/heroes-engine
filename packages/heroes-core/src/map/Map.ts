// tslint:disable: no-loop-statement

import { MapObject, MapObjectData } from "./MapObject";
import { createPoint, MapPoint, translatePoint } from "./MapPoint";
import { MapTile } from "./MapTile";

export interface Map {
  readonly width: number;
  readonly height: number;
  readonly tiles: MapTile[];
}

export const createMap = (width: number, height: number, initialTerrain: string): Map => {
  if (width <= 0) {
    throw new Error("width must be a positive value");
  }

  if (height <= 0) {
    throw new Error("height must be a positive value");
  }

  if (!initialTerrain) {
    throw new Error("initial terrain is required");
  }

  return {
    height,
    tiles: new Array<MapTile>(width * height).fill({
      terrain: initialTerrain,
    }),
    width,
  };
};

export const isPointValid = (map: Map, point: MapPoint): boolean =>
  point.x >= 0 && point.x < map.width && point.y >= 0 && point.y < map.height;

export const getTileIndex = (width: number, point: MapPoint): number =>
  point.y * width + point.x;

export const getTilePoint = (width: number, index: number): MapPoint => ({
  x: index % width,
  y: Math.floor(index / width),
});

export const changeTerrain = (map: Map, point: MapPoint, terrain: string): Map => {
  if (!isPointValid(map, point)) {
    throw new Error(`Point {${point.x},${point.y}} is outside a ${map.width}x${map.height} map`);
  }

  const index = getTileIndex(map.width, point);

  return {
    ...map,
    tiles: map.tiles.map((t, i) => i === index ?
      {
        ...t,
        terrain,
      } :
      t,
    ),
  };
};

export const isPointTaken = (map: Map, point: MapPoint): boolean =>
  map.tiles[getTileIndex(map.width, point)].object !== undefined;

export const forEachMapObjectPoint = (objectData: MapObjectData, callbackfn: (point: MapPoint) => void): void => {
  for (let h = 0; h < objectData.height; h++) {
    for (let w = 0; w < objectData.width; w++) {
      const point = createPoint(w, h);

      const objectTile = objectData.grid[getTileIndex(objectData.width, point)];

      if (objectTile) {
        callbackfn(point);
      }
    }
  }
};

export const everyMapObjectPoint = (objectData: MapObjectData, callbackfn: (point: MapPoint) => boolean): boolean => {
  let result = true;

  forEachMapObjectPoint(objectData, (point) => result = result && callbackfn(point));

  return result;
};

export const canPlaceObject = (
  map: Map,
  point: MapPoint,
  objectData: MapObjectData,
  data: import("../Game").GameData,
): boolean => {
  if (isPointTaken(map, point)) {
    return false;
  }

  // FIXME
  const TileFree = false;
  const TileTaken = true;

  // TODO: reduce size
  const obstacleMap = new Array<boolean>(map.width * map.height).fill(TileFree);

  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const mapPoint = createPoint(x, y);

      const tile = map.tiles[getTileIndex(map.width, mapPoint)];

      if (tile.object) {
        const obj = tile.object;

        const objData = data.mapObjects[obj.dataId];

        forEachMapObjectPoint(objData, (objectPoint) => {
          obstacleMap[getTileIndex(map.width, translatePoint(mapPoint, objectPoint.x, -objectPoint.y))] = TileTaken;
        });
      }
    }
  }

  const canPlace = everyMapObjectPoint(objectData, (objectPoint) => {
    const mapTile = obstacleMap[getTileIndex(map.width, translatePoint(point, objectPoint.x, -objectPoint.y))];

    return mapTile !== TileTaken;
  });

  return canPlace;
};

export const placeObject = (map: Map, point: MapPoint, object: MapObject): Map => {
  if (!isPointValid(map, point)) {
    throw new Error(`Point {${point.x},${point.y}} is outside a ${map.width}x${map.height} map`);
  }

  const index = getTileIndex(map.width, point);

  if (map.tiles[index].object !== undefined) {
    throw new Error("an object is already placed");
  }

  const tiles = [...map.tiles];

  const tile = tiles[index];

  tiles[index] = {
    ...tile,
    object,
  };

  return {
    ...map,
    tiles,
  };
};

export const moveObject = (map: Map, from: MapPoint, to: MapPoint): Map => {
  if (!isPointValid(map, from)) {
    throw new Error("from must be a valid map point");
  }

  if (!isPointValid(map, to)) {
    throw new Error("to must be a valid map point");
  }

  const fromIndex = getTileIndex(map.width, from);

  const fromTile = map.tiles[fromIndex];

  if (fromTile.object === undefined) {
    throw new Error("an object to move is required");
  }

  const toIndex = getTileIndex(map.width, to);

  const toTile = map.tiles[toIndex];

  if (toTile.object !== undefined) {
    throw new Error("target tile already contains an object");
  }

  const tiles = [...map.tiles];

  tiles[fromIndex] = {
    ...fromTile,
    object: undefined,
  };

  tiles[toIndex] = {
    ...toTile,
    object: fromTile.object,
  };

  return {
    ...map,
    tiles,
  };
};

export const getObject = (map: Map, id: string): MapObject | undefined =>
  map.tiles
    .reduce<MapObject | undefined>((p, c) => p || (c.object && c.object.id === id ? c.object : undefined), undefined);

export const removeObject = (map: Map, id: string): Map => ({
  ...map,
  tiles: map.tiles.map((t) => t.object && t.object.id === id ?
    {
      ...t,
      object: undefined,
    } :
    t,
  ),
});

export const replaceObject = (map: Map, object: MapObject): Map => ({
  ...map,
  tiles: map.tiles.map((t) => t.object && t.object.id === object.id ?
    {
      ...t,
      object,
    } :
    t,
  ),
});
