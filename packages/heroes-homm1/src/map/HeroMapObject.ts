import {
  ArmedMapObject,
  ArmedMapObjectData,
  Army,
  createMapObject,
  EquipableMapObject,
  Hero,
  isMapObject,
  MapObject,
  MapObjectData,
  MapObjectOrientation,
  MobileMapObject,
  OwnableMapObject,
  OwnableMapObjectData,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

export interface HeroMapObjectData extends ArmedMapObjectData, OwnableMapObjectData {
}

export const isHeroMapObjectData = (objectData: MapObjectData): objectData is HeroMapObjectData =>
  objectData.id === MapObjectId.Hero;

export interface HeroMapObject extends Hero, ArmedMapObject, EquipableMapObject, OwnableMapObject, MobileMapObject {
}

export const isHeroMapObject = (object: MapObject | undefined): object is HeroMapObject =>
  isMapObject(object) && object.dataId === MapObjectId.Hero;

export const createHeroMapObject = (
  id: string,
  objectData: HeroMapObjectData,
  hero: Hero,
  owner?: string,
): HeroMapObject => ({
  ...createMapObject(id, objectData),
  ...hero,
  orientation: MapObjectOrientation.North,
  owner,
});

export interface HeroMapObjectDetails {
  readonly hero: string;
  readonly alignment: string;
  readonly army: Army;
  readonly artifacts: Array<string | undefined>;
  readonly experience: number;
}
