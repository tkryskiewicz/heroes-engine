import { ArmedObject, GameData } from "heroes-core";
import { isDefined } from "heroes-helpers";

export const getArmedObjectArmyMobility = (
  object: ArmedObject,
  data: Pick<GameData, "creatures">,
): number =>
  Math.min(...object.army
    .filter(isDefined)
    .map((t) => {
      const creatureData = data.creatures[t.creature];

      return creatureData.speed;
    }));
