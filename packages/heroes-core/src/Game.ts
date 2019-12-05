import { CreatureData } from "./Creature";
import { HeroData } from "./Hero";
import { HeroClassData } from "./HeroClass";
import { ItemData, ItemSelection } from "./Item";
import {
  appendArmedMapObjectTroop,
  constructItemMapObjectItem,
  dismissArmedMapObjectTroop,
  generateTreasureMapObjectResources,
  getObjectById,
  getVisitor,
  isArmedMapObject,
  isArmedMapObjectData,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isItemMapObjectData,
  isLimitedInteractionMapObject,
  isLimitedInteractionMapObjectData,
  isPuzzleMapObjectData,
  isTreasureMapObject,
  Map,
  MapObjectData,
  recruitDwellingMapObjectCreatures,
  removeObject,
  replaceObject,
  swapArmedMapObjectTroops,
  visitLimitedInteractionMapObject,
} from "./map";
import { Modifier } from "./Modifier";
import {
  addObjectItem,
  changeObjectOwner,
  isEquipableObject,
  isOwnableObject,
  isOwnableObjectData,
  isPickableObjectData,
  tradeObjectItems,
} from "./objects";
import { addResources, ResourceData, Resources } from "./Resource";
import { Scenario } from "./Scenario";
import { Spell } from "./Spell";
import { TerrainData } from "./Terrain";
import { TownData } from "./Town";
import { TroopSelection } from "./Troop";

export interface GameData {
  readonly playerColors: string[];
  readonly resources: { readonly [id: string]: ResourceData; };
  readonly items: { readonly [id: string]: ItemData; };
  readonly creatures: { readonly [id: string]: CreatureData; };
  readonly spells: { readonly [id: string]: Spell; };
  readonly heroClasses: { readonly [id: string]: HeroClassData; };
  readonly heroes: { readonly [id: string]: HeroData; };
  readonly terrains: { readonly [id: string]: TerrainData; };
  readonly mapObjects: { readonly [id: string]: MapObjectData; };
  readonly baseMovementCost: number;
  readonly diagonalMovementCostModifier?: Modifier;
  readonly armySize: number;
  readonly towns: { readonly [id: string]: TownData; };
}

export interface Puzzle {
  readonly totalPieces: number;
  readonly uncoveredPieces: number;
}

export interface Game {
  readonly data: GameData;
  readonly scenario: Scenario;
  readonly map: Map;
  readonly turn: number;
  readonly activePlayer: string;
  readonly resources: Resources;
  readonly puzzle: Puzzle;
}

export const swapGameTroops = (
  game: Game,
  troop: TroopSelection,
  withTroop: TroopSelection,
  // TODO: extract to config
  autoCombine: boolean = true,
): Game => {
  const object = getObjectById(game.map, troop.id);

  if (!isArmedMapObject(object)) {
    throw new Error(`${troop.id} is not an armed object`);
  }

  const objectData = game.data.mapObjects[object.dataId];

  if (!isArmedMapObjectData(objectData)) {
    throw new Error(`no armed object data for ${object.id}`);
  }

  const withObject = getObjectById(game.map, withTroop.id);

  if (!isArmedMapObject(withObject)) {
    throw new Error(`${withTroop.id} is not an armed object`);
  }

  const [objectResult, withObjectResult] = swapArmedMapObjectTroops(object, troop.index, withObject, withTroop.index, {
    autoCombineTroops: autoCombine,
    preventMovingLastTroop: objectData.army.preventMovingLastTroop,
  });

  return {
    ...game,
    map: replaceObject(replaceObject(game.map, objectResult), withObjectResult),
  };
};

export const tradeGameItems = (game: Game, item: ItemSelection, withItem: ItemSelection): Game => {
  const object = getObjectById(game.map, item.objectId);

  if (!object || !isEquipableObject(object)) {
    throw new Error(`${item.objectId} is not an equipable object`);
  }

  const withObject = getObjectById(game.map, withItem.objectId);

  if (!withObject || !isEquipableObject(withObject)) {
    throw new Error(`${withItem.objectId} is not an equipable object`);
  }

  const [objectResult, withObjectResult] =
    tradeObjectItems(object, item.index, withObject, withItem.index);

  return {
    ...game,
    map: replaceObject(replaceObject(game.map, objectResult), withObjectResult),
  };
};

export const dismissGameHero = (game: Game, hero: string): Game => ({
  ...game,
  map: removeObject(game.map, hero),
});

export const dismissGameTroop = (game: Game, troop: TroopSelection): Game => {
  const object = getObjectById(game.map, troop.id);

  if (!isArmedMapObject(object)) {
    throw new Error(`${troop.id} is not an armed object`);
  }

  const objectResult = dismissArmedMapObjectTroop(object, troop.index);

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
  };
};

export const visitGameMapObject = (game: Game, id: string, activeObjectId: string): Game => {
  const object = getObjectById(game.map, id);

  if (!object) {
    throw new Error("Invalid object");
  }

  const objectData = game.data.mapObjects[object.dataId];

  const activeObject = getObjectById(game.map, activeObjectId);

  if (!activeObject) {
    throw new Error("Invalid active object");
  }

  if (isLimitedInteractionMapObjectData(objectData) && isLimitedInteractionMapObject(object)) {
    if (!isOwnableObject(activeObject)) {
      throw new Error(`${activeObjectId} is not an ownable object`);
    }

    const visitor = getVisitor(objectData, activeObject);

    game = {
      ...game,
      map: replaceObject(game.map, visitLimitedInteractionMapObject(object, visitor)),
    };
  }

  if (isTreasureMapObject(object)) {
    const resources = generateTreasureMapObjectResources(object);

    game = {
      ...game,
      resources: addResources(game.resources, resources),
    };
  }

  if (isItemMapObjectData(objectData)) {
    if (!isEquipableObject(activeObject)) {
      throw new Error(`${activeObjectId} is not an equipable object`);
    }

    const item = constructItemMapObjectItem(objectData);

    const activeObjectResult = addObjectItem(activeObject, item);

    game = {
      ...game,
      map: replaceObject(game.map, activeObjectResult),
    };
  }

  if (isDwellingMapObjectData(objectData) && isDwellingMapObject(object)) {
    if (!isArmedMapObject(activeObject)) {
      throw new Error(`${activeObjectId} is not an armed object`);
    }

    const [objectResult, troop] = recruitDwellingMapObjectCreatures(object, objectData);

    const activeObjectResult = appendArmedMapObjectTroop(activeObject, troop);

    game = {
      ...game,
      map: replaceObject(replaceObject(game.map, objectResult), activeObjectResult),
    };
  }

  if (isPuzzleMapObjectData(objectData)) {
    game = {
      ...game,
      puzzle: {
        ...game.puzzle,
        // TODO: take into account total puzzle objects?
        uncoveredPieces: Math.min(game.puzzle.uncoveredPieces + 1, game.puzzle.totalPieces),
      },
    };
  }

  if (isPickableObjectData(objectData)) {
    game = {
      ...game,
      map: removeObject(game.map, object.id),
    };
  }

  if (isOwnableObjectData(objectData) && isOwnableObject(object)) {
    if (!isOwnableObject(activeObject)) {
      throw new Error(`${activeObjectId} is not an ownable object`);
    }

    game = {
      ...game,
      map: replaceObject(game.map, changeObjectOwner(object, activeObject.owner)),
    };
  }

  return {
    ...game,
  };
};
