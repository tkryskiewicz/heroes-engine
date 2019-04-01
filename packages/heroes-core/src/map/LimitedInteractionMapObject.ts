import { Game } from "../Game";
import { Hero } from "../Hero";
import { createMapObject, isMapObject, MapObject, MapObjectData } from "./MapObject";

export enum InteractionLimitType {
  OncePerHero = "oncePerHero",
  OncePerAlignment = "oncePerAlignment",
}

export interface LimitedInteractionMapObjectData extends MapObjectData {
  readonly interactionLimit: InteractionLimitType;
}

export const isLimitedInteractionMapObjectData =
  (objectData: MapObjectData): objectData is LimitedInteractionMapObjectData =>
    (objectData as LimitedInteractionMapObjectData).interactionLimit !== undefined;

export interface LimitedInteractionMapObject extends MapObject {
  readonly visitedBy: string[];
}

export const isLimitedInteractionMapObject = (object: MapObject | undefined): object is LimitedInteractionMapObject =>
  isMapObject(object) && (object as LimitedInteractionMapObject).visitedBy !== undefined;

export const createLimitedInteractionMapObject = (
  id: string,
  objectData: LimitedInteractionMapObjectData,
): LimitedInteractionMapObject => ({
  ...createMapObject(id, objectData),
  visitedBy: [],
});

export const getVisitor = (objectData: LimitedInteractionMapObjectData, alignment: string, hero: string): string =>
  objectData.interactionLimit === InteractionLimitType.OncePerAlignment ?
    alignment :
    hero;

export const wasVisitedBy = (
  object: LimitedInteractionMapObject,
  visitor: string,
): boolean =>
  object.visitedBy.includes(visitor);

export const handleLimitedInteractionMapObject = (
  game: Game,
  object: LimitedInteractionMapObject,
  objectData: LimitedInteractionMapObjectData,
  hero: Hero,
): Game => {
  const visitor = getVisitor(objectData, game.alignment, hero.id);

  if (wasVisitedBy(object, visitor)) {
    throw new Error("Object was already visited");
  }

  const visitedObject: LimitedInteractionMapObject = {
    ...object,
    visitedBy: [
      ...object.visitedBy,
      visitor,
    ],
  };

  return {
    ...game,
    map: {
      ...game.map,
      tiles: game.map.tiles.map((t) => t.object && t.object.id === object.id ?
        {
          ...t,
          object: visitedObject,
        } :
        t,
      ),
    },
  };
};
