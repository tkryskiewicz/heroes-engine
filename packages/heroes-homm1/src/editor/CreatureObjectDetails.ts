import { CreatureObject } from "heroes-core";

export type CreatureObjectDetails = number;

export const getCreatureObjectDetails = (object: CreatureObject): CreatureObjectDetails =>
  object.count;

export const setCreatureObjectDetails = (
  object: CreatureObject,
  details: CreatureObjectDetails,
): CreatureObject => ({
  ...object,
  count: details,
});
