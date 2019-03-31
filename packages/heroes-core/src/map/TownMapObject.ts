import { Town } from "../Town";
import { MapObject } from "./MapObject";
import { isOwnableMapObject, OwnableMapObject } from "./OwnableMapObject";

export interface TownMapObject extends OwnableMapObject {
  readonly town: Town;
}

export const createTownMapObject = (id: string, town: Town, owner?: string): TownMapObject => ({
  id,
  owner,
  town,
});

export const isTownMapObject = (object: MapObject | undefined): object is TownMapObject =>
  isOwnableMapObject(object) && (object as TownMapObject).town !== undefined;
