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
  },
  {
    hasTransitions: true,
    id: TerrainType.Swamp,
  },
  {
    hasTransitions: true,
    id: TerrainType.Lava,
  },
  {
    hasTransitions: true,
    id: TerrainType.Desert,
  },
  {
    hasTransitions: false,
    id: TerrainType.Dirt,
  },
];
