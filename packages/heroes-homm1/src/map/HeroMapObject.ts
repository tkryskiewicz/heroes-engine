import {
  ArmedMapObject,
  ArmedMapObjectData,
  Army,
  createMapObject,
  EquipableMapObject,
  GameData,
  Hero,
  isMapObject,
  MapObject,
  MapObjectData,
  MapObjectOrientation,
  MobileMapObject,
  OwnableMapObject,
  OwnableMapObjectData,
} from "heroes-core";

import { constructArtifact } from "../artifacts";
import { MapObjectId } from "./MapObjectId";

export interface HeroMapObjectData extends ArmedMapObjectData, OwnableMapObjectData {
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

export interface HeroMapObjectDetails {
  readonly hero: string;
  readonly alignment: string;
  readonly army: Army;
  readonly artifacts: Array<string | undefined>;
  readonly experience: number;
}

export const getHeroMapObjectDetails = (object: HeroMapObject): HeroMapObjectDetails => ({
  alignment: object.owner!,
  army: object.army,
  artifacts: object.artifacts.map((a) => a ? a.id : undefined),
  experience: object.experience,
  hero: object.id,
});

export const setHeroMapObjectDetails = (
  object: HeroMapObject,
  details: HeroMapObjectDetails,
  data: Pick<GameData, "heroes">,
): HeroMapObject => ({
  ...object,
  army: details.army,
  artifacts: details.artifacts.map((a) => a ? constructArtifact(a) : undefined),
  experience: details.experience,
  heroClass: data.heroes[details.hero].heroClass,
  id: details.hero,
  owner: details.alignment,
});
