import { Hero, Town } from "heroes-core";
import { Alignment, CreatureId, HeroClass, HeroId, MaxMobility, Skill, TownId } from "heroes-homm1";

import { GameState } from "./state";

const heroes: Hero[] = [
  {
    alignment: Alignment.Red,
    army: [
      {
        count: 1,
        creature: CreatureId.Peasant,
      },
    ],
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
    army: [
      {
        count: 1,
        creature: CreatureId.Goblin,
      },
    ],
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
  {
    alignment: Alignment.Red,
    army: [
      {
        count: 1,
        creature: CreatureId.Sprite,
      },
    ],
    heroClass: HeroClass.Sorceress,
    id: HeroId.Ariel,
    mobility: 0,
    skills: {
      [Skill.AttackSkill]: 0,
      [Skill.DefenseSkill]: 0,
      [Skill.SpellPower]: 3,
      [Skill.Knowledge]: 2,
    },
  },
  {
    alignment: Alignment.Red,
    army: [
      {
        count: 1,
        creature: CreatureId.Centaur,
      },
    ],
    heroClass: HeroClass.Warlock,
    id: HeroId.Agar,
    mobility: 10,
    skills: {
      [Skill.AttackSkill]: 0,
      [Skill.DefenseSkill]: 0,
      [Skill.SpellPower]: 2,
      [Skill.Knowledge]: 3,
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
