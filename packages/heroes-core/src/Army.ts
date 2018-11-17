import { Troop } from "./Troop";

export type Army = Array<Troop | undefined>;

// TODO: handle size limit
export const appendArmyTroop = (army: Army, troop: Troop): Army => {
  const clone = [
    ...army,
  ];

  const existingTroop = army.find((t) => t !== undefined && t.creature === troop.creature);

  if (existingTroop) {
    clone[army.indexOf(existingTroop)] = {
      ...existingTroop,
      count: existingTroop.count + troop.count,
    };
  } else {
    const emptySlotIndex = clone.findIndex((t) => !t);

    if (emptySlotIndex !== -1) {
      clone[emptySlotIndex] = troop;
    } else {
      clone.push(troop);
    }
  }

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
