import { Army } from "heroes-core";

import { RandomTownObject } from "../objects";

export interface TownMapObjectDetails {
  readonly customized: boolean;
  readonly army: Army;
  readonly owner?: string;
}

export const getTownMapObjectDetails = (object: RandomTownObject): TownMapObjectDetails => ({
  army: object.army,
  customized: object.customized,
  owner: object.owner,
});

export const setTownMapObjectDetails = (
  object: RandomTownObject,
  details: TownMapObjectDetails,
): RandomTownObject => ({
  ...object,
  army: details.army,
  customized: details.customized,
  owner: details.owner,
});
