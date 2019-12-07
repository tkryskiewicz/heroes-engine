import { GameObject, GameObjectData } from "../GameObject";
import { OwnableObject } from "./OwnableObject";

export enum InteractionLimitType {
  OncePerObject = "oncePerObject",
  OncePerPlayer = "oncePerPlayer",
}

export interface LimitedInteractionObjectData extends GameObjectData {
  readonly interactionLimit: InteractionLimitType;
}

export const isLimitedInteractionObjectData = (
  objectData: GameObjectData,
): objectData is LimitedInteractionObjectData =>
    (objectData as LimitedInteractionObjectData).interactionLimit !== undefined;

export interface LimitedInteractionObject extends GameObject {
  readonly visitedBy: string[];
}

export const isLimitedInteractionObject = (object: GameObject): object is LimitedInteractionObject =>
  (object as LimitedInteractionObject).visitedBy !== undefined;

export const initializeLimitedInteractionObject = (object: GameObject): LimitedInteractionObject => ({
  ...object,
  visitedBy: [],
});

export const getVisitor = (objectData: LimitedInteractionObjectData, object: OwnableObject): string => {
  if (!object.owner) {
    throw new Error(`${object.id} is not owned by anyone`);
  }

  return objectData.interactionLimit === InteractionLimitType.OncePerPlayer ?
    object.owner :
    object.id;
};

export const wasVisitedBy = (
  object: LimitedInteractionObject,
  visitor: string,
): boolean =>
  object.visitedBy.includes(visitor);

export const visitObject = (
  object: LimitedInteractionObject,
  visitor: string,
): LimitedInteractionObject => {
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
