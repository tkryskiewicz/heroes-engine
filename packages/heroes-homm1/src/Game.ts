import {
  addObjectItem,
  addResources,
  ArmedObjectData,
  buildTownStructure,
  canMobileObjectMove,
  createMapObject,
  CreatureMapObjectData,
  DwellingMapObjectData,
  endTownTurn,
  EquipableObjectData,
  Game,
  GameData,
  GameObject,
  GameObjectData,
  generateObjectResources,
  getCellIndex,
  getObjectById,
  getObjectByPoint,
  getObjectPosition,
  getTownStructure,
  Hero,
  initializeArmedObject,
  initializeCreatureMapObject,
  initializeDwellingMapObject,
  initializeEquipableObject,
  initializeLimitedInteractionObject,
  initializeMobileObject,
  initializeOwnableObject,
  initializeTreasureObject,
  isArmedObjectData,
  isCreatureMapObjectData,
  isDwellingMapObjectData,
  isDwellingStructure,
  isEquipableObjectData,
  isLimitedInteractionObjectData,
  isMobileObject,
  isMobileObjectData,
  isObjectOwnedBy,
  isOwnableObject,
  isOwnableObjectData,
  isPointTaken,
  isPointValid,
  isResourceGeneratorObjectData,
  isTreasureObjectData,
  LimitedInteractionObjectData,
  MapObject,
  MapObjectOrientation,
  MobileObjectData,
  moveMobileObject,
  moveObject,
  multiplyResources,
  OwnableObjectData,
  replaceObject,
  resetMobileObjectMobility,
  ResourceGeneratorObjectData,
  Resources,
  subtractResources,
  Town,
  translatePointDirection,
  TreasureObjectData,
  visitGameMapObject,
} from "heroes-core";
import { isDefined } from "heroes-helpers";

import {
  createTownMapObject,
  HeroMapObject,
  HeroMapObjectData,
  initializeHeroMapObject,
  initializeRandomCreatureMapObject,
  initializeRandomTownMapObject,
  isHeroMapObject,
  isHeroMapObjectData,
  isRandomCreatureMapObjectData,
  isRandomTownMapObjectData,
  isTownMapObject,
  RandomCreatureMapObjectData,
  RandomTownMapObjectData,
  recruitTownMapObjectTroop,
  TownMapObject,
  TownMapObjectData,
} from "./map";
import { getInitialMobility, getMovementCost } from "./objects";
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

interface Handler<TObjectData extends GameObjectData, TObject extends GameObject = GameObject> {
  readonly objectDataTest?: (objectData: GameObjectData) => objectData is TObjectData;
  readonly objectTest?: (object: MapObject) => object is TObject;
  readonly initialize: (object: MapObject, objectData: TObjectData, data: GameData) => MapObject;
  readonly turnStart?: (object: TObject, objectData: TObjectData, game: Game) => TObject;
  readonly turnEnd?: (object: TObject, objectData: TObjectData, data: GameData) => TObject;
}

// core
const armedObjectHandler: Handler<ArmedObjectData> = {
  initialize: initializeArmedObject,
  // @ts-ignore
  objectDataTest: isArmedObjectData,
};

const creatureObjectHandler: Handler<CreatureMapObjectData> = {
  initialize: initializeCreatureMapObject,
  // @ts-ignore
  objectDataTest: isCreatureMapObjectData,
};

const dwellingObjectHandler: Handler<DwellingMapObjectData> = {
  initialize: initializeDwellingMapObject,
  // @ts-ignore
  objectDataTest: isDwellingMapObjectData,
};

const equipableObjectHandler: Handler<EquipableObjectData> = {
  initialize: initializeEquipableObject,
  // @ts-ignore
  objectDataTest: isEquipableObjectData,
};

const limitedInteractionObjectHandler: Handler<LimitedInteractionObjectData> = {
  initialize: initializeLimitedInteractionObject,
  // @ts-ignore
  objectDataTest: isLimitedInteractionObjectData,
};

const mobileObjectHandler: Handler<MobileObjectData> = {
  initialize: initializeMobileObject,
  // @ts-ignore
  objectDataTest: isMobileObjectData,
};

const ownableObjectHandler: Handler<OwnableObjectData> = {
  initialize: initializeOwnableObject,
  objectDataTest: isOwnableObjectData,
};

const resourceGeneratorObjectHandler: Handler<ResourceGeneratorObjectData> = {
  initialize: (object) => object,
  // @ts-ignore
  objectDataTest: isResourceGeneratorObjectData,
};

const treasureObjectHandler: Handler<TreasureObjectData> = {
  initialize: initializeTreasureObject,
  // @ts-ignore
  objectDataTest: isTreasureObjectData,
};

// homm1
const randomCreatureObjectHandler: Handler<RandomCreatureMapObjectData> = {
  initialize: initializeRandomCreatureMapObject,
  // @ts-ignore
  objectDataTest: isRandomCreatureMapObjectData,
};

const townObjectHandler: Handler<TownMapObjectData, TownMapObject> = {
  // @ts-ignore
  initialize: createTownMapObject,
  objectTest: isTownMapObject,
  turnEnd: (object) => ({
    ...object,
    ...endTownTurn(object),
  }),
};

const randomTownObjectHandler: Handler<RandomTownMapObjectData> = {
  initialize: initializeRandomTownMapObject,
  // @ts-ignore
  objectDataTest: isRandomTownMapObjectData,
};

const heroObjectHandler: Handler<HeroMapObjectData, HeroMapObject> = {
  initialize: initializeHeroMapObject,
  // @ts-ignore
  objectDataTest: isHeroMapObjectData,
  objectTest: isHeroMapObject,
  turnStart: (object, objectData, game) => {
    const position = getObjectPosition(game.map, object.id)!;

    const cell = game.map.cells[getCellIndex(game.map.width, position)];

    const ownedObjects = game.map.cells
      .map((c) => c.object)
      .filter(isDefined)
      .filter(isOwnableObject)
      .filter((o) => isObjectOwnedBy(o, game.activePlayer));

    const mobility = getInitialMobility(object, objectData, cell.terrain, ownedObjects, game.data);

    return {
      ...object,
      mobility,
    };
  },
};

const objectHandlers = [
  armedObjectHandler,
  creatureObjectHandler,
  dwellingObjectHandler,
  equipableObjectHandler,
  limitedInteractionObjectHandler,
  mobileObjectHandler,
  ownableObjectHandler,
  resourceGeneratorObjectHandler,
  treasureObjectHandler,
  townObjectHandler,
  heroObjectHandler,
  randomCreatureObjectHandler,
  randomTownObjectHandler,
];

export const createGameMapObject = (id: string, dataId: string, data: GameData): MapObject => {
  const objectData = data.mapObjects[dataId];

  return objectHandlers.reduce((o, h) => {
    return {
      ...h.objectDataTest && h.objectDataTest(objectData) ?
      // @ts-ignore
      h.initialize(o, objectData, data) :
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
    map: replaceObject(game.map, addObjectItem(object, spellBook)),
    resources: subtractResources(game.resources, cost),
  };
};

export const startGameTurn = (game: Game): Game => {
  const objects = game.map.cells
    .map((c) => c.object)
    .filter(isDefined)
    .filter((o) => isOwnableObject(o) && isObjectOwnedBy(o, game.activePlayer));

  objects
    .forEach((o) => {
      const objectData = game.data.mapObjects[o.dataId];

      if (isResourceGeneratorObjectData(objectData)) {
        const resources = generateObjectResources(objectData);

        game = {
          ...game,
          resources: addResources(game.resources, resources),
        };
      }
    });

  return {
    ...game,
    map: {
      ...game.map,
      cells: game.map.cells.map((c) => {
        if (!c.object) {
          return c;
        }

        const object = c.object;

        const objectData = game.data.mapObjects[object.dataId];

        const newObject = objectHandlers.reduce((o, h) => {
          if (h.objectTest && h.objectTest(o) && h.objectDataTest && h.objectDataTest(objectData) && h.turnStart) {
            // @ts-ignore
            return h.turnStart(o, objectData, game);
          }

          return o;
        }, object);

        return {
          ...c,
          object: newObject,
        };
      }),
    },
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

      const object = c.object;

      const objectData = game.data.mapObjects[object.dataId];

      const newObject = objectHandlers.reduce((o, h) => {
        if (h.objectTest && h.objectTest(o) && h.objectDataTest && h.objectDataTest(objectData) && h.turnEnd) {
          // @ts-ignore
          return h.turnEnd(o, objectData, game.data);
        }

        return o;
      }, object);

      return {
        ...c,
        object: newObject,
      };
    }),
  },
  turn: game.turn + 1,
});

export const moveGameObject = (game: Game, id: string, direction: MapObjectOrientation) => {
  const object = getObjectById(game.map, id);

  if (!object || !isMobileObject(object)) {
    throw new Error(`${id} is not a mobile object`);
  }

  if (!canMobileObjectMove(object)) {
    return game;
  }

  const position = getObjectPosition(game.map, object.id)!;

  const targetPosition = translatePointDirection(position, direction);

  const targetObject = getObjectByPoint(game.map, targetPosition);

  if (targetObject) {
    const g = visitGameMapObject(game, targetObject.id, id);

    return {
      ...g,
      map: replaceObject(g.map, moveMobileObject(object, direction, 0)),
    };
  }

  if (!isPointValid(game.map, targetPosition) || isPointTaken(game.map, targetPosition)) {
    return {
      ...game,
      map: replaceObject(game.map, moveMobileObject(object, direction, 0)),
    };
  }

  const cell = game.map.cells[getCellIndex(game.map.width, position)];

  const cost = getMovementCost(object, direction, cell.terrain, game.data);

  if (cost > object.mobility) {
    return {
      ...game,
      map: replaceObject(game.map, resetMobileObjectMobility(object)),
    };
  }

  return {
    ...game,
    map: replaceObject(moveObject(game.map, position, targetPosition), moveMobileObject(object, direction, cost)),
  };
};
