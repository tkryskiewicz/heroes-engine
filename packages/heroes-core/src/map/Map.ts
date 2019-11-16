// tslint:disable: no-loop-statement

import { MapCell } from "./MapCell";
import { MapObject, MapObjectData } from "./MapObject";
import { createPoint, MapPoint, translatePoint } from "./MapPoint";

export interface Map {
  readonly width: number;
  readonly height: number;
  readonly terrainVariants: number;
  readonly cells: MapCell[];
}

export const createMap = (width: number, height: number, initialTerrain: string, terrainVariants: number = 0): Map => {
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
    cells: [...new Array(width * height).keys()].map(() => ({
      terrain: initialTerrain,
      terrainVariant: Math.floor(Math.random() * terrainVariants),
    })),
    height,
    terrainVariants,
    width,
  };
};

export const isPointValid = (map: Map, point: MapPoint): boolean =>
  point.x >= 0 && point.x < map.width && point.y >= 0 && point.y < map.height;

export const getCellIndex = (width: number, point: MapPoint): number =>
  point.y * width + point.x;

export const getCellPoint = (width: number, index: number): MapPoint => ({
  x: index % width,
  y: Math.floor(index / width),
});

export const changeTerrain = (map: Map, point: MapPoint, terrain: string): Map => {
  if (!isPointValid(map, point)) {
    throw new Error(`Point {${point.x},${point.y}} is outside a ${map.width}x${map.height} map`);
  }

  const index = getCellIndex(map.width, point);

  return {
    ...map,
    cells: map.cells.map((c, i) => i === index ?
      {
        ...c,
        terrain,
        terrainVariant: Math.floor(Math.random() * map.terrainVariants),
      } :
      c,
    ),
  };
};

export const isPointTaken = (map: Map, point: MapPoint): boolean =>
  map.cells[getCellIndex(map.width, point)].object !== undefined;

export const forEachMapObjectPoint = (objectData: MapObjectData, callbackfn: (point: MapPoint) => void): void => {
  for (let h = 0; h < objectData.height; h++) {
    for (let w = 0; w < objectData.width; w++) {
      const point = createPoint(w, h);

      const objectCell = objectData.grid[getCellIndex(objectData.width, point)];

      if (objectCell) {
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
  const CellFree = false;
  const CellTaken = true;

  // TODO: reduce size
  const obstacleMap = new Array<boolean>(map.width * map.height).fill(CellFree);

  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const mapPoint = createPoint(x, y);

      const cell = map.cells[getCellIndex(map.width, mapPoint)];

      if (cell.object) {
        const obj = cell.object;

        const objData = data.mapObjects[obj.dataId];

        forEachMapObjectPoint(objData, (objectPoint) => {
          obstacleMap[getCellIndex(map.width, translatePoint(mapPoint, objectPoint.x, -objectPoint.y))] = CellTaken;
        });
      }
    }
  }

  return everyMapObjectPoint(objectData, (objectPoint) => {
    const mapCell = obstacleMap[getCellIndex(map.width, translatePoint(point, objectPoint.x, -objectPoint.y))];

    return mapCell !== CellTaken;
  });
};

export const placeObject = (map: Map, point: MapPoint, object: MapObject): Map => {
  if (!isPointValid(map, point)) {
    throw new Error(`Point {${point.x},${point.y}} is outside a ${map.width}x${map.height} map`);
  }

  const index = getCellIndex(map.width, point);

  if (map.cells[index].object !== undefined) {
    throw new Error("an object is already placed");
  }

  const cells = [...map.cells];

  const cell = cells[index];

  cells[index] = {
    ...cell,
    object,
  };

  return {
    ...map,
    cells,
  };
};

export const moveObject = (map: Map, from: MapPoint, to: MapPoint): Map => {
  if (!isPointValid(map, from)) {
    throw new Error("from must be a valid map point");
  }

  if (!isPointValid(map, to)) {
    throw new Error("to must be a valid map point");
  }

  const fromIndex = getCellIndex(map.width, from);

  const fromCell = map.cells[fromIndex];

  if (fromCell.object === undefined) {
    throw new Error("an object to move is required");
  }

  const toIndex = getCellIndex(map.width, to);

  const toCell = map.cells[toIndex];

  if (toCell.object !== undefined) {
    throw new Error("target cell already contains an object");
  }

  const cells = [...map.cells];

  cells[fromIndex] = {
    ...fromCell,
    object: undefined,
  };

  cells[toIndex] = {
    ...toCell,
    object: fromCell.object,
  };

  return {
    ...map,
    cells,
  };
};

export const getObject = (map: Map, id: string): MapObject | undefined =>
  map.cells
    .reduce<MapObject | undefined>((p, c) => p || (c.object && c.object.id === id ? c.object : undefined), undefined);

export const removeObject = (map: Map, id: string): Map => ({
  ...map,
  cells: map.cells.map((c) => c.object && c.object.id === id ?
    {
      ...c,
      object: undefined,
    } :
    c,
  ),
});

export const replaceObject = (map: Map, object: MapObject): Map => ({
  ...map,
  cells: map.cells.map((c) => c.object && c.object.id === object.id ?
    {
      ...c,
      object,
    } :
    c,
  ),
});
