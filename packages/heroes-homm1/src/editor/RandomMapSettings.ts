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
