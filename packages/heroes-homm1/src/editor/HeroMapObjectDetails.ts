import { Army, GameData } from "heroes-core";

import { constructArtifact } from "../artifacts";
import { HeroMapObject } from "../map";

export interface HeroMapObjectDetails {
  readonly hero: string;
  readonly alignment: string;
  readonly army: Army;
  readonly artifacts: Array<string | undefined>;
  readonly experience: number;
}

export const getHeroMapObjectDetails = (object: HeroMapObject): HeroMapObjectDetails => ({
  alignment: object.owner!,
  army: object.army,
  artifacts: object.artifacts.map((a) => a ? a.id : undefined),
  experience: object.experience,
  hero: object.id,
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
  heroClass: data.heroes[details.hero].heroClass,
  id: details.hero,
  owner: details.alignment,
});
