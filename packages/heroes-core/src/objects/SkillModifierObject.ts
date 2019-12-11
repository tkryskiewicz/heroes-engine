import { GameObjectData } from "../GameObject";
import { Modifier } from "../Modifier";

export interface SkillModifierObjectData extends GameObjectData {
  readonly skillModifier: Modifier;
}

export const isSkillModifierObjectData = (objectData: GameObjectData): objectData is SkillModifierObjectData =>
  (objectData as SkillModifierObjectData).skillModifier !== undefined;
