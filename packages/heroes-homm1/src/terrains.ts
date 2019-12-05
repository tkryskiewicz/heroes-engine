import { TerrainData } from "heroes-core";

import { TerrainType } from "./TerrainType";

export const terrains: TerrainData[] = [
  {
    hasTransitions: true,
    id: TerrainType.Water,
  },
  {
    hasTransitions: true,
    id: TerrainType.Grass,
  },
  {
    hasTransitions: true,
    id: TerrainType.Snow,
    movementCostModifier: {
      type: "multiply",
      value: 1.5,
    },
  },
  {
    hasTransitions: true,
    id: TerrainType.Swamp,
    movementCostModifier: {
      type: "multiply",
      value: 1.5,
    },
  },
  {
    hasTransitions: true,
    id: TerrainType.Lava,
  },
  {
    hasTransitions: true,
    id: TerrainType.Desert,
    movementCostModifier: {
      type: "multiply",
      value: 2,
    },
  },
  {
    hasTransitions: false,
    id: TerrainType.Dirt,
  },
];

export const landTerrains = terrains
  .filter((t) => t.id !== TerrainType.Water)
  .map((t) => t.id);
