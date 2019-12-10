import {
  appendArmyTroop,
  ArmedObject,
  ArmedObjectData,
  GameObject,
  getTroop,
  OwnableObject,
  OwnableObjectData,
  recruitTroop,
  Town,
} from "heroes-core";

import { ObjectId } from "../ObjectId";

export interface TownObjectData extends ArmedObjectData, OwnableObjectData {
}

export interface TownObject extends Town, ArmedObject, OwnableObject {
}

export const initializeTownObject = (object: GameObject): TownObject => ({
  ...object,
  army: [],
  canConstructStructures: true,
  heroClass: "",
  name: "",
  owner: undefined,
  structures: [],
});

export const isTownObject = (object: GameObject): object is TownObject =>
  object.dataId === ObjectId.Town;

export const recruitTownObjectTroop = (
  object: TownObject,
  structure: string,
  count: number,
): TownObject => {
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
