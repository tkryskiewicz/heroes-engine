import {
  addEquipableMapObjectItem,
  ArmedMapObjectData,
  buildTownStructure,
  createMapObject,
  CreatureMapObjectData,
  DwellingMapObjectData,
  endTownTurn,
  EquipableMapObjectData,
  Game,
  GameData,
  getObjectById,
  getTownStructure,
  Hero,
  initializeArmedMapObject,
  initializeCreatureMapObject,
  initializeDwellingMapObject,
  initializeEquipableMapObject,
  initializeLimitedInteractionMapObject,
  initializeMobileMapObject,
  initializeOwnableMapObject,
  initializeResourceGeneratorMapObject,
  initializeTreasureMapObject,
  isArmedMapObjectData,
  isCreatureMapObjectData,
  isDwellingMapObjectData,
  isDwellingStructure,
  isEquipableMapObjectData,
  isLimitedInteractionMapObjectData,
  isMobileMapObjectData,
  isObjectOwnedBy,
  isOwnableMapObjectData,
  isResourceGeneratorMapObjectData,
  isTreasureMapObjectData,
  LimitedInteractionMapObjectData,
  MapObject,
  MobileMapObjectData,
  multiplyResources,
  OwnableMapObjectData,
  replaceObject,
  ResourceGeneratorMapObjectData,
  Resources,
  subtractResources,
  Town,
  TreasureMapObjectData,
} from "heroes-core";

import {
  HeroMapObjectData,
  initializeHeroMapObject,
  initializeRandomCreatureMapObject,
  initializeRandomTownMapObject,
  isHeroMapObject,
  isHeroMapObjectData,
  isRandomCreatureMapObjectData,
  isRandomTownMapObjectData,
  isTownMapObject,
  MapObjectData,
  RandomCreatureMapObjectData,
  RandomTownMapObjectData,
  recruitTownMapObjectTroop,
  TownMapObject,
} from "./map";
import { Skill } from "./Skill";
import { constructSpellBook, SpellBookSpell } from "./SpellBook";
import { MageGuild, StructureId } from "./structures";

export interface EditorGameData {
  readonly maxCreatureCount: number;
  readonly heroArtifactCount: number;
  readonly maxHeroExperience: number;
}

declare module "heroes-core/src/Game" {
  interface GameData {
    readonly editor: EditorGameData;
  }
}

export const createGameMapObject = (id: string, dataId: string, data: GameData): MapObject => {
  interface Handler<TData extends MapObjectData> {
    readonly test: (objectData: MapObjectData) => objectData is TData;
    readonly initialize: (object: MapObject, objectData: TData, data: GameData) => MapObject;
  }

  // core
  const armedObjectHandler: Handler<ArmedMapObjectData> = {
    initialize: initializeArmedMapObject,
    test: isArmedMapObjectData,
  };

  const creatureObjectHandler: Handler<CreatureMapObjectData> = {
    initialize: initializeCreatureMapObject,
    test: isCreatureMapObjectData,
  };

  const dwellingObjectHandler: Handler<DwellingMapObjectData> = {
    initialize: initializeDwellingMapObject,
    test: isDwellingMapObjectData,
  };

  const equipableObjectHandler: Handler<EquipableMapObjectData> = {
    initialize: initializeEquipableMapObject,
    test: isEquipableMapObjectData,
  };

  const limitedInteractionObjectHandler: Handler<LimitedInteractionMapObjectData> = {
    initialize: initializeLimitedInteractionMapObject,
    test: isLimitedInteractionMapObjectData,
  };

  const mobileObjectHandler: Handler<MobileMapObjectData> = {
    initialize: initializeMobileMapObject,
    test: isMobileMapObjectData,
  };

  const ownableObjectHandler: Handler<OwnableMapObjectData> = {
    initialize: initializeOwnableMapObject,
    test: isOwnableMapObjectData,
  };

  const resourceGeneratorObjectHandler: Handler<ResourceGeneratorMapObjectData> = {
    initialize: initializeResourceGeneratorMapObject,
    test: isResourceGeneratorMapObjectData,
  };

  const treasureObjectHandler: Handler<TreasureMapObjectData> = {
    initialize: initializeTreasureMapObject,
    test: isTreasureMapObjectData,
  };

  // homm1
  const randomCreatureObjectHandler: Handler<RandomCreatureMapObjectData> = {
    initialize: initializeRandomCreatureMapObject,
    test: isRandomCreatureMapObjectData,
  };

  const randomTownObjectHandler: Handler<RandomTownMapObjectData> = {
    initialize: initializeRandomTownMapObject,
    test: isRandomTownMapObjectData,
  };

  const heroObjectHandler: Handler<HeroMapObjectData> = {
    initialize: initializeHeroMapObject,
    test: isHeroMapObjectData,
  };

  const handlers = [
    armedObjectHandler,
    creatureObjectHandler,
    dwellingObjectHandler,
    equipableObjectHandler,
    limitedInteractionObjectHandler,
    mobileObjectHandler,
    ownableObjectHandler,
    resourceGeneratorObjectHandler,
    treasureObjectHandler,
    heroObjectHandler,
    randomCreatureObjectHandler,
    randomTownObjectHandler,
  ];

  const objectData = data.mapObjects[dataId];

  return handlers.reduce((o, h) => {
    return {
      ...h.test(objectData) ?
      h.initialize(o, objectData as any, data) :
      o,
    };
  }, createMapObject(id, objectData));
};

export const getGameHeroes = (game: Game): Hero[] =>
  game.map.cells
    .map((c) => c.object)
    .filter(isHeroMapObject)
    .filter((o) => isObjectOwnedBy(o, game.activePlayer));

export const getGameHero = (game: Game, hero: string): Hero | undefined =>
  getGameHeroes(game).find((h) => h.id === hero);

export const getGameTowns = (game: Game): Town[] =>
  game.map.cells
    .map((c) => c.object)
    .filter(isTownMapObject)
    .filter((o) => isObjectOwnedBy(o, game.activePlayer));

export const getGameTown = (game: Game, town: string): Town | undefined =>
  getGameTowns(game).find((t) => t.id === town);

export const buildGameStructure = (game: Game, town: string, structure: string): Game => {
  const object = getObjectById(game.map, town);

  if (!isTownMapObject(object)) {
    throw new Error(`${town} is not a town object`);
  }

  const struct = getTownStructure(object, structure);

  if (!struct) {
    throw new Error(`${structure} is not a valid structure`);
  }

  const objectResult: TownMapObject = {
    ...object,
    ...buildTownStructure(object, structure),
  };

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
    resources: subtractResources(game.resources, struct.cost),
  };
};

export const recruitGameTroop = (game: Game, townId: string, structureId: string, count: number): Game => {
  const object = getObjectById(game.map, townId);

  if (!isTownMapObject(object)) {
    throw new Error(`${townId} is not a town object`);
  }

  const structure = getTownStructure(object, structureId);

  if (!structure) {
    throw new Error(`${structureId} is not a valid structure`);
  }

  if (!isDwellingStructure(structure)) {
    throw new Error(`${structureId} is not a dwelling`);
  }

  const cost = multiplyResources(structure.dwelling.cost, count);

  return {
    ...game,
    map: replaceObject(game.map, recruitTownMapObjectTroop(object, structureId, count)),
    resources: subtractResources(game.resources, cost),
  };
};

export const buyMageGuildSpellBook = (game: Game, heroId: string, townId: string, cost: Resources): Game => {
  const object = getObjectById(game.map, heroId);

  if (!isHeroMapObject(object)) {
    throw new Error(`${heroId} is not a hero object`);
  }

  const town = getGameTown(game, townId)!;

  // TODO: check if mage guild is built?
  const mageGuild = getTownStructure(town, StructureId.MageGuild) as MageGuild;

  const spellBook = constructSpellBook([
    ...mageGuild.data.spells.map((s): SpellBookSpell => ({
      charges: object.skills[Skill.Knowledge] || 0,
      id: s,
    })),
  ]);

  return {
    ...game,
    map: replaceObject(game.map, addEquipableMapObjectItem(object, spellBook)),
    resources: subtractResources(game.resources, cost),
  };
};

export const endGameTurn = (game: Game): Game => ({
  ...game,
  map: {
    ...game.map,
    cells: game.map.cells.map((c) => {
      if (!c.object) {
        return c;
      }

      const objectData = game.data.mapObjects[c.object.dataId];

      if (isTownMapObject(c.object)) {
        return {
          ...c,
          object: {
            ...c.object,
            ...endTownTurn(c.object),
          },
        };
      }

      if (isHeroMapObject(c.object) && isHeroMapObjectData(objectData)) {
        return {
          ...c,
          object: {
            ...c.object,
            mobility: objectData.baseMobility,
          },
        };
      }

      return c;
    }),
  },
  turn: game.turn + 1,
});
