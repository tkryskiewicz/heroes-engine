import { isDefined } from "heroes-helpers";

import { appendArmyTroop, Army, dismissArmyTroop, swapArmyTroops } from "../Army";
import { GameObject, GameObjectData } from "../GameObject";
import { Troop } from "../Troop";

export interface ArmedObjectData extends GameObjectData {
  readonly army: {
    readonly preventMovingLastTroop: boolean;
  };
}

export const isArmedObjectData = (objectData: GameObjectData): objectData is ArmedObjectData =>
  (objectData as ArmedObjectData).army !== undefined;

export interface ArmedObject extends GameObject {
  readonly army: Army;
}

export const initializeArmedObject = (object: GameObject): ArmedObject => ({
  ...object,
  army: [],
});

export const isArmedObject = (object: GameObject): object is ArmedObject =>
  (object as ArmedObject).army !== undefined;

export const changeArmedObjectArmy = (object: ArmedObject, army: Army): ArmedObject => ({
  ...object,
  army: [
    ...army,
  ],
});

export const appendArmedObjectTroop = (object: ArmedObject, troop: Troop): ArmedObject => ({
  ...object,
  army: appendArmyTroop(object.army, troop),
});

export const dismissArmedObjectTroop = (object: ArmedObject, index: number): ArmedObject => ({
  ...object,
  army: dismissArmyTroop(object.army, index),
});

export const swapArmedObjectTroops = (
  object: ArmedObject,
  index: number,
  withObject: ArmedObject,
  withIndex: number,
  options: {
    readonly autoCombineTroops: boolean;
    readonly preventMovingLastTroop: boolean;
  },
): [ArmedObject, ArmedObject] => {
  const [armyResult, withArmyResult] = swapArmyTroops(object.army, index, withObject.army, withIndex, options);

  return [
    {
      ...object,
      army: armyResult,
    },
    {
      ...withObject,
      army: withArmyResult,
    },
  ];
};

export const getArmedObjectMobility = (
  object: ArmedObject,
  data: Pick<import("../Game").GameData, "creatures">,
): number =>
  Math.min(...object.army
    .filter(isDefined)
    .map((t) => {
      const creatureData = data.creatures[t.creature];

      return creatureData.speed;
    }));
