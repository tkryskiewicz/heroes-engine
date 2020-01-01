import { TerrainData } from "heroes-core";

import { TerrainId } from "./TerrainId";

export const terrains: TerrainData[] = [
  {
    hasTransitions: true,
    id: TerrainId.Water,
  },
  {
    hasTransitions: true,
    id: TerrainId.Grass,
  },
  {
    hasTransitions: true,
    id: TerrainId.Snow,
    movementCostModifier: {
      type: "multiply",
      value: 1.5,
    },
  },
  {
    hasTransitions: true,
    id: TerrainId.Swamp,
    movementCostModifier: {
      type: "multiply",
      value: 1.5,
    },
  },
  {
    hasTransitions: true,
    id: TerrainId.Lava,
  },
  {
    hasTransitions: true,
    id: TerrainId.Desert,
    movementCostModifier: {
      type: "multiply",
      value: 2,
    },
  },
  {
    hasTransitions: false,
    id: TerrainId.Dirt,
  },
];

export const allTerrains = terrains
  .map((t) => t.id);

export const landTerrains = terrains
  .filter((t) => t.id !== TerrainId.Water)
  .map((t) => t.id);
