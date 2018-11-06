import { Troop } from "./Troop";

export type Army = Array<Troop | undefined>;

// TODO: handle size limit, troop merging, etc.
export const appendArmyTroop = (army: Army, troop: Troop): Army => {
  const clone = [
    ...army,
  ];

  clone.push(troop);

  return clone;
};

export const swapArmyTroops = (army: Army, index: number, withIndex: number): Army => {
  const clone = [
    ...army,
  ];

  clone[index] = army[withIndex];
  clone[withIndex] = army[index];

  return clone;
};
