import { TerrainId } from "../data";

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
    [TerrainId.Water]: 0.35,
    [TerrainId.Grass]: 0.35,
    [TerrainId.Snow]: 0.25,
    [TerrainId.Dirt]: 0.25,
  },
  treasures: 0.5,
  trees: 0.5,
});
