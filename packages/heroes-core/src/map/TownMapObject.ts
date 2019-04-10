import { appendArmyTroop } from "../Army";
import { getTroop, recruitTroop } from "../Structure";
import { Town } from "../Town";
import { ArmedMapObject, ArmedMapObjectData } from "./ArmedMapObject";
import { createMapObject, isMapObject, MapObject } from "./MapObject";
import { OwnableMapObject, OwnableMapObjectData } from "./OwnableMapObject";

export interface TownMapObjectData extends ArmedMapObjectData, OwnableMapObjectData {
}

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

export const recruitTownMapObjectTroop = (
  object: TownMapObject,
  structure: string,
  count: number,
): TownMapObject => {
  const struct = object.structures.find((s) => s.id === structure);

  if (!struct) {
    throw new Error("Invalid structure");
  }

  const troop = getTroop(struct, count);

  return {
    ...object,
    army: appendArmyTroop(object.army, troop),
    structures: object.structures.map((s) => s.id === structure ? recruitTroop(struct, count) : s),
  };
};
