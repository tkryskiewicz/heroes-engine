// tslint:disable: no-loop-statement

import {
  canPlaceObject as canPlaceObjectCore,
  createPoint,
  GameData,
  getTileIndex,
  Map,
  MapObjectData,
  MapPoint,
  translatePoint,
} from "heroes-core";

import { isTerrainRestrictedMapObjectData } from "./TerrainRestrictedMapObject";

export const canPlaceObject = (map: Map, point: MapPoint, objectData: MapObjectData, data: GameData): boolean => {
  if (!canPlaceObjectCore(map, point, objectData, data)) {
    return false;
  }

  if (isTerrainRestrictedMapObjectData(objectData)) {
    for (let h = 0; h < objectData.height; h++) {
      for (let w = 0; w < objectData.width; w++) {
        const objectTile = objectData.grid[getTileIndex(objectData.width, createPoint(w, h))];
        const mapTile = map.tiles[getTileIndex(map.width, translatePoint(point, w, -h))];

        if (objectTile === true && !objectData.restrictedTerrains.includes(mapTile.terrain)) {
          return false;
        }
      }
    }
  }

  return true;
};
