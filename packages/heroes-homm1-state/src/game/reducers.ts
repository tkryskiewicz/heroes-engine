import {
  ArtifactMapObjectData,
  buildGameStructure,
  buildStructure,
  createDwellingMapObject,
  createHeroMapObject,
  createLimitedInteractionMapObject,
  createMap,
  createMapObject,
  createResourceGeneratorMapObject,
  createTownMapObject,
  createTreasureMapObject,
  dismissGameHero,
  dismissGameTroop,
  DwellingMapObjectData,
  endGameTurn,
  Hero,
  HeroMapObjectData,
  LimitedInteractionMapObjectData,
  Map,
  placeObject,
  recruitGameTroop,
  ResourceGeneratorMapObjectData,
  startGameTurn,
  swapGameTroops,
  TownMapObject,
  TownMapObjectData,
  tradeGameArtifacts,
  TreasureMapObjectData,
  visitGameMapObject,
} from "heroes-core";
import {
  Alignment,
  ArtifactId,
  artifacts,
  buyMageGuildSpellBook,
  campaignScenarios,
  constructArtifact,
  constructHero,
  constructSpellBook,
  constructTown,
  creatureById,
  CreatureId,
  HeroId,
  MapObjectId,
  mapObjects,
  MaxMobility,
  PuzzlePieceCount,
  Resource,
  resources,
  SpellId,
  spells,
  StructureId,
  TerrainType,
  TownId,
} from "heroes-homm1";

import { GameAction, GameActionType } from "./actions";
import { GameState } from "./state";

const heroes: Hero[] = [
  {
    ...constructHero(HeroId.LordKilburn),
    artifacts: [
      constructArtifact(ArtifactId.ThunderMaceOfDominion),
      constructArtifact(ArtifactId.UltimateSwordOfDominion),
    ],
    mobility: MaxMobility,
  },
  {
    ...constructHero(HeroId.Antoine),
    luck: 3,
    mobility: MaxMobility,
    morale: 1,
  },
  {
    ...constructHero(HeroId.Ariel),
    artifacts: [
      constructSpellBook([]),
    ],
    luck: -1,
    mobility: 0,
    morale: -1,
  },
  {
    ...constructHero(HeroId.Agar),
    artifacts: [
      {
        ...constructSpellBook([
          {
            charges: 2,
            id: SpellId.Bless,
          },
        ]),
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
);

const plainsTown = constructTown(
  TownId.Plains,
  "Plains Town",
);

const townData = mapObjects.find((o) => o.id === MapObjectId.Town)! as TownMapObjectData;

const towns: TownMapObject[] = [
  {
    ...createTownMapObject(
      TownId.Farm,
      townData,
      {
        ...farmTown,
        structures: farmTown.structures.map(buildStructure),
      },
      Alignment.Red,
    ),
    army: [
      {
        count: 1,
        creature: CreatureId.Peasant,
      },
    ],
  },
  createTownMapObject(
    TownId.Plains,
    townData,
    {
      ...plainsTown,
      structures: plainsTown.structures.map((s) => s.id === StructureId.Castle ? buildStructure(s) : s),
    },
    Alignment.Red,
  ),
  createTownMapObject(
    TownId.Forest,
    townData,
    constructTown(
      TownId.Forest,
      "Forest Town",
    ),
    Alignment.Red,
  ),
  createTownMapObject(
    TownId.Mountains,
    townData,
    constructTown(
      TownId.Mountains,
      "Mountains Town",
    ),
    Alignment.Red,
  ),
];

let map: Map = createMap(14, 14, TerrainType.Grass);

const heroData = mapObjects.find((o) => o.id === MapObjectId.Hero)! as HeroMapObjectData;

heroes.forEach((h, i) => {
  map = placeObject(map, { x: 1 + 2 * i, y: 6 }, createHeroMapObject(h.id, heroData, h, Alignment.Red));
});

towns.forEach((t, i) => {
  map = placeObject(map, { x: 8, y: 1 + 3 * i }, t);
});

const thatchedHutData = mapObjects.find((o) => o.id === MapObjectId.ThatchedHut)! as DwellingMapObjectData;

map = placeObject(map, { x: 2, y: 1 }, createDwellingMapObject("thatchedHut/1", thatchedHutData));
map = placeObject(map, { x: 3, y: 1 }, createDwellingMapObject("thatchedHut/2", thatchedHutData));

const woodData = mapObjects.find((o) => o.id === MapObjectId.Wood)! as TreasureMapObjectData;

map = placeObject(map, { x: 4, y: 1 }, createTreasureMapObject("wood/1", woodData));
map = placeObject(map, { x: 5, y: 1 }, createTreasureMapObject("wood/2", woodData));

const obeliskData = mapObjects.find((o) => o.id === MapObjectId.Obelisk)! as LimitedInteractionMapObjectData;

map = placeObject(map, { x: 6, y: 1 }, createLimitedInteractionMapObject("obelisk/1", obeliskData));
map = placeObject(map, { x: 7, y: 1 }, createLimitedInteractionMapObject("obelisk/2", obeliskData));

const mineData = mapObjects.find((o) => o.id === MapObjectId.OreMine)! as ResourceGeneratorMapObjectData;

map = placeObject(map, { x: 2, y: 3 }, createResourceGeneratorMapObject("ore-mine/1", mineData));
map = placeObject(map, { x: 4, y: 3 }, createResourceGeneratorMapObject("ore-mine/2", mineData));

const fourLeafCloverData = mapObjects.find((o) => o.id === ArtifactId.FourLeafClover)! as ArtifactMapObjectData;

map = placeObject(map, { x: 0, y: 0 }, createMapObject("artifact/1", fourLeafCloverData));

const peasantData = mapObjects.find((o) => o.id === CreatureId.Peasant)!;

map = placeObject(map, { x: 2, y: 0 }, createMapObject("creature/1", peasantData));

const initialState: GameState = {
  alignment: Alignment.Red,
  data: {
    artifacts: artifacts.reduce((p, c) => ({
      ...p,
      [c.id]: c,
    }), {}),
    creatures: creatureById,
    mapObjects: mapObjects.reduce((p, c) => ({
      ...p,
      [c.id]: c,
    }), {}),
    resources: resources.reduce((p, c) => ({
      ...p,
      [c.id]: c,
    }), {}),
    spells: spells.reduce((p, c) => ({
      ...p,
      [c.id]: c,
    }), {}),
  },
  map,
  puzzle: {
    totalPieces: PuzzlePieceCount,
    uncoveredPieces: 0,
  },
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
    case GameActionType.TradeArtifacts:
      return {
        ...tradeGameArtifacts(state, action.artifact, action.withArtifact),
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
    case GameActionType.StartTurn:
      return {
        ...startGameTurn(state),
      };
    case GameActionType.EndTurn:
      return {
        ...endGameTurn(state),
      };
    case GameActionType.VisitMapObject:
      return {
        ...visitGameMapObject(state, action.id, action.hero),
      };
    default:
      return state;
  }
};
