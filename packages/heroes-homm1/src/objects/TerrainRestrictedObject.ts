import { GameObjectData } from "heroes-core";

export interface TerrainRestrictedObjectData extends GameObjectData {
  readonly restrictedTerrains: string[];
}

export const isTerrainRestrictedObjectData = (
  objectData: GameObjectData,
): objectData is TerrainRestrictedObjectData =>
  (objectData as TerrainRestrictedObjectData).restrictedTerrains !== undefined;
