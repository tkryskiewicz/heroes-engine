import { ArtifactData, ArtifactSelection } from "./Artifact";
import { Creature } from "./Creature";
import {
  addEquipableMapObjectItem,
  appendArmedMapObjectTroop,
  changeOwnableMapObjectOwner,
  constructArtifactMapObjectArtifact,
  dismissArmedMapObjectTroop,
  generateResourceGeneratorMapObjectResources,
  generateTreasureMapObjectResources,
  getObject,
  getVisitor,
  isArmedMapObject,
  isArmedMapObjectData,
  isArtifactMapObjectData,
  isDwellingMapObject,
  isDwellingMapObjectData,
  isEquipableMapObject,
  isLimitedInteractionMapObject,
  isLimitedInteractionMapObjectData,
  isObjectOwnedBy,
  isOwnableMapObject,
  isOwnableMapObjectData,
  isPickableMapObjectData,
  isPuzzleMapObjectData,
  isResourceGeneratorMapObjectData,
  isTreasureMapObject,
  Map,
  MapObject,
  MapObjectData,
  recruitDwellingMapObjectCreatures,
  removeObject,
  replaceObject,
  swapArmedMapObjectTroops,
  tradeEquipableMapObjectItems,
  visitLimitedInteractionMapObject,
} from "./map";
import { addResources, ResourceData, Resources } from "./Resource";
import { Scenario } from "./Scenario";
import { Spell } from "./Spell";
import { TroopSelection } from "./Troop";

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

export const swapGameTroops = (
  game: Game,
  troop: TroopSelection,
  withTroop: TroopSelection,
  // TODO: extract to config
  autoCombine: boolean = true,
): Game => {
  const object = getObject(game.map, troop.id);

  if (!isArmedMapObject(object)) {
    throw new Error(`${troop.id} is not an armed object`);
  }

  const objectData = game.data.mapObjects[object.dataId];

  if (!isArmedMapObjectData(objectData)) {
    throw new Error(`no armed object data for ${object.id}`);
  }

  const withObject = getObject(game.map, withTroop.id);

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

export const tradeGameArtifacts = (game: Game, artifact: ArtifactSelection, withArtifact: ArtifactSelection): Game => {
  const object = getObject(game.map, artifact.hero);

  if (!isEquipableMapObject(object)) {
    throw new Error(`${artifact.hero} is not an equipable object`);
  }

  const withObject = getObject(game.map, withArtifact.hero);

  if (!isEquipableMapObject(withObject)) {
    throw new Error(`${withArtifact.hero} is not an equipable object`);
  }

  const [objectResult, withObjectResult] =
    tradeEquipableMapObjectItems(object, artifact.index, withObject, withArtifact.index);

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
  const object = getObject(game.map, troop.id);

  if (!isArmedMapObject(object)) {
    throw new Error(`${troop.id} is not an armed object`);
  }

  const objectResult = dismissArmedMapObjectTroop(object, troop.index);

  return {
    ...game,
    map: replaceObject(game.map, objectResult),
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
        const resources = generateResourceGeneratorMapObjectResources(objectData);

        game = {
          ...game,
          resources: addResources(game.resources, resources),
        };
      }
    });

  return {
    ...game,
  };
};

export const visitGameMapObject = (game: Game, id: string, activeObjectId: string): Game => {
  const object = getObject(game.map, id);

  if (!object) {
    throw new Error("Invalid object");
  }

  const objectData = game.data.mapObjects[object.dataId];

  const activeObject = getObject(game.map, activeObjectId);

  if (!activeObject) {
    throw new Error("Invalid active object");
  }

  if (isLimitedInteractionMapObjectData(objectData) && isLimitedInteractionMapObject(object)) {
    if (!isOwnableMapObject(activeObject)) {
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

  if (isArtifactMapObjectData(objectData)) {
    if (!isEquipableMapObject(activeObject)) {
      throw new Error(`${activeObjectId} is not an equipable object`);
    }

    const artifact = constructArtifactMapObjectArtifact(objectData);

    const activeObjectResult = addEquipableMapObjectItem(activeObject, artifact);

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

  if (isPickableMapObjectData(objectData)) {
    game = {
      ...game,
      map: removeObject(game.map, object.id),
    };
  }

  if (isOwnableMapObjectData(objectData) && isOwnableMapObject(object)) {
    if (!isOwnableMapObject(activeObject)) {
      throw new Error(`${activeObjectId} is not an ownable object`);
    }

    game = {
      ...game,
      map: replaceObject(game.map, changeOwnableMapObjectOwner(object, activeObject.owner)),
    };
  }

  return {
    ...game,
  };
};
