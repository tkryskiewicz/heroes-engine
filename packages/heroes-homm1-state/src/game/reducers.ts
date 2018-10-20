import { dismissGameHero, Hero, swapGameHeroTroops, Town } from "heroes-core";
import {
  Alignment,
  campaignScenarios,
  CreatureId,
  HeroClass,
  HeroId,
  MaxMobility,
  Resource,
  Skill,
  StructureId,
  TownId,
} from "heroes-homm1";

import { GameAction, GameActionType } from "./actions";
import { GameState } from "./state";

const heroes: Hero[] = [
  {
    alignment: Alignment.Red,
    army: [
      {
        count: 1,
        creature: CreatureId.Peasant,
      },
      {
        count: 1,
        creature: CreatureId.Archer,
      },
    ],
    experience: 10,
    heroClass: HeroClass.Knight,
    id: HeroId.LordKilburn,
    luck: 0,
    mobility: MaxMobility,
    morale: 0,
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
    experience: 125,
    heroClass: HeroClass.Barbarian,
    id: HeroId.Antoine,
    luck: 3,
    mobility: MaxMobility,
    morale: 1,
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
    experience: 642,
    heroClass: HeroClass.Sorceress,
    id: HeroId.Ariel,
    luck: -1,
    mobility: 0,
    morale: -1,
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
    experience: 17422,
    heroClass: HeroClass.Warlock,
    id: HeroId.Agar,
    luck: 3,
    mobility: 10,
    morale: 3,
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
    alignment: Alignment.Red,
    garrison: [],
    heroClass: HeroClass.Knight,
    id: TownId.Farm,
    structures: [
      {
        id: StructureId.Tent,
        isBuilt: true,
      },
    ],
  },
  {
    alignment: Alignment.Red,
    garrison: [],
    heroClass: HeroClass.Barbarian,
    id: TownId.Plains,
    structures: [
      {
        id: StructureId.Castle,
        isBuilt: true,
      },
    ],
    visitingHero: heroes[3],
  },
  {
    alignment: Alignment.Red,
    garrison: [],
    heroClass: HeroClass.Sorceress,
    id: TownId.Forest,
    structures: [
      {
        id: StructureId.Tent,
        isBuilt: true,
      },
    ],
  },
  {
    alignment: Alignment.Red,
    garrison: [],
    heroClass: HeroClass.Warlock,
    id: TownId.Mountains,
    structures: [
      {
        id: StructureId.Tent,
        isBuilt: true,
      },
    ],
  },
];

const initialState: GameState = {
  alignment: Alignment.Red,
  discoveredPuzzlePieces: 0,
  heroes,
  resources: {
    [Resource.Gold]: 10000,
    [Resource.Wood]: 20,
    [Resource.Ore]: 20,
    [Resource.Crystal]: 10,
    [Resource.Sulfur]: 10,
    [Resource.Gems]: 10,
    [Resource.Mercury]: 10,
  },
  scenario: campaignScenarios[0],
  towns,
};

export const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case GameActionType.SwapHeroTroops:
      return {
        ...swapGameHeroTroops(state, action.hero, action.index, action.withIndex),
      };
    case GameActionType.DismissHero:
      return {
        ...dismissGameHero(state, action.hero),
      };
    default:
      return state;
  }
};
