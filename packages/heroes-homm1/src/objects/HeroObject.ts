import {
  applyModifier,
  ArmedObject,
  ArmedObjectData,
  Army,
  EquipableObject,
  GameData,
  GameObject,
  GameObjectData,
  getArmedObjectMobility,
  hasModifierFor,
  Hero,
  initializeArmedObject,
  initializeEquipableObject,
  initializeMobileObject,
  initializeOwnableObject,
  isMobilityModifierObjectData,
  MobileObject,
  MobileObjectData,
  OwnableObject,
  OwnableObjectData,
  random,
  Troop,
} from "heroes-core";
import { isDefined } from "heroes-helpers";

import { ObjectId } from "../ObjectId";

export interface HeroObjectData extends ArmedObjectData, OwnableObjectData, MobileObjectData {
  readonly id: ObjectId.Hero;
}

export const isHeroObjectData = (objectData: GameObjectData): objectData is HeroObjectData =>
  objectData.id === ObjectId.Hero;

export interface HeroObject extends Hero, ArmedObject, EquipableObject, OwnableObject, MobileObject {
  readonly dataId: ObjectId.Hero;
}

export const isHeroObject = (object: GameObject): object is HeroObject =>
  object.dataId === ObjectId.Hero;

export const initializeHeroObject = (object: GameObject, objectData: HeroObjectData): HeroObject => ({
  ...object,
  ...initializeArmedObject(object),
  ...initializeEquipableObject(object),
  ...initializeOwnableObject(object),
  ...initializeMobileObject(object, objectData),
  dataId: ObjectId.Hero,
  experience: 0,
  heroClass: "",
  heroId: "",
  luck: 0,
  morale: 0,
  skills: {},
});

export const changeHeroObjectHero = (
  object: HeroObject,
  heroId: string,
  data: Pick<GameData, "heroes" | "heroClasses">,
): HeroObject => {
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

export const getInitialMobility = (
  object: HeroObject,
  objectData: HeroObjectData,
  terrain: string,
  ownedObjects: GameObject[],
  data: Pick<GameData, "mapObjects" | "creatures" | "heroClasses" | "items">,
): number => {
  const armyMobility = getArmedObjectMobility(object, data);

  const itemModifier = object.items
    .filter(isDefined)
    // FIXME
    .map<GameObjectData>((i) => data.items[i.id])
    .filter(isMobilityModifierObjectData)
    .reduce((b, d) => applyModifier(b, d.mobilityModifier, terrain), 0);

  const ownedObjectModifier = ownedObjects
    // FIXME
    .map<GameObjectData>((o) => data.mapObjects[o.dataId])
    .filter(isMobilityModifierObjectData)
    .reduce((b, d) => applyModifier(b, d.mobilityModifier, terrain), 0);

  const modifier = itemModifier + ownedObjectModifier;

  const heroClassData = data.heroClasses[object.heroClass];

  return hasModifierFor(heroClassData.terrainMobilityModifier, terrain) ?
    applyModifier(objectData.baseMobility + modifier, heroClassData.terrainMobilityModifier, terrain) :
    Math.min(armyMobility, objectData.baseMobility) + modifier;
};
