import {
  appendArmyTroop,
  ArmedObject,
  ArmedObjectData,
  buildStructure,
  GameData,
  GameObject,
  GameObjectData,
  getTroop,
  OwnableObject,
  OwnableObjectData,
  recruitTroop,
  Town,
} from "heroes-core";

import { constructStructure, StructureId } from "../data";

export interface TownObjectData extends ArmedObjectData, OwnableObjectData {
  readonly town: string;
  readonly isCastleBuilt: boolean;
  readonly heroClass: string;
}

export const isTownObjectData = (objectData: GameObjectData): objectData is TownObjectData =>
  (objectData as TownObjectData).town !== undefined;

export interface TownObject extends Town, ArmedObject, OwnableObject {
}

export const isTownObject = (object: GameObject): object is TownObject =>
  (object as TownObject).structures !== undefined;

export const initializeTownObject = (
  object: GameObject,
  objectData: TownObjectData,
  data: Pick<GameData, "towns">,
): TownObject => ({
  ...object,
  army: [],
  canConstructStructures: true,
  heroClass: "",
  name: "",
  owner: undefined,
  structures: data.towns[objectData.town].structures
    .map(constructStructure)
    .map((s) => s.id === StructureId.Castle && objectData.isCastleBuilt ?
      buildStructure(s) :
      s,
    ),
});

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
