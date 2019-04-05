import { appendArmyTroop } from "../Army";
import { Game } from "../Game";
import { Hero } from "../Hero";
import { Troop } from "../Troop";
import { HeroMapObject, isHeroMapObject } from "./HeroMapObject";
import { getObject, replaceObject } from "./Map";
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

export const handleDwellingMapObject = (
  game: Game,
  object: DwellingMapObject,
  objectData: DwellingMapObjectData,
  hero: Hero,
): Game => {
  const heroObject = getObject(game.map, hero.id);

  if (!isHeroMapObject(heroObject)) {
    throw new Error(`${hero.id} is not a hero object`);
  }

  const troop: Troop = {
    count: object.availableCount,
    creature: objectData.dwelling.creature,
  };

  // TODO: what happens if hero army is full?
  const army = appendArmyTroop(hero.army, troop);

  const objectResult = {
    ...object,
    availableCount: 0,
  };

  const hh = {
    ...hero,
    army,
  };

  const heroObjectResult: HeroMapObject = {
    ...heroObject,
    hero: hh,
  };

  return {
    ...game,
    map: replaceObject(replaceObject(game.map, objectResult), heroObjectResult),
  };
};
