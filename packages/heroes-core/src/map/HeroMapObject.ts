import { Hero } from "../Hero";
import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";
import { OwnableMapObject } from "./OwnableMapObject";

export interface HeroMapObject extends OwnableMapObject {
  readonly hero: Hero;
  readonly orientation: MapObjectOrientation;
}

export const createHeroMapObject = (id: string, hero: Hero, owner?: string): HeroMapObject => ({
  hero,
  id,
  orientation: MapObjectOrientation.North,
  owner,
});

export const isHeroMapObject = (object: MapObject): object is HeroMapObject =>
  (object as HeroMapObject).hero !== undefined;
