import { Hero } from "../Hero";
import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

export interface HeroMapObject extends MapObject {
  readonly hero: Hero;
  readonly orientation: MapObjectOrientation;
}

export const createHeroMapObject = (id: string, hero: Hero): HeroMapObject => ({
  hero,
  id,
  orientation: MapObjectOrientation.North,
});

export const isHeroMapObject = (object: MapObject): object is HeroMapObject =>
  (object as HeroMapObject).hero !== undefined;
