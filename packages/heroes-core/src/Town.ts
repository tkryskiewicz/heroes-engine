import { Army } from "./Army";
import { Hero } from "./Hero";
import { buildStructure, Structure } from "./Structure";

export interface Town {
  id: string;
  alignment: string;
  heroClass: string;
  garrison: Army;
  structures: Structure[];
  visitingHero?: Hero;
}

const getStructure = (town: Town, structure: string): Structure | undefined =>
  town.structures.find((s) => s.id === structure);

export const isStructureBuilt = (town: Town, structure: string): boolean => {
  const s = getStructure(town, structure);

  return s !== undefined && s.isBuilt;
};

export const buildTownStructure = (town: Town, structure: string): Town => ({
  ...town,
  structures: town.structures.map((s) => s.id === structure ? buildStructure(s) : s),
});
