import {
  changeObjectOwner,
  changeTerrain,
  createMap,
  createPoint,
  dismissGameHero,
  dismissGameTroop,
  GameData,
  ItemSelection,
  Map,
  placeObject,
  swapGameTroops,
  tradeGameItems,
  visitGameMapObject,
} from "heroes-core";
import {
  ArmySize,
  artifacts,
  BaseMovementCost,
  buildGameStructure,
  buyMageGuildSpellBook,
  campaignScenarios,
  changeHeroMapObjectHero,
  createGameMapObject,
  creatures,
  DiagonalMovementCostModifier,
  EditorHeroArtifactCount,
  EditorMaxCreatureCount,
  EditorMaxHeroExperience,
  endGameTurn,
  heroClasses,
  heroes,
  HeroMapObject,
  MapObjectId,
  mapObjects,
  moveGameObject,
  PlayerColorId,
  playerColors,
  PuzzlePieceCount,
  recruitGameTroop,
  ResourceId,
  resources,
  spells,
  startGameTurn,
  terrains,
  TerrainType,
  towns,
} from "heroes-homm1";

import { GameAction, GameActionType } from "./actions";
import { GameState } from "./state";

const data: GameData = {
  armySize: ArmySize,
  baseMovementCost: BaseMovementCost,
  creatures: creatures.reduce((p, c) => ({
    ...p,
    [c.id]: c,
  }), {}),
  diagonalMovementCostModifier: DiagonalMovementCostModifier,
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

Object.keys(data.terrains).forEach((t, i) => {
  map = changeTerrain(map, createPoint(3 + i, 4), t);
});

Object.keys(data.heroClasses).forEach((hc, i) => {
  const heroId = Object.values(data.heroes).filter((h) => h.heroClass === hc)[0].id;

  const object = changeObjectOwner(
    changeHeroMapObjectHero(
      createGameMapObject(`hero/${i}`, MapObjectId.Hero, data) as HeroMapObject,
      heroId,
      data,
    ),
    PlayerColorId.Red);

  map = placeObject(map, createPoint(3 + 2 * i, 7), object);
});

Object.keys(data.resources).forEach((r, i) => {
  const object = createGameMapObject(`treasure/${i}`, r, data);

  map = placeObject(map, createPoint(1 + i, 1), object);
});

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
        ...tradeGameItems(state, item, withItem),
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
