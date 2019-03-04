export interface Troop {
  readonly creature: string;
  readonly count: number;
}

export const isTroopValid = (troop: Troop): boolean =>
  troop.count >= 0;

// NOTE: can be changed to interfaces with either hero or town prop?
export enum TroopSelectionType {
  Hero = "hero",
  Garrison = "garrison",
}

export interface TroopSelection {
  readonly type: TroopSelectionType;
  readonly id: string;
  readonly index: number;
}
