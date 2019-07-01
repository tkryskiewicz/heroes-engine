import { defineMessages } from "react-intl";

import { ResourceId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (resource: string) =>
  convertValue(resource);

const resourceMessages = defineMessages({
  [getKey(ResourceId.Gold)]: {
    defaultMessage: "Gold",
    id: "game.resources.gold",
  },
  [getKey(ResourceId.Wood)]: {
    defaultMessage: "Wood",
    id: "game.resources.wood",
  },
  [getKey(ResourceId.Ore)]: {
    defaultMessage: "Ore",
    id: "game.resources.ore",
  },
  [getKey(ResourceId.Crystal)]: {
    defaultMessage: "Crystal",
    id: "game.resources.crystal",
  },
  [getKey(ResourceId.Sulfur)]: {
    defaultMessage: "Sulfur",
    id: "game.resources.sulfur",
  },
  [getKey(ResourceId.Gems)]: {
    defaultMessage: "Gems",
    id: "game.resources.gems",
  },
  [getKey(ResourceId.Mercury)]: {
    defaultMessage: "Mercury",
    id: "game.resources.mercury",
  },
});

export const getResourceNameMessage = (resource: string) =>
  resourceMessages[getKey(resource)] || unknownMessage;
