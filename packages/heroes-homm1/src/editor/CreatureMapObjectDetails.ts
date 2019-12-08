import { CreatureObject } from "heroes-core";

export type CreatureMapObjectDetails = number;

export const getCreatureMapObjectDetails = (object: CreatureObject): CreatureMapObjectDetails =>
  object.count;

export const setCreatureMapObjectDetails = (
  object: CreatureObject,
  details: CreatureMapObjectDetails,
): CreatureObject => ({
  ...object,
  count: details,
});
