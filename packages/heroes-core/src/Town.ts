import { Army } from "./Army";
import { buildStructure, Structure } from "./Structure";

export interface Town {
  readonly id: string;
  readonly name: string;
  // TODO: is this needed? e.g. for recruiting heroes?
  readonly heroClass: string;
  readonly structures: Structure[];
  readonly canConstructStructures: boolean;
  readonly army: Army;
}

export const getTownStructure = (town: Town, structure: string): Structure | undefined =>
  town.structures.find((s) => s.id === structure);

export const isStructureBuilt = (town: Town, structure: string): boolean => {
  const s = getTownStructure(town, structure);

  return s !== undefined && s.isBuilt;
};

export const buildTownStructure = (town: Town, structure: string): Town => {
  if (!town.canConstructStructures) {
    throw new Error("Cannot build structures");
  }

  const struc = getTownStructure(town, structure);

  if (!struc) {
    throw new Error("Invalid structure");
  }

  return {
    ...town,
    canConstructStructures: false,
    structures: town.structures.map((s) => s.id === structure ? buildStructure(struc) : s),
  };
};

export const endTownTurn = (town: Town): Town => ({
  ...town,
  canConstructStructures: true,
});
