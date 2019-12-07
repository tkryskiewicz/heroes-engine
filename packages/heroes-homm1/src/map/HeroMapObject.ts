import {
  ArmedMapObject,
  ArmedMapObjectData,
  Army,
  EquipableObject,
  GameData,
  Hero,
  initializeArmedMapObject,
  initializeEquipableObject,
  initializeMobileObject,
  initializeOwnableObject,
  isMapObject,
  MapObject,
  MapObjectData,
  MobileObject,
  MobileObjectData,
  OwnableObject,
  OwnableObjectData,
  random,
  Troop,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

export interface HeroMapObjectData extends ArmedMapObjectData, OwnableObjectData, MobileObjectData {
  readonly id: MapObjectId.Hero;
}

export const isHeroMapObjectData = (objectData: MapObjectData): objectData is HeroMapObjectData =>
  objectData.id === MapObjectId.Hero;

export interface HeroMapObject extends Hero, ArmedMapObject, EquipableObject, OwnableObject, MobileObject {
  readonly dataId: MapObjectId.Hero;
}

export const isHeroMapObject = (object: MapObject | undefined): object is HeroMapObject =>
  isMapObject(object) && object.dataId === MapObjectId.Hero;

export const initializeHeroMapObject = (object: MapObject, objectData: HeroMapObjectData): HeroMapObject => ({
  ...object,
  ...initializeArmedMapObject(object),
  ...initializeEquipableObject(object),
  ...initializeOwnableObject(object),
  ...initializeMobileObject(object, objectData),
  dataId: MapObjectId.Hero,
  experience: 0,
  heroClass: "",
  heroId: "",
  luck: 0,
  morale: 0,
  skills: {},
});

export const changeHeroMapObjectHero = (
  object: HeroMapObject,
  heroId: string,
  data: Pick<GameData, "heroes" | "heroClasses" | "mapObjects">,
): HeroMapObject => {
  const hero = data.heroes[heroId];

  const heroClass = data.heroClasses[hero.heroClass];

  const army: Army = heroClass.army
    .map((t): Troop => ({
      count: random(t.min, t.max),
      creature: t.creature,
    }))
    .filter((t) => t.count);

  return {
    ...object,
    army,
    heroClass: heroClass.id,
    heroId,
    skills: {
      ...heroClass.skills,
    },
  };
};
