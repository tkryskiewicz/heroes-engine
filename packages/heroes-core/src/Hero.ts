import { Army } from "./Army";
import { Artifact } from "./Artifact";

export interface HeroSkills {
  readonly [skill: string]: number;
}

export interface Hero {
  readonly id: string;
  readonly alignment: string;
  readonly heroClass: string;
  readonly skills: HeroSkills;
  readonly mobility: number;
  readonly army: Army;
  readonly morale: number;
  readonly luck: number;
  readonly experience: number;
  readonly artifacts: Array<Artifact | undefined>;
}

// TODO: does this belong to core???
export const canSelectNextHero = (heroes: Hero[]): boolean =>
  heroes.filter((h) => h.mobility).length !== 0;

export const getNextHeroIndex = (heroes: Hero[], selectedIndex?: number): number | undefined => {
  const startIndex = selectedIndex !== undefined ? selectedIndex + 1 : 0;

  const index = [...new Array(heroes.length).keys()]
    .map((i) => (startIndex + i) % heroes.length)
    .find((i) => heroes[i].mobility > 0 && i !== selectedIndex);

  return index;
};

export const heroHasArtifact = (hero: Hero, artifact: string): boolean =>
  hero.artifacts.some((a) => a && a.id === artifact ? true : false);

export const addHeroArtifact = (hero: Hero, artifact: Artifact): Hero => ({
  ...hero,
  artifacts: [
    ...hero.artifacts,
    artifact,
  ],
});
