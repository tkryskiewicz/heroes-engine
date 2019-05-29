import { Army } from "heroes-core";

import { RandomTownMapObject } from "../map";

export interface TownMapObjectDetails {
  readonly customized: boolean;
  readonly army: Army;
  readonly alignment?: string;
}

export const getTownMapObjectDetails = (object: RandomTownMapObject): TownMapObjectDetails => ({
  alignment: object.owner,
  army: object.army,
  customized: object.customized,
});

export const setTownMapObjectDetails = (
  object: RandomTownMapObject,
  details: TownMapObjectDetails,
): RandomTownMapObject => ({
  ...object,
  army: details.army,
  customized: details.customized,
  owner: details.alignment,
});
