import { Troop } from "./Troop";

export type Army = Array<Troop | undefined>;

export const swapArmyTroops = (army: Army, index: number, withIndex: number): Army => {
  const clone = [
    ...army,
  ];

  clone[index] = army[withIndex];
  clone[withIndex] = army[index];

  return clone;
};
