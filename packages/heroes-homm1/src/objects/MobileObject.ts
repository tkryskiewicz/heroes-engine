import {
  applyModifier,
  Direction,
  GameData,
  getModifierFor,
  hasModifierFor,
  isDiagonalDirection,
  MobileObject,
} from "heroes-core";

import { isHeroObject } from "./HeroObject";

export const getMovementCost = (
  object: MobileObject,
  direction: Direction,
  terrain: string,
  data: Pick<GameData, "baseMovementCost" | "diagonalMovementCostModifier" | "terrains" | "heroClasses">,
): number => {
  const terrainData = data.terrains[terrain];

  let terrainMovementCostModifier = terrainData.movementCostModifier;

  if (isHeroObject(object)) {
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
