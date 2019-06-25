import {
  canPlaceObject as canPlaceObjectCore,
  everyMapObjectPoint,
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
    const isTerrainValid = everyMapObjectPoint(objectData, (obstaclePoint) => {
      const mapTile = map.tiles[getTileIndex(map.width, translatePoint(point, obstaclePoint.x, -obstaclePoint.y))];

      return objectData.restrictedTerrains.includes(mapTile.terrain);
    });

    if (!isTerrainValid) {
      return false;
    }
  }

  return true;
};
