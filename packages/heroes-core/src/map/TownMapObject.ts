import { Town } from "../Town";
import { MapObject } from "./MapObject";

export interface TownMapObject extends MapObject {
  readonly type: "town";
  readonly town: Town;
}
