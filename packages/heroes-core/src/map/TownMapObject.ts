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

export const isTownMapObject = (object: MapObject): object is TownMapObject =>
  object.type === TownMapObjectType &&
  (object as TownMapObject).town !== undefined;
