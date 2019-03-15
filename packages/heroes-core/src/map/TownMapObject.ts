import { Town } from "../Town";
import { MapObject } from "./MapObject";

export const TownMapObjectType = "town";

export interface TownMapObject extends MapObject {
  readonly type: typeof TownMapObjectType;
  readonly town: Town;
}

export const createTownMapObject = (town: Town): TownMapObject => ({
  town,
  type: TownMapObjectType,
});
