import { MapObject } from "./MapObject";
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

export const placeObject = (map: Map, x: number, y: number, object: MapObject): Map => {
  if (x < 0 || x >= map.width) {
    throw new Error("x must be non-negative and less than map width");
  }

  if (y < 0 || y >= map.height) {
    throw new Error("y must be non-negative and less than map height");
  }

  const index = y * map.width + x;

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
