import { Army, Hero, HeroClassData, random, Troop } from "heroes-core";

export const constructHero = (id: string, heroId: string, heroClass: HeroClassData): Hero => {
  const army: Army = heroClass.army
    .map((t): Troop => ({
      count: random(t.min, t.max),
      creature: t.creature,
    }))
    .filter((t) => t.count);

  return {
    army,
    experience: 0,
    heroClass: heroClass.id,
    heroId,
    id,
    items: [],
    luck: 0,
    mobility: 0,
    morale: 0,
    skills: {
      ...heroClass.skills,
    },
  };
};
