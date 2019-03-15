import { Hero } from "../Hero";
import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

export const HeroMapObjectType = "hero";

export interface HeroMapObject extends MapObject {
  readonly type: typeof HeroMapObjectType;
  readonly hero: Hero;
  readonly orientation: MapObjectOrientation;
}

export const createHeroMapObject = (hero: Hero): HeroMapObject => ({
  hero,
  orientation: MapObjectOrientation.North,
  type: HeroMapObjectType,
});
