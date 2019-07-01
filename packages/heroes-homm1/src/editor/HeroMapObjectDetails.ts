import { Army, GameData } from "heroes-core";

import { constructArtifact } from "../artifacts";
import { HeroMapObject } from "../map";

export interface HeroMapObjectDetails {
  readonly heroId: string;
  readonly alignment: string;
  readonly army: Army;
  readonly artifacts: (string | undefined)[];
  readonly experience: number;
}

export const getHeroMapObjectDetails = (object: HeroMapObject): HeroMapObjectDetails => ({
  alignment: object.owner!,
  army: object.army,
  artifacts: object.artifacts.map((a) => a ? a.id : undefined),
  experience: object.experience,
  heroId: object.heroId,
});

export const setHeroMapObjectDetails = (
  object: HeroMapObject,
  details: HeroMapObjectDetails,
  data: Pick<GameData, "heroes">,
): HeroMapObject => ({
  ...object,
  army: details.army,
  artifacts: details.artifacts.map((a) => a ? constructArtifact(a) : undefined),
  experience: details.experience,
  heroClass: data.heroes[details.heroId].heroClass,
  heroId: details.heroId,
  owner: details.alignment,
});
