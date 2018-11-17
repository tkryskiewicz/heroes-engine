export interface Troop {
  creature: string;
  count: number;
}

export const isTroopValid = (troop: Troop): boolean =>
  troop.count >= 0;
