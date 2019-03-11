import { Troop } from "./Troop";

export type Army = Array<Troop | undefined>;

export const getArmySize = (army: Army): number =>
  army.filter((t) => t !== undefined).length;

export const setArmyTroop = (
  army: Army,
  index: number,
  troop: Troop | undefined,
  autoCombine: boolean,
): [Army, boolean] => {
  // TODO: implement checking index

  const clone = [
    ...army,
  ];

  let combined = false;

  if (troop && autoCombine) {
    const targetTroop = army.find((t) => t !== undefined && t.creature === troop.creature);

    if (targetTroop) {
      clone[army.indexOf(targetTroop)] = {
        ...targetTroop,
        count: targetTroop.count + troop.count,
      };

      combined = true;
    } else {
      clone[index] = troop;
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

  return [clone, combined];
};

// TODO: handle size limit
export const appendArmyTroop = (army: Army, troop: Troop): Army => {
  const clone = [
    ...army,
  ];

  // TODO: unify troop combining
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

export const dismissArmyTroop = (army: Army, index: number): Army =>
  army.map((t, i) => i === index ? undefined : t);

interface SwapArmyTroopsOptions {
  readonly preventMovingLastTroop?: boolean;
  readonly autoCombineTroops?: boolean;
}

export const swapArmyTroops = (
  army: Army,
  index: number,
  withArmy: Army,
  withIndex: number,
  options: SwapArmyTroopsOptions = {
    autoCombineTroops: false,
    preventMovingLastTroop: false,
  },
): [Army, Army] => {
  const troop = army[index];

  if (troop === undefined) {
    throw new Error("Only a troop can be moved/swapped");
  }

  const withTroop = withArmy[withIndex];

  const clone = [
    ...army,
  ];

  const withClone = army === withArmy ? clone : [...withArmy];

  const existingTroop = withTroop && withTroop.creature === troop.creature ?
    withTroop :
    withArmy.find((t) => t !== undefined && t.creature === troop.creature && t !== troop);

  if (options.preventMovingLastTroop && army !== withArmy && getArmySize(army) === 1) {
    if (withTroop === undefined) {
      throw new Error("Can't move last troop");
    } else if (options.autoCombineTroops && existingTroop) {
      throw new Error("Can't combine last troop");
    }
  }

  if (existingTroop !== undefined && (existingTroop === withTroop || options.autoCombineTroops)) {
    withClone[withArmy.indexOf(existingTroop)] = {
      ...existingTroop,
      count: existingTroop.count + troop.count,
    };
    clone[index] = undefined;
  } else {
    withClone[withIndex] = troop;
    clone[index] = withTroop;
  }

  return [clone, withClone];
};
