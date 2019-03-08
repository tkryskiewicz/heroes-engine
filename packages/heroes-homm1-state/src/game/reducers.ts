import {
  buildGameStructure,
  buildStructure,
  dismissGameHero,
  dismissGameTroop,
  endGameTurn,
  Hero,
  recruitGameTroop,
  swapGameTroops,
  Town,
} from "heroes-core";
import {
  Alignment,
  ArtifactId,
  buyMageGuildSpellBook,
  campaignScenarios,
  constructArtifact,
  constructHero,
  constructTown,
  creatureById,
  CreatureId,
  HeroId,
  MaxMobility,
  Resource,
  SpellId,
  spells,
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
      constructArtifact(ArtifactId.Spellbook, {
        spells: [],
      }),
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
      {
        ...constructArtifact(ArtifactId.Spellbook, {
          spells: [
            {
              charges: 2,
              id: SpellId.Bless,
            },
          ],
        }),
      },
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
  data: {
    creatureById,
    spellById: spells.reduce((p, c) => ({
      ...p,
      [c.id]: c,
    }), {}),
  },
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
    case GameActionType.SwapTroops:
      return {
        ...swapGameTroops(state, action.troop, action.withTroop),
      };
    case GameActionType.DismissTroop:
      return {
        ...dismissGameTroop(state, action.troop),
      };
    case GameActionType.DismissHero:
      return {
        ...dismissGameHero(state, action.hero),
      };
    case GameActionType.BuildStructure:
      return {
        ...buildGameStructure(state, action.town, action.structure),
      };
    case GameActionType.RecruitTroop:
      return {
        ...recruitGameTroop(state, action.town, action.structure, action.count),
      };
    case GameActionType.BuyMageGuildSpellBook:
      return {
        ...buyMageGuildSpellBook(state, action.hero, action.town, action.cost),
      };
    case GameActionType.EndTurn:
      return {
        ...endGameTurn(state),
      };
    default:
      return state;
  }
};
