import { Resources } from "./Resource";

export interface Dwelling {
  creature: string;
  availableCount: number;
  growth: number;
  cost: Resources;
}

export interface Structure {
  id: string;
  cost: Resources;
  isBuilt: boolean;
  dwelling?: Dwelling;
}

export const buildStructure = (structure: Structure): Structure => ({
  ...structure,
  isBuilt: true,
});
