import { appendArmyTroop } from "../Army";
import { Hero } from "../Hero";
import { Troop } from "../Troop";
import { MapObject, MapObjectData } from "./MapObject";

export interface DwellingMapObjectData extends MapObjectData {
  readonly dwelling: {
    readonly creature: string;
    // TODO: initial count is random within a range
    readonly initialCount: number;
  };
}

export const isDwellingMapObjectData = (object: MapObjectData): object is DwellingMapObjectData =>
  (object as DwellingMapObjectData).dwelling !== undefined;

export const DwellingMapObjectType = "dwelling";

export interface DwellingMapObject extends MapObject {
  readonly type: typeof DwellingMapObjectType;
  readonly availableCount: number;
}

export const createDwellingMapObject = (objectData: DwellingMapObjectData): DwellingMapObject => ({
  availableCount: objectData.dwelling.initialCount,
  id: objectData.id,
  type: DwellingMapObjectType,
});

export const isDwellingMapObject = (object: MapObject): object is DwellingMapObject =>
  object.type === DwellingMapObjectType &&
  (object as DwellingMapObject).availableCount !== undefined;

export const visitDwelling = (
  object: DwellingMapObject,
  objectData: DwellingMapObjectData,
  hero: Hero,
): [DwellingMapObject, Hero] => {
  const troop: Troop = {
    count: object.availableCount,
    creature: objectData.dwelling.creature,
  };

  // TODO: what happens if hero army is full?
  const army = appendArmyTroop(hero.army, troop);

  return [
    {
      ...object,
      availableCount: 0,
    },
    {
      ...hero,
      army,
    },
  ];
};
