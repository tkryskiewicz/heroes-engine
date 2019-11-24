import { Army } from "./Army";
import { ItemSlot } from "./map";

export interface HeroData {
  readonly id: string;
  readonly heroClass: string;
}

export interface HeroSkills {
  readonly [skill: string]: number;
}

export interface Hero {
  readonly id: string;
  // FIXME: remove
  readonly dataId: string;
  readonly heroId: string;
  readonly heroClass: string;
  readonly skills: HeroSkills;
  readonly mobility: number;
  readonly army: Army;
  readonly morale: number;
  readonly luck: number;
  readonly experience: number;
  readonly items: ItemSlot[];
}

// TODO: does this belong to core???
export const canSelectNextHero = (heroes: Hero[]): boolean =>
  heroes.filter((h) => h.mobility).length !== 0;

export const getNextHero = (heroes: Hero[], activeObjectId?: string): string | undefined => {
  const selectedIndex = activeObjectId !== undefined ?
    heroes.findIndex((h) => h.id === activeObjectId) :
    undefined;

  const startIndex = selectedIndex !== undefined ?
    selectedIndex + 1 :
    0;

  const index = [...new Array(heroes.length).keys()]
    .map((i) => (startIndex + i) % heroes.length)
    .find((i) => heroes[i].mobility > 0 && i !== selectedIndex);

  return index !== undefined ?
    heroes[index].id :
    undefined;
};
