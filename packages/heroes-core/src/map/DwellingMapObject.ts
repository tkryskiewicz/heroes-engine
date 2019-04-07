import { Troop } from "../Troop";
import { createMapObject, isMapObject, MapObject, MapObjectData } from "./MapObject";

export interface DwellingMapObjectData extends MapObjectData {
  readonly dwelling: {
    readonly creature: string;
    // TODO: initial count is random within a range
    readonly initialCount: number;
  };
}

export const isDwellingMapObjectData = (object: MapObjectData): object is DwellingMapObjectData =>
  (object as DwellingMapObjectData).dwelling !== undefined;

export interface DwellingMapObject extends MapObject {
  readonly availableCount: number;
}

export const createDwellingMapObject = (id: string, objectData: DwellingMapObjectData): DwellingMapObject => ({
  ...createMapObject(id, objectData),
  availableCount: objectData.dwelling.initialCount,
});

export const isDwellingMapObject = (object: MapObject | undefined): object is DwellingMapObject =>
  isMapObject(object) && (object as DwellingMapObject).availableCount !== undefined;

export const recruitDwellingMapObjectCreatures = (
  object: DwellingMapObject,
  objectData: DwellingMapObjectData,
): [DwellingMapObject, Troop] => [
    {
      ...object,
      availableCount: 0,
    },
    {
      count: object.availableCount,
      creature: objectData.dwelling.creature,
    },
  ];
