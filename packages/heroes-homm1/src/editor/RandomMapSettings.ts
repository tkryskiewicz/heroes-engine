import { TerrainType } from "../TerrainType";

export enum LandMassSetting {
  Scattered = "scattered",
  Centralized = "centralized",
}

export interface RandomMapSettings {
  readonly terrainAmount: { readonly [index: string]: number | undefined };
  readonly mountains: number;
  readonly trees: number;
  readonly mines: number;
  readonly treasures: number;
  readonly monsters: number;
  readonly landMass: LandMassSetting;
  readonly saveWithoutViewing: boolean;
}

export const createDefaultRandomMapSettings = (): RandomMapSettings => ({
  landMass: LandMassSetting.Scattered,
  mines: 0.5,
  monsters: 0.5,
  mountains: 0.5,
  saveWithoutViewing: false,
  terrainAmount: {
    [TerrainType.Water]: 0.35,
    [TerrainType.Grass]: 0.35,
    [TerrainType.Snow]: 0.25,
    [TerrainType.Dirt]: 0.25,
  },
  treasures: 0.5,
  trees: 0.5,
});
