import { Army, dismissArmyTroop, swapArmyTroops } from "../Army";
import { Game } from "../Game";
import { TroopSelection } from "../Troop";
import { getObject, replaceObject } from "./Map";
import { isMapObject, MapObject } from "./MapObject";

export interface ArmedMapObject extends MapObject {
  readonly army: Army;
}

export const isArmedMapObject = (object: MapObject | undefined): object is ArmedMapObject =>
  isMapObject(object) && (object as ArmedMapObject).army !== undefined;

export const dismissArmedMapObjectTroop = (
  game: Game,
  troop: TroopSelection,
): Game => {
  const object = getObject(game.map, troop.id);

  if (!isArmedMapObject(object)) {
    throw new Error(`${troop.id} is not an armed object`);
  }

  const objectResult: ArmedMapObject = {
    ...object,
    army: dismissArmyTroop(object.army, troop.index),
  };

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
  };
};

export const swapArmedMapObjectTroops = (
  game: Game,
  troop: TroopSelection,
  withTroop: TroopSelection,
  autoCombineTroops: boolean,
  preventMovingLastTroop: boolean,
): Game => {
  const object = getObject(game.map, troop.id);

  if (!isArmedMapObject(object)) {
    throw new Error(`${troop.id} is not an armed object`);
  }

  const withObject = getObject(game.map, withTroop.id);

  if (!isArmedMapObject(withObject)) {
    throw new Error(`${withTroop.id} is not an armed object`);
  }

  const [armyResult, withArmyResult] = swapArmyTroops(object.army, troop.index, withObject.army, withTroop.index, {
    autoCombineTroops,
    preventMovingLastTroop,
  });

  const objectResult: ArmedMapObject = {
    ...object,
    army: armyResult,
  };

  const withObjectResult: ArmedMapObject = {
    ...withObject,
    army: withArmyResult,
  };

  return {
    ...game,
    map: replaceObject(replaceObject(game.map, objectResult), withObjectResult),
  };
};
