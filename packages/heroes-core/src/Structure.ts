import { Resources } from "./Resource";

export interface Dwelling {
  creature: string;
  availableCount: number;
  growth: number;
  cost: Resources;
}

const buildDwelling = (dwelling: Dwelling): Dwelling => ({
  ...dwelling,
  availableCount: dwelling.growth,
});

export interface Structure {
  id: string;
  cost: Resources;
  isBuilt: boolean;
  dwelling?: Dwelling;
}

export const buildStructure = (structure: Structure): Structure => ({
  ...structure,
  dwelling: structure.dwelling ?
    buildDwelling(structure.dwelling) :
    undefined,
  isBuilt: true,
});
