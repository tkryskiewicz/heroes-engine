import { GameObject, GameObjectData } from "heroes-core";

export interface RandomCreatureObjectData extends GameObjectData {
  readonly randomCreature: {
    readonly level?: number;
  };
}

export const isRandomCreatureObjectData = (objectData: GameObjectData): objectData is RandomCreatureObjectData =>
  (objectData as RandomCreatureObjectData).randomCreature !== undefined;

export interface RandomCreatureObject extends GameObject {
  readonly count: number;
}

export const initializeRandomCreatureObject = (object: GameObject): RandomCreatureObject => ({
  ...object,
  count: 0,
});

export const isRandomCreatureObject = (
  _object: GameObject,
  objectData: GameObjectData,
): _object is RandomCreatureObject =>
  isRandomCreatureObjectData(objectData);
