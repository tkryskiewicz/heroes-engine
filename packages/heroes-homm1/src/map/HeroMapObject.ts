import {
  ArmedMapObject,
  ArmedMapObjectData,
  createMapObject,
  EquipableMapObject,
  Hero,
  isMapObject,
  MapObject,
  MapObjectData,
  MapObjectOrientation,
  MobileMapObject,
  MobileMapObjectData,
  OwnableMapObject,
  OwnableMapObjectData,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

export interface HeroMapObjectData extends ArmedMapObjectData, OwnableMapObjectData, MobileMapObjectData {
  readonly id: MapObjectId.Hero;
}

export const isHeroMapObjectData = (objectData: MapObjectData): objectData is HeroMapObjectData =>
  objectData.id === MapObjectId.Hero;

export interface HeroMapObject extends Hero, ArmedMapObject, EquipableMapObject, OwnableMapObject, MobileMapObject {
  readonly dataId: MapObjectId.Hero;
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
  dataId: MapObjectId.Hero,
  orientation: MapObjectOrientation.North,
  owner,
});
