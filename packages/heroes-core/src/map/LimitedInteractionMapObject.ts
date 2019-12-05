import { OwnableObject } from "../objects";
import { isMapObject, MapObject, MapObjectData } from "./MapObject";

export enum InteractionLimitType {
  OncePerObject = "oncePerObject",
  OncePerPlayer = "oncePerPlayer",
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

export const initializeLimitedInteractionMapObject = (object: MapObject): LimitedInteractionMapObject => ({
  ...object,
  visitedBy: [],
});

export const getVisitor = (objectData: LimitedInteractionMapObjectData, object: OwnableObject): string => {
  if (!object.owner) {
    throw new Error(`${object.id} is not owned by anyone`);
  }

  return objectData.interactionLimit === InteractionLimitType.OncePerPlayer ?
    object.owner :
    object.id;
};

export const wasVisitedBy = (
  object: LimitedInteractionMapObject,
  visitor: string,
): boolean =>
  object.visitedBy.includes(visitor);

export const visitLimitedInteractionMapObject = (
  object: LimitedInteractionMapObject,
  visitor: string,
): LimitedInteractionMapObject => {
  if (wasVisitedBy(object, visitor)) {
    throw new Error(`${object.id} was already visited by ${visitor}`);
  }

  return {
    ...object,
    visitedBy: [
      ...object.visitedBy,
      visitor,
    ],
  };
};
