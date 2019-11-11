import { Army } from "heroes-core";

import { RandomTownMapObject } from "../map";

export interface TownMapObjectDetails {
  readonly customized: boolean;
  readonly army: Army;
  readonly owner?: string;
}

export const getTownMapObjectDetails = (object: RandomTownMapObject): TownMapObjectDetails => ({
  army: object.army,
  customized: object.customized,
  owner: object.owner,
});

export const setTownMapObjectDetails = (
  object: RandomTownMapObject,
  details: TownMapObjectDetails,
): RandomTownMapObject => ({
  ...object,
  army: details.army,
  customized: details.customized,
  owner: details.owner,
});
