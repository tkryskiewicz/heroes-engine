import { GameData } from "../Game";
import { GameObject, GameObjectData } from "../GameObject";

export interface CreatureObjectData extends GameObjectData {
  readonly creature: string;
}

export const isCreatureObjectData = (objectData: GameObjectData): objectData is CreatureObjectData =>
  (objectData as CreatureObjectData).creature !== undefined;

export interface CreatureObject extends GameObject {
  readonly count: number;
}

export const initializeCreatureObject = (object: GameObject): CreatureObject => ({
  ...object,
  count: 0,
});

export const isCreatureObject = (
  object: GameObject,
  data: Pick<GameData, "creatures">,
): object is CreatureObject =>
  data.creatures[object.dataId] !== undefined;
