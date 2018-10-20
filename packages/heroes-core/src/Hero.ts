import { Army, swapArmyTroops } from "./Army";

export interface HeroSkills {
  [skill: string]: number;
}

export interface Hero {
  id: string;
  alignment: string;
  heroClass: string;
  skills: HeroSkills;
  mobility: number;
  army: Army;
  morale: number;
  luck: number;
  experience: number;
}

export const swapHeroTroops = (hero: Hero, index: number, withIndex: number): Hero => ({
  ...hero,
  army: swapArmyTroops(hero.army, index, withIndex),
});

// TODO: does this belong to core???
export const canSelectNextHero = (heroes: Hero[]): boolean =>
  heroes.filter((h) => h.mobility).length !== 0;

export const getNextHeroIndex = (heroes: Hero[], selectedIndex?: number): number | undefined => {
  const startIndex = selectedIndex !== undefined ? selectedIndex + 1 : 0;

  for (let i = 0; i < heroes.length; i++) {
    const index = (startIndex + i) % heroes.length;

    if (heroes[index].mobility && index !== selectedIndex) {
      return index;
    }
  }

  return undefined;
};
