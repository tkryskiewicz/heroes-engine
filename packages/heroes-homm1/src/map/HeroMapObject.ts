import {
  ArmedMapObject,
  ArmedMapObjectData,
  createMapObject,
  EquipableMapObject,
  Hero,
  isMapObject,
  MapObject,
  MapObjectOrientation,
  MobileMapObject,
  OwnableMapObject,
  OwnableMapObjectData,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

export interface HeroMapObjectData extends ArmedMapObjectData, OwnableMapObjectData {
}

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
