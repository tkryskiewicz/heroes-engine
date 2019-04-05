import { appendArmyTroop } from "../Army";
import { Game } from "../Game";
import { getTroop, recruitTroop } from "../Structure";
import { Town } from "../Town";
import { ArmedMapObject } from "./ArmedMapObject";
import { getObject, replaceObject } from "./Map";
import { createMapObject, MapObject } from "./MapObject";
import { isOwnableMapObject, OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

export type TownMapObjectData = OwnableMapObjectData;

export interface TownMapObject extends ArmedMapObject, OwnableMapObject {
  readonly town: Town;
}

export const createTownMapObject = (
  id: string,
  objectData: TownMapObjectData,
  town: Town,
  owner?: string,
): TownMapObject => ({
  ...createMapObject(id, objectData),
  army: [],
  owner,
  town,
});

export const isTownMapObject = (object: MapObject | undefined): object is TownMapObject =>
  isOwnableMapObject(object) && (object as TownMapObject).town !== undefined;

export const recruitTownMapObjectTroop = (game: Game, town: string, structure: string, count: number): Game => {
  const object = getObject(game.map, town);

  if (!isTownMapObject(object)) {
    throw new Error(`${town} is not a town object`);
  }

  const struct = object.town.structures.find((s) => s.id === structure);

  if (!struct) {
    throw new Error("Invalid structure");
  }

  const troop = getTroop(struct, count);

  const objectResult: TownMapObject = {
    ...object,
    army: appendArmyTroop(object.army, troop),
    town: {
      ...object.town,
      structures: object.town.structures.map((s) => s.id === structure ? recruitTroop(struct, count) : s),
    },
  };

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
  };
};
