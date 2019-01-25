import { appendArmyTroop, Army, swapArmyTroops } from "./Army";
import { buildStructure, getTroop, recruitTroop, Structure } from "./Structure";

export interface Town {
  readonly id: string;
  readonly name: string;
  readonly alignment: string;
  readonly heroClass: string;
  readonly garrison: Army;
  readonly structures: Structure[];
  readonly canConstructStructures: boolean;
}

const getStructure = (town: Town, structure: string): Structure | undefined =>
  town.structures.find((s) => s.id === structure);

export const swapGarrisonTroops = (town: Town, index: number, withIndex: number): Town => ({
  ...town,
  garrison: swapArmyTroops(town.garrison, index, withIndex),
});

export const isStructureBuilt = (town: Town, structure: string): boolean => {
  const s = getStructure(town, structure);

  return s !== undefined && s.isBuilt;
};

export const buildTownStructure = (town: Town, structure: string): Town => {
  if (!town.canConstructStructures) {
    return town;
  }

  return {
    ...town,
    canConstructStructures: false,
    structures: town.structures.map((s) => s.id === structure ? buildStructure(s) : s),
  };
};

export const recruitTownTroop = (town: Town, structureId: string, count: number): Town => {
  const structure = town.structures.find((s) => s.id === structureId);

  if (!structure) {
    return town;
  }

  const troop = getTroop(structure, count);

  if (!troop) {
    return town;
  }

  return {
    ...town,
    garrison: appendArmyTroop(town.garrison, troop),
    structures: town.structures.map((s) => s === structure ? recruitTroop(structure, count) : s),
  };
};

export const endTownTurn = (town: Town): Town => ({
  ...town,
  canConstructStructures: true,
});
