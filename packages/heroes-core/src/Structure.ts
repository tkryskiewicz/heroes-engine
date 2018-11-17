import { Resources } from "./Resource";
import { Troop } from "./Troop";

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

export const getTroop = (structure: Structure, count: number): Troop | undefined => {
  if (!structure.dwelling) {
    throw new Error("Structure is not a dwelling");
  }

  if (count < 0 || count > structure.dwelling.availableCount) {
    throw new Error("Count must be non-negative and less or equal to available count");
  }

  return {
    count,
    creature: structure.dwelling.creature,
  };
};

export const recruitTroop = (structure: Structure, count: number): Structure => {
  if (!structure.dwelling) {
    throw new Error("Structure is not a dwelling");
  }

  if (count < 0 || count > structure.dwelling.availableCount) {
    throw new Error("Count must be non-negative and less or equal to available count");
  }

  return {
    ...structure,
    dwelling: {
      ...structure.dwelling,
      availableCount: structure.dwelling.availableCount - count,
    },
  };
};
