import { GameData } from "../Game";
import { GameObject, GameObjectData } from "../GameObject";

export interface CreatureMapObjectData extends GameObjectData {
  readonly creature: string;
}

export const isCreatureMapObjectData = (objectData: GameObjectData): objectData is CreatureMapObjectData =>
  (objectData as CreatureMapObjectData).creature !== undefined;

export interface CreatureMapObject extends GameObject {
  readonly count: number;
}

export const initializeCreatureMapObject = (object: GameObject): CreatureMapObject => ({
  ...object,
  count: 0,
});

export const isCreatureMapObject = (
  object: GameObject,
  data: Pick<GameData, "creatures">,
): object is CreatureMapObject =>
  data.creatures[object.dataId] !== undefined;
