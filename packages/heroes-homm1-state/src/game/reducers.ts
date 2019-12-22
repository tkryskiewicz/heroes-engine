import {
  changeObjectOwner,
  changeTerrain,
  createMap,
  createPoint,
  dismissGameHero,
  dismissGameTroop,
  GameData,
  Map,
  placeObject,
  swapGameTroops,
  tradeGameItems,
  visitGameMapObject,
} from "heroes-core";
import {
  ArmySize,
  BaseMovementCost,
  buildGameStructure,
  buyMageGuildSpellBook,
  campaignScenarios,
  changeHeroObjectHero,
  createGameObject,
  creatures,
  DiagonalMovementCostModifier,
  EditorHeroArtifactCount,
  EditorMaxCreatureCount,
  EditorMaxHeroExperience,
  endGameTurn,
  gameObjects,
  heroClasses,
  heroes,
  HeroObject,
  moveGameObject,
  ObjectId,
  PlayerColorId,
  playerColors,
  PuzzlePieceCount,
  recruitGameTroop,
  ResourceId,
  resources,
  spells,
  startGameTurn,
  TerrainId,
  terrains,
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
  objects: gameObjects.reduce((p, c) => ({
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

let map: Map = createMap(14, 14, TerrainId.Grass, 4);

Object.keys(data.terrains).forEach((t, i) => {
  map = changeTerrain(map, createPoint(3 + i, 4), t);
});

Object.keys(data.heroClasses).forEach((hc, i) => {
  const heroId = Object.values(data.heroes).filter((h) => h.heroClass === hc)[0].id;

  const object = changeObjectOwner(
    changeHeroObjectHero(
      createGameObject(`hero/${i}`, ObjectId.Hero, data) as HeroObject,
      heroId,
      data,
    ),
    PlayerColorId.Red);

  map = placeObject(map, createPoint(3 + 2 * i, 7), object);
});

Object.keys(data.resources).forEach((r, i) => {
  const object = createGameObject(`treasure/${i}`, r, data);

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

      return {
        ...tradeGameItems(state, artifact, withArtifact),
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
