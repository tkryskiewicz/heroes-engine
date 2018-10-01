export interface HeroSkills {
  [skill: string]: number;
}

export interface Hero {
  id: string;
  alignment: string;
  heroClass: string;
  skills: HeroSkills;
  mobility: number;
}

export const getNextHeroIndex = (heroes: Hero[], selectedIndex?: number): number | undefined => {
  if (!heroes.length) {
    return undefined;
  }

  // TODO: take mobility into account
  const index = (selectedIndex !== undefined ? selectedIndex + 1 : 0) % heroes.length;

  return index !== selectedIndex ? index : undefined;
};
