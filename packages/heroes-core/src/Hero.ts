import { Army } from "./Army";
import { Item } from "./Item";

export interface HeroSkills {
  readonly [skill: string]: number;
}

export interface Hero {
  readonly id: string;
  // FIXME: remove
  readonly dataId: string;
  readonly heroClass: string;
  readonly skills: HeroSkills;
  readonly mobility: number;
  readonly army: Army;
  readonly morale: number;
  readonly luck: number;
  readonly experience: number;
  readonly artifacts: Array<Item | undefined>;
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
