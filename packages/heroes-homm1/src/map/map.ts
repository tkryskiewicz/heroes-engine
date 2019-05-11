// tslint:disable: no-loop-statement

import {
  canPlaceObject as canPlaceObjectCore,
  GameData,
  getTileIndex,
  Map,
  MapObjectData,
  MapPoint,
} from "heroes-core";

import { isTerrainRestrictedMapObjectData } from "./TerrainRestrictedMapObject";

export const canPlaceObject = (map: Map, point: MapPoint, objectData: MapObjectData, data: GameData): boolean => {
  if (!canPlaceObjectCore(map, point, objectData, data)) {
    return false;
  }

  if (isTerrainRestrictedMapObjectData(objectData)) {
    for (let h = 0; h < objectData.height; h++) {
      for (let w = 0; w < objectData.width; w++) {
        const objectTile = objectData.grid[getTileIndex(objectData.width, { x: w, y: h })];
        const mapTile = map.tiles[getTileIndex(map.width, { x: point.x + w, y: point.y - h })];

        if (objectTile === true && !objectData.restrictedTerrains.includes(mapTile.terrain)) {
          return false;
        }
      }
    }
  }

  return true;
};
