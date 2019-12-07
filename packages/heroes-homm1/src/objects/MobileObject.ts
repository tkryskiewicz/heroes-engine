import {
  applyModifier,
  GameData,
  getModifierFor,
  hasModifierFor,
  isDiagonalDirection,
  MapObjectOrientation,
  MobileObject,
} from "heroes-core";

import { isHeroMapObject } from "../map";

export const getMovementCost = (
  object: MobileObject,
  direction: MapObjectOrientation,
  terrain: string,
  data: Pick<GameData, "baseMovementCost" | "diagonalMovementCostModifier" | "terrains" | "heroClasses">,
): number => {
  const terrainData = data.terrains[terrain];

  let terrainMovementCostModifier = terrainData.movementCostModifier;

  if (isHeroMapObject(object)) {
    const heroClass = data.heroClasses[object.heroClass];

    if (hasModifierFor(heroClass.terrainMovementCostModifier, terrain)) {
      terrainMovementCostModifier = getModifierFor(heroClass.terrainMovementCostModifier, terrain);
    }
  }

  const cost = applyModifier(data.baseMovementCost, terrainMovementCostModifier);

  return isDiagonalDirection(direction) ?
    applyModifier(cost, data.diagonalMovementCostModifier, terrain) :
    cost;
};
