import { MapObject } from "./MapObject";
import { MapPoint } from "./MapPoint";
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

const getTileIndex = (map: Map, point: MapPoint): number =>
  point.y * map.width + point.x;

export const placeObject = (map: Map, point: MapPoint, object: MapObject): Map => {
  if (!isPointValid(map, point)) {
    throw new Error("point must be a valid map point");
  }

  const index = getTileIndex(map, point);

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

  const fromIndex = getTileIndex(map, from);

  const fromTile = map.tiles[fromIndex];

  if (fromTile.object === undefined) {
    throw new Error("an object to move is required");
  }

  const toIndex = getTileIndex(map, to);

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