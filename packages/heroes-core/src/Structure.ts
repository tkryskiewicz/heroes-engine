import { Resources } from "./Resource";

export interface Structure {
  id: string;
  cost: Resources;
  isBuilt: boolean;
}

export const buildStructure = (structure: Structure): Structure => ({
  ...structure,
  isBuilt: true,
});
