import { Resources } from "./Resource";

export interface Structure {
  id: string;
  cost: Resources;
  isBuilt: boolean;
}

// FIXME
export const buildStructure = (structure: Structure): Structure => ({
  ...structure,
  id: structure.id === "tent" ? "castle" : structure.id,
  isBuilt: true,
});
