import { Town } from "../Town";
import { MapObject } from "./MapObject";

export const TownMapObjectType = "town";

export interface TownMapObject extends MapObject {
  readonly type: typeof TownMapObjectType;
  readonly town: Town;
}

export const createTownMapObject = (id: string, town: Town): TownMapObject => ({
  id,
  town,
  type: TownMapObjectType,
});
