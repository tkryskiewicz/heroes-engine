import { appendArmyTroop, Army, dismissArmyTroop, swapArmyTroops } from "../Army";
import { isMapObject, MapObject, MapObjectData } from "../map";
import { Troop } from "../Troop";

export interface ArmedMapObjectData extends MapObjectData {
  readonly army: {
    readonly preventMovingLastTroop: boolean;
  };
}

export const isArmedMapObjectData = (objectData: MapObjectData): objectData is ArmedMapObjectData =>
  (objectData as ArmedMapObjectData).army !== undefined;

export interface ArmedMapObject extends MapObject {
  readonly army: Army;
}

export const initializeArmedMapObject = (object: MapObject): ArmedMapObject => ({
  ...object,
  army: [],
});

export const isArmedMapObject = (object: MapObject | undefined): object is ArmedMapObject =>
  isMapObject(object) && (object as ArmedMapObject).army !== undefined;

export const changeArmedMapObjectArmy = (object: ArmedMapObject, army: Army): ArmedMapObject => ({
  ...object,
  army: [
    ...army,
  ],
});

export const appendArmedMapObjectTroop = (object: ArmedMapObject, troop: Troop): ArmedMapObject => ({
  ...object,
  army: appendArmyTroop(object.army, troop),
});

export const dismissArmedMapObjectTroop = (object: ArmedMapObject, index: number): ArmedMapObject => ({
  ...object,
  army: dismissArmyTroop(object.army, index),
});

export const swapArmedMapObjectTroops = (
  object: ArmedMapObject,
  index: number,
  withObject: ArmedMapObject,
  withIndex: number,
  options: {
    readonly autoCombineTroops: boolean;
    readonly preventMovingLastTroop: boolean;
  },
): [ArmedMapObject, ArmedMapObject] => {
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
