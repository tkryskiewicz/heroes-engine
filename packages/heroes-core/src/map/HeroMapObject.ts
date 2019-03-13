import { Hero } from "../Hero";
import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

export interface HeroMapObject extends MapObject {
  readonly type: "hero";
  readonly hero: Hero;
  readonly orientation: MapObjectOrientation;
}
