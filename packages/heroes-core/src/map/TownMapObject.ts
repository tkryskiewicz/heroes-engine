import { Town } from "../Town";
import { createMapObject, MapObject } from "./MapObject";
import { isOwnableMapObject, OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

export type TownMapObjectData = OwnableMapObjectData;

export interface TownMapObject extends OwnableMapObject {
  readonly town: Town;
}

export const createTownMapObject = (
  id: string,
  objectData: TownMapObjectData,
  town: Town,
  owner?: string,
): TownMapObject => ({
  ...createMapObject(id, objectData),
  owner,
  town,
});

export const isTownMapObject = (object: MapObject | undefined): object is TownMapObject =>
  isOwnableMapObject(object) && (object as TownMapObject).town !== undefined;
