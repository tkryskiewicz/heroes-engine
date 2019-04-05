import { ArtifactData, ArtifactSelection } from "./Artifact";
import { Creature } from "./Creature";
import { Hero } from "./Hero";
import {
  dismissArmedMapObjectTroop,
  getObject,
  handleArtifactMapObject,
  handleDwellingMapObject,
  handleLimitedInteractionMapObject,
  handleOwnableMapObject,
  handlePickableMapObject,
  handlePuzzleMapObject,
  handleResourceGeneratorMapObject,
  handleTreasureMapObject,
  HeroMapObject,
  isArtifactMapObjectData,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isHeroMapObject,
  isLimitedInteractionMapObject,
  isLimitedInteractionMapObjectData,
  isObjectOwnedBy,
  isOwnableMapObject,
  isOwnableMapObjectData,
  isPickableMapObjectData,
  isPuzzleMapObjectData,
  isResourceGeneratorMapObjectData,
  isTownMapObject,
  isTreasureMapObject,
  Map,
  MapObject,
  MapObjectData,
  recruitTownMapObjectTroop,
  removeObject,
  replaceObject,
  swapArmedMapObjectTroops,
  TownMapObject,
} from "./map";
import { multiplyResources, ResourceData, Resources, subtractResources } from "./Resource";
import { Scenario } from "./Scenario";
import { Spell } from "./Spell";
import { isDwellingStructure } from "./Structure";
import { buildTownStructure, endTownTurn, getTownStructure, Town } from "./Town";
import { TroopSelection, TroopSelectionType } from "./Troop";

export interface GameData {
  readonly resources: { readonly [id: string]: ResourceData; };
  readonly artifacts: { readonly [id: string]: ArtifactData; };
  readonly creatures: { readonly [id: string]: Creature; };
  readonly spells: { readonly [id: string]: Spell; };
  readonly mapObjects: { readonly [id: string]: MapObjectData; };
}

export interface Puzzle {
  readonly totalPieces: number;
  readonly uncoveredPieces: number;
}

export interface Game {
  readonly data: GameData;
  readonly scenario: Scenario;
  readonly map: Map;
  readonly alignment: string;
  readonly resources: Resources;
  readonly puzzle: Puzzle;
}

export const getGameHeroes = (game: Game): Hero[] =>
  game.map.tiles
    .map((t) => t.object)
    .filter(isHeroMapObject)
    .filter((o) => isObjectOwnedBy(o, game.alignment))
    .map((o) => o.hero);

export const getGameHero = (game: Game, hero: string): Hero | undefined =>
  getGameHeroes(game).find((h) => h.id === hero);

export const swapGameTroops = (
  game: Game,
  troop: TroopSelection,
  withTroop: TroopSelection,
  // TODO: extract to config
  autoCombine: boolean = true,
): Game =>
  swapArmedMapObjectTroops(game, troop, withTroop, autoCombine, troop.type === TroopSelectionType.Hero);

export const tradeGameArtifacts = (game: Game, artifact: ArtifactSelection, withArtifact: ArtifactSelection): Game => {
  const object = getObject(game.map, artifact.hero);

  if (!isHeroMapObject(object)) {
    throw new Error(`${artifact.hero} is not a hero object`);
  }

  const withObject = getObject(game.map, withArtifact.hero);

  if (!isHeroMapObject(withObject)) {
    throw new Error(`${withArtifact.hero} is not a hero object`);
  }

  const artifacts = [...object.hero.artifacts];

  const withArtifacts = artifact.hero === withArtifact.hero ?
    artifacts :
    [...withObject.hero.artifacts];

  artifacts[artifact.index] = withObject.hero.artifacts[withArtifact.index];
  withArtifacts[withArtifact.index] = object.hero.artifacts[artifact.index];

  const objectResult: HeroMapObject = {
    ...object,
    hero: {
      ...object.hero,
      artifacts,
    },
  };

  const withObjectResult: HeroMapObject = {
    ...withObject,
    hero: {
      ...withObject.hero,
      artifacts: withArtifacts,
    },
  };

  return {
    ...game,
    map: replaceObject(replaceObject(game.map, objectResult), withObjectResult),
  };
};

export const dismissGameHero = (game: Game, hero: string): Game => ({
  ...game,
  map: removeObject(game.map, hero),
});

export const dismissGameTroop = (game: Game, troop: TroopSelection): Game =>
  dismissArmedMapObjectTroop(game, troop);

export const getGameTowns = (game: Game): Town[] =>
  game.map.tiles
    .map((o) => o.object)
    .filter(isTownMapObject)
    .filter((o) => isObjectOwnedBy(o, game.alignment))
    .map((o) => o.town);

export const getGameTown = (game: Game, town: string): Town | undefined =>
  getGameTowns(game).find((t) => t.id === town);

export const buildGameStructure = (game: Game, town: string, structure: string): Game => {
  const object = getObject(game.map, town);

  if (!isTownMapObject(object)) {
    throw new Error(`${town} is not a town object`);
  }

  const struct = getTownStructure(object.town, structure);

  if (!struct) {
    throw new Error(`${structure} is not a valid structure`);
  }

  const objectResult: TownMapObject = {
    ...object,
    town: buildTownStructure(object.town, structure),
  };

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
    resources: subtractResources(game.resources, struct.cost),
  };
};

export const recruitGameTroop = (game: Game, townId: string, structureId: string, count: number): Game => {
  const object = getObject(game.map, townId);

  if (!isTownMapObject(object)) {
    throw new Error(`${townId} is not a town object`);
  }

  const structure = getTownStructure(object.town, structureId);

  if (!structure) {
    throw new Error(`${structureId} is not a valid structure`);
  }

  if (!isDwellingStructure(structure)) {
    throw new Error(`${structureId} is not a dwelling`);
  }

  const cost = multiplyResources(structure.dwelling.cost, count);

  return {
    ...recruitTownMapObjectTroop(game, townId, structureId, count),
    resources: subtractResources(game.resources, cost),
  };
};

export const startGameTurn = (game: Game): Game => {
  const objects = game.map.tiles
    .map((t) => t.object)
    .filter((o): o is MapObject => o !== undefined)
    .filter((o) => isOwnableMapObject(o) && isObjectOwnedBy(o, game.alignment));

  objects
    .forEach((o) => {
      const objectData = game.data.mapObjects[o.dataId];

      if (isResourceGeneratorMapObjectData(objectData)) {
        game = handleResourceGeneratorMapObject(game, o, objectData);
      }
    });

  return {
    ...game,
  };
};

export const endGameTurn = (game: Game): Game => ({
  ...game,
  map: getGameTowns(game).reduce<Map>((p, c) => {
    const object = getObject(p, c.id);

    if (!isTownMapObject(object)) {
      throw new Error(`${c.id} is not a town`);
    }

    const objectResult: TownMapObject = {
      ...object,
      town: endTownTurn(c),
    };

    return replaceObject(p, objectResult);
  }, game.map),
});

export const visitGameMapObject = (game: Game, id: string, hero: string): Game => {
  const object = getObject(game.map, id);

  if (!object) {
    throw new Error("Invalid object");
  }

  const objectData = game.data.mapObjects[object.dataId];

  const activeHero = getGameHero(game, hero);

  if (!activeHero) {
    throw new Error("Invalid hero");
  }

  if (isLimitedInteractionMapObjectData(objectData) && isLimitedInteractionMapObject(object)) {
    game = handleLimitedInteractionMapObject(game, object, objectData, activeHero);
  }

  if (isTreasureMapObject(object)) {
    game = handleTreasureMapObject(game, object);
  }

  if (isArtifactMapObjectData(objectData)) {
    game = handleArtifactMapObject(game, objectData, activeHero);
  }

  if (isDwellingMapObjectData(objectData) && isDwellingMapObject(object)) {
    game = handleDwellingMapObject(game, object, objectData, activeHero);
  }

  if (isPuzzleMapObjectData(objectData)) {
    game = handlePuzzleMapObject(game);
  }

  if (isPickableMapObjectData(objectData)) {
    game = handlePickableMapObject(game, object);
  }

  if (isOwnableMapObjectData(objectData) && isOwnableMapObject(object)) {
    game = handleOwnableMapObject(game, object, objectData);
  }

  return {
    ...game,
  };
};
