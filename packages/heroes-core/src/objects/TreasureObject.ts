import { GameObject, GameObjectData } from "../GameObject";
import { Resources } from "../Resource";
import { random } from "../util";

export interface TreasureObjectData extends GameObjectData {
  readonly treasure: {
    readonly [resource: string]: {
      readonly min: number;
      readonly max: number;
    };
  };
}

export const isTreasureObjectData = (objectData: GameObjectData): objectData is TreasureObjectData =>
  (objectData as TreasureObjectData).treasure !== undefined;

export interface TreasureObject extends GameObject {
  readonly treasure: Resources;
}

export const initializeTreasureObject = (
  object: GameObject,
  objectData: TreasureObjectData,
): TreasureObject => ({
  ...object,
  treasure: Object.keys(objectData.treasure).reduce((p, c) => ({
    ...p,
    [c]: random(objectData.treasure[c].min, objectData.treasure[c].max),
  }), {}),
});

export const isTreasureObject = (object: GameObject): object is TreasureObject =>
  (object as TreasureObject).treasure !== undefined;

// FIXME: check if object always returns the same amount
export const generateTreasureObjectResources = (object: TreasureObject): Resources =>
  object.treasure;
