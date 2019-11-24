import { Army, GameData } from "heroes-core";

import { constructArtifact } from "../artifacts";
import { HeroMapObject } from "../map";

export interface HeroMapObjectDetails {
  readonly heroId: string;
  readonly owner: string;
  readonly army: Army;
  readonly artifacts: (string | undefined)[];
  readonly experience: number;
}

export const getHeroMapObjectDetails = (object: HeroMapObject): HeroMapObjectDetails => ({
  army: object.army,
  artifacts: object.items.map((a) => a ? a.id : undefined),
  experience: object.experience,
  heroId: object.heroId,
  owner: object.owner!,
});

export const setHeroMapObjectDetails = (
  object: HeroMapObject,
  details: HeroMapObjectDetails,
  data: Pick<GameData, "heroes">,
): HeroMapObject => ({
  ...object,
  army: details.army,
  experience: details.experience,
  heroClass: data.heroes[details.heroId].heroClass,
  heroId: details.heroId,
  items: details.artifacts.map((a) => a ? constructArtifact(a) : undefined),
  owner: details.owner,
});
