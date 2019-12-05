import { ArmedMapObject, GameData } from "heroes-core";
import { isDefined } from "heroes-helpers";

export const getArmedMapObjectArmyMobility = (
  object: ArmedMapObject,
  data: Pick<GameData, "creatures">,
): number =>
  Math.min(...object.army
    .filter(isDefined)
    .map((t) => {
      const creatureData = data.creatures[t.creature];

      return creatureData.speed;
    }));
