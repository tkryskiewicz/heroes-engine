import {
  createMap,
  createPoint,
  dismissGameHero,
  dismissGameTroop,
  GameData,
  ItemSelection,
  Map,
  moveGameObject,
  placeObject,
  startGameTurn,
  swapGameTroops,
  tradeGameArtifacts,
  visitGameMapObject,
} from "heroes-core";
import {
  ArmySize,
  artifacts,
  buildGameStructure,
  buyMageGuildSpellBook,
  campaignScenarios,
  constructGameHero,
  createHeroMapObject,
  creatures,
  EditorHeroArtifactCount,
  EditorMaxCreatureCount,
  EditorMaxHeroExperience,
  endGameTurn,
  heroClasses,
  heroes,
  HeroId,
  HeroMapObjectData,
  MapObjectId,
  mapObjects,
  PlayerColorId,
  playerColors,
  PuzzlePieceCount,
  recruitGameTroop,
  ResourceId,
  resources,
  spells,
  terrains,
  TerrainType,
  towns,
} from "heroes-homm1";

import { GameAction, GameActionType } from "./actions";
import { GameState } from "./state";

const data: GameData = {
  armySize: ArmySize,
  creatures: creatures.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  editor: {
    heroArtifactCount: EditorHeroArtifactCount,
    maxCreatureCount: EditorMaxCreatureCount,
    maxHeroExperience: EditorMaxHeroExperience,
  },
  heroClasses: heroClasses.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  heroes: heroes.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  items: artifacts.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  mapObjects: mapObjects.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  playerColors,
  resources: resources.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  spells: spells.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  terrains: terrains.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  towns: towns.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
};

let map: Map = createMap(14, 14, TerrainType.Grass, 4);

const knightHero = constructGameHero("hero/1", HeroId.LordKilburn, data);

const knightHeroMapObject = createHeroMapObject(
  "hero/1",
  data.mapObjects[MapObjectId.Hero] as HeroMapObjectData,
  knightHero,
  PlayerColorId.Red,
);

map = placeObject(map, createPoint(5, 7), knightHeroMapObject);

const barbarianHero = constructGameHero("hero/2", HeroId.Thundax, data);

const barbarianHeroMapObject = createHeroMapObject(
  "hero/1",
  data.mapObjects[MapObjectId.Hero] as HeroMapObjectData,
  barbarianHero,
  PlayerColorId.Red,
);

map = placeObject(map, createPoint(7, 7), barbarianHeroMapObject);

const sorceressHero = constructGameHero("hero/3", HeroId.Ariel, data);

const sorceressHeroMapObject = createHeroMapObject(
  "hero/3",
  data.mapObjects[MapObjectId.Hero] as HeroMapObjectData,
  sorceressHero,
  PlayerColorId.Red,
);

map = placeObject(map, createPoint(9, 7), sorceressHeroMapObject);

const warlockHero = constructGameHero("hero/4", HeroId.Agar, data);

const warlockHeroMapObject = createHeroMapObject(
  "hero/4",
  data.mapObjects[MapObjectId.Hero] as HeroMapObjectData,
  warlockHero,
  PlayerColorId.Red,
);

map = placeObject(map, createPoint(11, 7), warlockHeroMapObject);

const initialState: GameState = {
  activePlayer: PlayerColorId.Red,
  data,
  map,
  puzzle: {
    totalPieces: PuzzlePieceCount,
    uncoveredPieces: 0,
  },
  resources: {
    [ResourceId.Gold]: 20000,
    [ResourceId.Wood]: 20,
    [ResourceId.Ore]: 20,
    [ResourceId.Crystal]: 10,
    [ResourceId.Sulfur]: 10,
    [ResourceId.Gems]: 10,
    [ResourceId.Mercury]: 10,
  },
  scenario: campaignScenarios[0],
  turn: 0,
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
      const { artifact, withArtifact } = action;

      const item: ItemSelection = {
        index: artifact.index,
        objectId: artifact.hero,
      };

      const withItem: ItemSelection = {
        index: withArtifact.index,
        objectId: withArtifact.hero,
      };

      return {
        ...tradeGameArtifacts(state, item, withItem),
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
    case GameActionType.MoveObject:
      return {
        ...moveGameObject(state, action.id, action.direction),
      };
    default:
      return state;
  }
};
