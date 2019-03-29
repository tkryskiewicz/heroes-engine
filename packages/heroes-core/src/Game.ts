import { dismissArmyTroop, swapArmyTroops } from "./Army";
import { ArtifactData, ArtifactSelection } from "./Artifact";
import { Creature } from "./Creature";
import { Hero } from "./Hero";
import {
  getObject,
  handleDwellingMapObject,
  handlePickableMapObject,
  handleTreasureMapObject,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isPickableMapObjectData,
  isTreasureMapObject,
  Map,
  MapObjectData,
} from "./map";
import { multiplyResources, Resources, subtractResources } from "./Resource";
import { Scenario } from "./Scenario";
import { Spell } from "./Spell";
import { buildTownStructure, endTownTurn, recruitTownTroop, Town } from "./Town";
import { TroopSelection, TroopSelectionType } from "./Troop";

export interface GameData {
  readonly artifactById: { readonly [id: string]: ArtifactData; };
  readonly creatureById: { readonly [id: string]: Creature; };
  readonly spellById: { readonly [id: string]: Spell; };
  readonly mapObjects: { readonly [id: string]: MapObjectData; };
}

export interface Game {
  readonly data: GameData;
  readonly scenario: Scenario;
  readonly map: Map;
  readonly alignment: string;
  readonly resources: Resources;
  readonly heroes: Hero[];
  readonly towns: Town[];
  readonly discoveredPuzzlePieces: number;
}

export const getGameHero = (game: Game, hero: string): Hero | undefined =>
  game.heroes.find((h) => h.id === hero);

export const swapGameTroops = (
  game: Game,
  troop: TroopSelection,
  withTroop: TroopSelection,
  // TODO: extract to config
  autoCombine: boolean = true,
): Game => {
  const army = troop.type === TroopSelectionType.Hero ?
    game.heroes.find((h) => h.id === troop.id)!.army :
    game.towns.find((t) => t.id === troop.id)!.garrison;

  const withArmy = withTroop.type === TroopSelectionType.Hero ?
    game.heroes.find((h) => h.id === withTroop.id)!.army :
    game.towns.find((t) => t.id === withTroop.id)!.garrison;

  const [armyResult, withArmyResult] = swapArmyTroops(army, troop.index, withArmy, withTroop.index, {
    autoCombineTroops: autoCombine,
    preventMovingLastTroop: troop.type === TroopSelectionType.Hero,
  });

  return {
    ...game,
    heroes: game.heroes.map((h) => h.id === troop.id || h.id === withTroop.id ?
      {
        ...h,
        army: h.id === troop.id ? armyResult : withArmyResult,
      } :
      h,
    ),
    towns: game.towns.map((t) => t.id === troop.id || t.id === withTroop.id ?
      {
        ...t,
        garrison: t.id === troop.id ? armyResult : withArmyResult,
      } :
      t,
    ),
  };
};

export const tradeGameArtifacts = (game: Game, artifact: ArtifactSelection, withArtifact: ArtifactSelection): Game => {
  const hero = getGameHero(game, artifact.hero);

  if (!hero) {
    return game;
  }

  const withHero = getGameHero(game, withArtifact.hero);

  if (!withHero) {
    return game;
  }

  const artifacts = [...hero.artifacts];

  const withArtifacts = artifact.hero === withArtifact.hero ?
    artifacts :
    [...withHero.artifacts];

  artifacts[artifact.index] = withHero.artifacts[withArtifact.index];
  withArtifacts[withArtifact.index] = hero.artifacts[artifact.index];

  return {
    ...game,
    heroes: game.heroes.map((h) => h.id === hero.id || h.id === withHero.id ?
      {
        ...h,
        artifacts: h.id === hero.id ? artifacts : withArtifacts,
      } :
      h,
    ),
  };
};

export const dismissGameHero = (game: Game, hero: string): Game => ({
  ...game,
  heroes: game.heroes.filter((h) => h.id !== hero),
});

export const dismissGameTroop = (game: Game, troop: TroopSelection): Game => ({
  ...game,
  heroes: game.heroes.map((h) => troop.type === TroopSelectionType.Hero && h.id === troop.id ?
    {
      ...h,
      army: dismissArmyTroop(h.army, troop.index),
    } :
    h,
  ),
  towns: game.towns.map((t) => troop.type === TroopSelectionType.Garrison && t.id === troop.id ?
    {
      ...t,
      garrison: dismissArmyTroop(t.garrison, troop.index),
    } :
    t,
  ),
});

export const getGameTown = (game: Game, town: string): Town | undefined =>
  game.towns.find((t) => t.id === town);

export const buildGameStructure = (game: Game, town: string, structure: string): Game => {
  const twn = game.towns.find((t) => t.id === town);

  if (!twn) {
    return game;
  }

  const struct = twn.structures.find((s) => s.id === structure);

  if (!struct) {
    return game;
  }

  return {
    ...game,
    resources: subtractResources(game.resources, struct.cost),
    towns: game.towns.map((t) => t.id === town ? buildTownStructure(twn, structure) : t),
  };
};

export const recruitGameTroop = (game: Game, townId: string, structureId: string, count: number): Game => {
  const town = game.towns.find((t) => t.id === townId);

  if (!town) {
    return game;
  }

  const structure = town.structures.find((s) => s.id === structureId);

  if (!structure || !structure.dwelling) {
    return game;
  }

  const cost = multiplyResources(structure.dwelling.cost, count);

  return {
    ...game,
    resources: subtractResources(game.resources, cost),
    towns: game.towns.map((t) => t === town ? recruitTownTroop(town, structureId, count) : t),
  };
};

export const endGameTurn = (game: Game): Game => ({
  ...game,
  towns: game.towns.map((t) => endTownTurn(t)),
});

export const visitGameMapObject = (game: Game, id: string, hero: string): Game => {
  const object = getObject(game.map, id);

  if (!object) {
    throw new Error("Invalid object");
  }

  const objectData = game.data.mapObjects[object.id];

  const activeHero = getGameHero(game, hero);

  if (!activeHero) {
    throw new Error("Invalid hero");
  }

  if (isTreasureMapObject(object)) {
    game = handleTreasureMapObject(game, object);
  }

  if (isDwellingMapObjectData(objectData) && isDwellingMapObject(object)) {
    game = handleDwellingMapObject(game, object, objectData, activeHero);
  }

  if (isPickableMapObjectData(objectData)) {
    game = handlePickableMapObject(game, object);
  }

  return {
    ...game,
  };
};
