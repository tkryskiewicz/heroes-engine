import { Army } from "heroes-core";

import { RandomTownObject } from "../objects";

export interface TownObjectDetails {
  readonly customized: boolean;
  readonly army: Army;
  readonly owner?: string;
}

export const getTownObjectDetails = (object: RandomTownObject): TownObjectDetails => ({
  army: object.army,
  customized: object.customized,
  owner: object.owner,
});

export const setTownObjectDetails = (
  object: RandomTownObject,
  details: TownObjectDetails,
): RandomTownObject => ({
  ...object,
  army: details.army,
  customized: details.customized,
  owner: details.owner,
});
