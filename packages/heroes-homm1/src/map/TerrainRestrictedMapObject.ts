import { MapObjectData } from "heroes-core";

export interface TerrainRestrictedMapObjectData extends MapObjectData {
  readonly restrictedTerrains: string[];
}

export const isTerrainRestrictedMapObjectData = (
  objectData: MapObjectData,
): objectData is TerrainRestrictedMapObjectData =>
  (objectData as TerrainRestrictedMapObjectData).restrictedTerrains !== undefined;
