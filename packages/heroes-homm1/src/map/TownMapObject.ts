import {
  appendArmyTroop,
  ArmedMapObject,
  ArmedMapObjectData,
  createMapObject,
  getTroop,
  isMapObject,
  MapObject,
  OwnableMapObject,
  OwnableMapObjectData,
  recruitTroop,
  Town,
} from "heroes-core";

import { MapObjectId } from "./MapObjectId";

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
  isMapObject(object) && (object as TownMapObject).dataId === MapObjectId.Town;

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