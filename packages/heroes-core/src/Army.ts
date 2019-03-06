import { Troop } from "./Troop";

export type Army = Array<Troop | undefined>;

export const getArmySize = (army: Army): number =>
  army.filter((t) => t !== undefined).length;

export const setArmyTroop = (army: Army, index: number, troop: Troop | undefined, autoCombine: boolean): Army => {
  // TODO: implement checking index

  const clone = [
    ...army,
  ];

  if (troop && autoCombine) {
    const targetTroop = army.find((t) => t !== undefined && t.creature === troop.creature);

    if (targetTroop) {
      clone[army.indexOf(targetTroop)] = {
        ...targetTroop,
        count: targetTroop.count + troop.count,
      };
    }
  } else {
    const targetTroop = army[index];

    if (troop && targetTroop && targetTroop.creature === troop.creature) {
      clone[index] = {
        ...targetTroop,
        count: targetTroop.count + troop.count,
      };
    } else {
      clone[index] = troop;
    }
  }

  return clone;
};

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

export const dismissArmyTroop = (army: Army, index: number): Army =>
  army.map((t, i) => i === index ? undefined : t);
