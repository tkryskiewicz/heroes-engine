import { CreatureMapObject } from "heroes-core";

export type CreatureMapObjectDetails = number;

export const getCreatureMapObjectDetails = (object: CreatureMapObject): CreatureMapObjectDetails =>
  object.count;

export const setCreatureMapObjectDetails = (
  object: CreatureMapObject,
  details: CreatureMapObjectDetails,
): CreatureMapObject => ({
  ...object,
  count: details,
});
