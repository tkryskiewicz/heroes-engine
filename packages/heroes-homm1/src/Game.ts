import {
  addObjectItem,
  addResources,
  ArmedObjectData,
  buildTownStructure,
  canMobileObjectMove,
  createMapObject,
  CreatureObjectData,
  DwellingObjectData,
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
  initializeCreatureObject,
  initializeDwellingObject,
  initializeEquipableObject,
  initializeLimitedInteractionObject,
  initializeMobileObject,
  initializeOwnableObject,
  initializeTreasureObject,
  isArmedObjectData,
  isCreatureObjectData,
  isDwellingObjectData,
  isDwellingStructure,
  isEquipableObject,
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
  getInitialMobility,
  getMovementCost,
  HeroObject,
  HeroObjectData,
  initializeHeroObject,
  initializeRandomCreatureObject,
  initializeRandomTownObject,
  initializeTownObject,
  isHeroObject,
  isHeroObjectData,
  isRandomCreatureObjectData,
  isRandomTownObjectData,
  isTownObject,
  RandomCreatureObjectData,
  RandomTownObjectData,
  recruitTownObjectTroop,
  TownObject,
  TownObjectData,
} from "./objects";
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
  objectDataTest: isArmedObjectData,
};

const creatureObjectHandler: Handler<CreatureObjectData> = {
  initialize: initializeCreatureObject,
  objectDataTest: isCreatureObjectData,
};

const dwellingObjectHandler: Handler<DwellingObjectData> = {
  initialize: initializeDwellingObject,
  objectDataTest: isDwellingObjectData,
};

const equipableObjectHandler: Handler<EquipableObjectData> = {
  initialize: initializeEquipableObject,
  objectDataTest: isEquipableObjectData,
};

const limitedInteractionObjectHandler: Handler<LimitedInteractionObjectData> = {
  initialize: initializeLimitedInteractionObject,
  objectDataTest: isLimitedInteractionObjectData,
};

const mobileObjectHandler: Handler<MobileObjectData> = {
  initialize: initializeMobileObject,
  objectDataTest: isMobileObjectData,
};

const ownableObjectHandler: Handler<OwnableObjectData> = {
  initialize: initializeOwnableObject,
  objectDataTest: isOwnableObjectData,
};

const resourceGeneratorObjectHandler: Handler<ResourceGeneratorObjectData> = {
  initialize: (object) => object,
  objectDataTest: isResourceGeneratorObjectData,
};

const treasureObjectHandler: Handler<TreasureObjectData> = {
  initialize: initializeTreasureObject,
  objectDataTest: isTreasureObjectData,
};

// homm1
const randomCreatureObjectHandler: Handler<RandomCreatureObjectData> = {
  initialize: initializeRandomCreatureObject,
  objectDataTest: isRandomCreatureObjectData,
};

const townObjectHandler: Handler<TownObjectData, TownObject> = {
  initialize: initializeTownObject,
  objectTest: isTownObject,
  turnEnd: (object) => ({
    ...object,
    ...endTownTurn(object),
  }),
};

const randomTownObjectHandler: Handler<RandomTownObjectData> = {
  initialize: initializeRandomTownObject,
  objectDataTest: isRandomTownObjectData,
};

const heroObjectHandler: Handler<HeroObjectData, HeroObject> = {
  initialize: initializeHeroObject,
  objectDataTest: isHeroObjectData,
  objectTest: isHeroObject,
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
  const objectData = data.objects[dataId];

  return objectHandlers.reduce((o, h) => {
    return {
      ...h.objectDataTest && h.objectDataTest(objectData) ?
      // @ts-ignore
      h.initialize(o, objectData, data) :
      o,
    };
  }, createMapObject(id, objectData));
};

export const getGameHeroes = (game: Game): HeroObject[] =>
  game.map.cells
    .map((c) => c.object)
    .filter(isDefined)
    .filter(isHeroObject)
    .filter((o) => isObjectOwnedBy(o, game.activePlayer));

export const getGameHero = (game: Game, hero: string): Hero | undefined =>
  getGameHeroes(game).find((h) => h.id === hero);

export const getGameTowns = (game: Game): Town[] =>
  game.map.cells
    .map((c) => c.object)
    .filter(isDefined)
    .filter(isTownObject)
    .filter((o) => isObjectOwnedBy(o, game.activePlayer));

export const getGameTown = (game: Game, town: string): Town | undefined =>
  getGameTowns(game).find((t) => t.id === town);

export const buildGameStructure = (game: Game, town: string, structure: string): Game => {
  const object = getObjectById(game.map, town);

  if (!object || !isTownObject(object)) {
    throw new Error(`${town} is not a town object`);
  }

  const struct = getTownStructure(object, structure);

  if (!struct) {
    throw new Error(`${structure} is not a valid structure`);
  }

  const objectResult: TownObject = {
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

  if (!object || !isTownObject(object)) {
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
    map: replaceObject(game.map, recruitTownObjectTroop(object, structureId, count)),
    resources: subtractResources(game.resources, cost),
  };
};

export const buyMageGuildSpellBook = (game: Game, heroId: string, townId: string, cost: Resources): Game => {
  const object = getObjectById(game.map, heroId);

  if (!object || !isHeroObject(object)) {
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
      const objectData = game.data.objects[o.dataId];

      if (isResourceGeneratorObjectData(objectData)) {
        game = {
          ...game,
          resources: addResources(game.resources, generateObjectResources(objectData)),
        };
      }

      if (isEquipableObjectData(objectData) && isEquipableObject(o)) {
        o.items.filter(isDefined).forEach((i) => {
          const itemData = game.data.items[i.id];

          if (isResourceGeneratorObjectData(itemData)) {
            game = {
              ...game,
              resources: addResources(game.resources, generateObjectResources(itemData)),
            };
          }
        });
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

        const objectData = game.data.objects[object.dataId];

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

      const objectData = game.data.objects[object.dataId];

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
