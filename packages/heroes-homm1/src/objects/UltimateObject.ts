import { GameObjectData } from "heroes-core";

export interface UltimateObjectData extends GameObjectData {
    readonly isUltimate: true;
}

export const isUltimateObjectData = (objectData: GameObjectData): objectData is UltimateObjectData =>
  "isUltimate" in objectData;
