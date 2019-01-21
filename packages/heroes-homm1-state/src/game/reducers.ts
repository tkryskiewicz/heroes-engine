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
  constructArtifact,
  constructHero,
  constructTown,
  CreatureId,
  HeroId,
  MaxMobility,
  Resource,
  StructureId,
  TownId,
} from "heroes-homm1";

import { GameAction, GameActionType } from "./actions";
import { GameState } from "./state";

const heroes: Hero[] = [
  {
    ...constructHero(
      HeroId.LordKilburn,
      Alignment.Red,
    ),
    artifacts: [
      constructArtifact(ArtifactId.ThunderMaceOfDominion),
    ],
    mobility: MaxMobility,
  },
  {
    ...constructHero(
      HeroId.Antoine,
      Alignment.Red,
    ),
    luck: 3,
    mobility: MaxMobility,
    morale: 1,
  },
  {
    ...constructHero(
      HeroId.Ariel,
      Alignment.Red,
    ),
    artifacts: [
      constructArtifact(ArtifactId.Spellbook),
    ],
    luck: -1,
    mobility: 0,
    morale: -1,
  },
  {
    ...constructHero(
      HeroId.Agar,
      Alignment.Red,
    ),
    artifacts: [
      constructArtifact(ArtifactId.Spellbook),
    ],
    luck: 3,
    mobility: 10,
    morale: 3,
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

const plainsTown = constructTown(
  TownId.Plains,
  "Plains Town",
  Alignment.Red,
  [],
);

const towns: Town[] = [
  {
    ...farmTown,
    structures: farmTown.structures.map(buildStructure),
  },
  {
    ...plainsTown,
    structures: plainsTown.structures.map((s) => s.id === StructureId.Castle ? buildStructure(s) : s),
  },
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
