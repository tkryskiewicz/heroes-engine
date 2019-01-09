import {
  buildGameStructure,
  buildStructure,
  dismissGameHero,
  dismissGameHeroTroop,
  endGameTurn,
  Hero,
  recruitGameTroop,
  swapGameGarrisonTroops,
  swapGameHeroTroops,
  Town,
} from "heroes-core";
import {
  Alignment,
  ArtifactId,
  campaignScenarios,
  constructTown,
  CreatureId,
  HeroClass,
  HeroId,
  MaxMobility,
  Resource,
  Skill,
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
    artifacts: [
      ArtifactId.ThunderMaceOfDominion,
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
    artifacts: [],
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
    artifacts: [],
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
    artifacts: [],
    experience: 174,
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

const farmTown = constructTown(
  TownId.Farm,
  "Farm Town",
  Alignment.Red,
  [
    {
      count: 1,
      creature: CreatureId.Peasant,
    },
  ],
);

const towns: Town[] = [
  {
    ...farmTown,
    structures: farmTown.structures.map(buildStructure),
  },
  constructTown(
    TownId.Plains,
    "Plains Town",
    Alignment.Red,
    [],
  ),
  constructTown(
    TownId.Forest,
    "Forest Town",
    Alignment.Red,
    [],
  ),
  constructTown(
    TownId.Mountains,
    "Mountains Town",
    Alignment.Red,
    [],
  ),
];

const initialState: GameState = {
  alignment: Alignment.Red,
  discoveredPuzzlePieces: 0,
  heroes,
  resources: {
    [Resource.Gold]: 20000,
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
    case GameActionType.DismissHeroTroop:
      return {
        ...dismissGameHeroTroop(state, action.hero, action.index),
      };
    case GameActionType.DismissHero:
      return {
        ...dismissGameHero(state, action.hero),
      };
    case GameActionType.SwapGarrisonTroops:
      return {
        ...swapGameGarrisonTroops(state, action.town, action.index, action.withIndex),
      };
    case GameActionType.BuildStructure:
      return {
        ...buildGameStructure(state, action.town, action.structure),
      };
    case GameActionType.RecruitTroop:
      return {
        ...recruitGameTroop(state, action.town, action.structure, action.count),
      };
    case GameActionType.EndTurn:
      return {
        ...endGameTurn(state),
      };
    default:
      return state;
  }
};
