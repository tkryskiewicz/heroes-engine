import { appendArmyTroop } from "../Army";
import { Game } from "../Game";
import { getTroop, recruitTroop } from "../Structure";
import { Town } from "../Town";
import { ArmedMapObject } from "./ArmedMapObject";
import { getObject, replaceObject } from "./Map";
import { createMapObject, isMapObject, MapObject } from "./MapObject";
import { OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

export type TownMapObjectData = OwnableMapObjectData;

export interface TownMapObject extends Town, ArmedMapObject, OwnableMapObject {
}

export const createTownMapObject = (
  id: string,
  objectData: TownMapObjectData,
  town: Town,
  owner?: string,
): TownMapObject => ({
  ...createMapObject(id, objectData),
  ...town,
  owner,
});

export const isTownMapObject = (object: MapObject | undefined): object is TownMapObject =>
  isMapObject(object) && (object as TownMapObject).dataId === "town"; // FIXME

export const recruitTownMapObjectTroop = (game: Game, town: string, structure: string, count: number): Game => {
  const object = getObject(game.map, town);

  if (!isTownMapObject(object)) {
    throw new Error(`${town} is not a town object`);
  }

  const struct = object.structures.find((s) => s.id === structure);

  if (!struct) {
    throw new Error("Invalid structure");
  }

  const troop = getTroop(struct, count);

  const objectResult: TownMapObject = {
    ...object,
    army: appendArmyTroop(object.army, troop),
    structures: object.structures.map((s) => s.id === structure ? recruitTroop(struct, count) : s),
  };

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
  };
};
