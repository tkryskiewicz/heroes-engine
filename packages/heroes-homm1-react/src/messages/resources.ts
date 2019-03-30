import { defineMessages } from "react-intl";

import { Resource } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (resource: string) =>
  convertValue(resource);

const resourceMessages = defineMessages({
  [getKey(Resource.Gold)]: {
    defaultMessage: "Gold",
    id: "game.resources.gold",
  },
  [getKey(Resource.Wood)]: {
    defaultMessage: "Wood",
    id: "game.resources.wood",
  },
  [getKey(Resource.Ore)]: {
    defaultMessage: "Ore",
    id: "game.resources.ore",
  },
  [getKey(Resource.Crystal)]: {
    defaultMessage: "Crystal",
    id: "game.resources.crystal",
  },
  [getKey(Resource.Sulfur)]: {
    defaultMessage: "Sulfur",
    id: "game.resources.sulfur",
  },
  [getKey(Resource.Gems)]: {
    defaultMessage: "Gems",
    id: "game.resources.gems",
  },
  [getKey(Resource.Mercury)]: {
    defaultMessage: "Mercury",
    id: "game.resources.mercury",
  },
});

export const getResourceNameMessage = (resource: string) =>
  resourceMessages[getKey(resource)] || unknownMessage;
