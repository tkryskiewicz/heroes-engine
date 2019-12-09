import { GameObject, GameObjectData } from "../GameObject";
import { Troop } from "../Troop";

export interface DwellingObjectData extends GameObjectData {
  readonly dwelling: {
    readonly creature: string;
    // TODO: initial count is random within a range
    readonly initialCount: number;
  };
}

export const isDwellingObjectData = (object: GameObjectData): object is DwellingObjectData =>
  (object as DwellingObjectData).dwelling !== undefined;

export interface DwellingObject extends GameObject {
  readonly availableCount: number;
}

export const initializeDwellingObject = (
  object: GameObject,
  objectData: DwellingObjectData,
): DwellingObject => ({
  ...object,
  availableCount: objectData.dwelling.initialCount,
});

export const isDwellingObject = (object: GameObject): object is DwellingObject =>
  (object as DwellingObject).availableCount !== undefined;

export const recruitDwellingObjectCreatures = (
  object: DwellingObject,
  objectData: DwellingObjectData,
): [DwellingObject, Troop] => [
    {
      ...object,
      availableCount: 0,
    },
    {
      count: object.availableCount,
      creature: objectData.dwelling.creature,
    },
  ];
