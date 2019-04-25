import { TerrainType } from "./TerrainType";

interface TerrainData {
  readonly id: string;
}

export const terrains: TerrainData[] = [
  {
    id: TerrainType.Water,
  },
  {
    id: TerrainType.Grass,
  },
  {
    id: TerrainType.Snow,
  },
  {
    id: TerrainType.Swamp,
  },
  {
    id: TerrainType.Lava,
  },
  {
    id: TerrainType.Desert,
  },
  {
    id: TerrainType.Dirt,
  },
];
