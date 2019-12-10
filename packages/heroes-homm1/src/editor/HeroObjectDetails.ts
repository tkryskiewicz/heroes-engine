import { Army, GameData } from "heroes-core";

import { constructArtifact } from "../artifacts";
import { HeroObject } from "../objects";

export interface HeroObjectDetails {
  readonly heroId: string;
  readonly owner: string;
  readonly army: Army;
  readonly artifacts: (string | undefined)[];
  readonly experience: number;
}

export const getHeroObjectDetails = (object: HeroObject): HeroObjectDetails => ({
  army: object.army,
  artifacts: object.items.map((a) => a ? a.id : undefined),
  experience: object.experience,
  heroId: object.heroId,
  owner: object.owner!,
});

export const setHeroObjectDetails = (
  object: HeroObject,
  details: HeroObjectDetails,
  data: Pick<GameData, "heroes">,
): HeroObject => ({
  ...object,
  army: details.army,
  experience: details.experience,
  heroClass: data.heroes[details.heroId].heroClass,
  heroId: details.heroId,
  items: details.artifacts.map((a) => a ? constructArtifact(a) : undefined),
  owner: details.owner,
});
