import { appendArmyTroop } from "../Army";
import { Hero } from "../Hero";
import { Troop } from "../Troop";
import { MapObject } from "./MapObject";

export const DwellingMapObjectType = "dwelling";

export interface DwellingMapObject extends MapObject {
  readonly type: typeof DwellingMapObjectType;
  readonly id: string;
  readonly creature: string;
  readonly availableCount: number;
}

export const createDwellingMapObject = (id: string, creature: string, availableCount: number): DwellingMapObject => ({
  availableCount,
  creature,
  id,
  type: DwellingMapObjectType,
});

export const isDwellingMapObject = (object: MapObject): object is DwellingMapObject =>
  object.type === DwellingMapObjectType &&
  !!(object as DwellingMapObject).creature &&
  (object as DwellingMapObject).availableCount !== undefined;

export const visitDwelling = (dwelling: DwellingMapObject, hero: Hero): [DwellingMapObject, Hero] => {
  const troop: Troop = {
    count: dwelling.availableCount,
    creature: dwelling.creature,
  };

  // TODO: what happens if hero army is full?
  const army = appendArmyTroop(hero.army, troop);

  return [
    {
      ...dwelling,
      availableCount: 0,
    },
    {
      ...hero,
      army,
    },
  ];
};
