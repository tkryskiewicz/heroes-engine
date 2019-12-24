import { GameData, Town } from "heroes-core";

import { constructStructure } from "./data";

declare module "heroes-core/src/Town" {
  interface TownData {
    readonly heroClass: string;
  }
}

export const constructTown = (id: string, name: string, data: Pick<GameData, "towns">): Town => {
  const town = data.towns[id];

  return {
    army: [],
    canConstructStructures: true,
    heroClass: town.heroClass,
    id: town.id,
    name,
    structures: [
      ...town.structures,
    ].map(constructStructure),
  };
};
