import { Hero, Town } from "heroes-core";
import { Alignment, HeroClass, HeroId, MaxMobility, Skill, TownId } from "heroes-homm1";

import { GameState } from "./state";

const heroes: Hero[] = [
  {
    alignment: Alignment.Red,
    heroClass: HeroClass.Knight,
    id: HeroId.LordKilburn,
    mobility: MaxMobility,
    skills: {
      [Skill.AttackSkill]: 1,
      [Skill.DefenseSkill]: 2,
      [Skill.SpellPower]: 1,
      [Skill.Knowledge]: 1,
    },
  },
  {
    alignment: Alignment.Red,
    heroClass: HeroClass.Barbarian,
    id: HeroId.Antoine,
    mobility: MaxMobility,
    skills: {
      [Skill.AttackSkill]: 2,
      [Skill.DefenseSkill]: 1,
      [Skill.SpellPower]: 1,
      [Skill.Knowledge]: 1,
    },
  },
];

const towns: Town[] = [
  {
    id: TownId.Farm,
  },
  {
    id: TownId.Plains,
  },
];

const initialState: GameState = {
  heroes,
  towns,
};

export const gameReducer = (state: GameState = initialState): GameState => {
  return state;
};
