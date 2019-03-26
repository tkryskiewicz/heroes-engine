import { Hero } from "../Hero";
import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

export const HeroMapObjectType = "hero";

export interface HeroMapObject extends MapObject {
  readonly type: typeof HeroMapObjectType;
  readonly hero: Hero;
  readonly orientation: MapObjectOrientation;
}

export const createHeroMapObject = (id: string, hero: Hero): HeroMapObject => ({
  hero,
  id,
  orientation: MapObjectOrientation.North,
  type: HeroMapObjectType,
});

export const isHeroMapObject = (object: MapObject): object is HeroMapObject =>
  object.type === HeroMapObjectType &&
  (object as HeroMapObject).hero !== undefined;
