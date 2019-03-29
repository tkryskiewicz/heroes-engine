import { Town } from "../Town";
import { MapObject } from "./MapObject";

export interface TownMapObject extends MapObject {
  readonly town: Town;
}

export const createTownMapObject = (id: string, town: Town): TownMapObject => ({
  id,
  town,
});

export const isTownMapObject = (object: MapObject): object is TownMapObject =>
  (object as TownMapObject).town !== undefined;
