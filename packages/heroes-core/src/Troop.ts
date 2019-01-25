export interface Troop {
  readonly creature: string;
  readonly count: number;
}

export const isTroopValid = (troop: Troop): boolean =>
  troop.count >= 0;
