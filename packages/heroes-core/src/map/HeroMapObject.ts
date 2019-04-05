import { Hero } from "../Hero";
import { ArmedMapObject } from "./ArmedMapObject";
import { createMapObject, isMapObject, MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";
import { OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

export type HeroMapObjectData = OwnableMapObjectData;

export interface HeroMapObject extends ArmedMapObject, OwnableMapObject {
  readonly hero: Hero;
  readonly orientation: MapObjectOrientation;
}

export const createHeroMapObject = (
  id: string,
  objectData: HeroMapObjectData,
  hero: Hero,
  owner?: string,
): HeroMapObject => ({
  ...createMapObject(id, objectData),
  army: [],
  hero,
  orientation: MapObjectOrientation.North,
  owner,
});

export const isHeroMapObject = (object: MapObject | undefined): object is HeroMapObject =>
  isMapObject(object) && (object as HeroMapObject).hero !== undefined;
