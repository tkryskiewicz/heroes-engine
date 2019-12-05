import { GameObjectData } from "../GameObject";
import { Modifier } from "../Modifier";

export interface MobilityModifierObjectData extends GameObjectData {
  readonly mobilityModifier: Modifier;
}

export const isMobilityModifierObjectData = (objectData: GameObjectData): objectData is MobilityModifierObjectData =>
  (objectData as MobilityModifierObjectData).mobilityModifier !== undefined;
