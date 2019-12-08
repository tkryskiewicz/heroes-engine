import {
  applyModifier,
  GameData,
  GameObjectData,
  getArmedObjectMobility,
  hasModifierFor,
  isMobilityModifierObjectData,
  MapObject,
} from "heroes-core";
import { isDefined } from "heroes-helpers";

import { HeroMapObject, HeroMapObjectData } from "../map";

export const getInitialMobility = (
  object: HeroMapObject,
  objectData: HeroMapObjectData,
  terrain: string,
  ownedObjects: MapObject[],
  data: Pick<GameData, "mapObjects" | "creatures" | "heroClasses" | "items">,
): number => {
  const armyMobility = getArmedObjectMobility(object, data);

  const itemModifier = object.items
    .filter(isDefined)
    // FIXME
    .map<GameObjectData>((i) => data.items[i.id])
    .filter(isMobilityModifierObjectData)
    .reduce((b, d) => applyModifier(b, d.mobilityModifier, terrain), 0);

  const ownedObjectModifier = ownedObjects
    // FIXME
    .map<GameObjectData>((o) => data.mapObjects[o.dataId])
    .filter(isMobilityModifierObjectData)
    .reduce((b, d) => applyModifier(b, d.mobilityModifier, terrain), 0);

  const modifier = itemModifier + ownedObjectModifier;

  const heroClassData = data.heroClasses[object.heroClass];

  return hasModifierFor(heroClassData.terrainMobilityModifier, terrain) ?
    applyModifier(objectData.baseMobility + modifier, heroClassData.terrainMobilityModifier, terrain) :
    Math.min(armyMobility, objectData.baseMobility) + modifier;
};