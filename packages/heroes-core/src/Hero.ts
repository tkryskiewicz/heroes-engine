import { Army, dismissArmyTroop, swapArmyTroops } from "./Army";
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

export const swapHeroTroops = (hero: Hero, index: number, withIndex: number): Hero => ({
  ...hero,
  army: swapArmyTroops(hero.army, index, withIndex),
});

export const dismissHeroTroop = (hero: Hero, index: number): Hero => ({
  ...hero,
  army: dismissArmyTroop(hero.army, index),
});

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
