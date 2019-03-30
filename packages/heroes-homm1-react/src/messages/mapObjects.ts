import { defineMessages, Messages } from "react-intl";

import { MapObjectId, Resource } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (mapObject: string) =>
  convertValue(mapObject);

const mapObjectMessages: Messages = defineMessages({
  // mines
  [getKey(MapObjectId.CrystalMine)]: {
    defaultMessage: "Crystal Mine",
    id: "game.mapObject.crystalMine",
  },
  [getKey(MapObjectId.GemsMine)]: {
    defaultMessage: "Gem Mine",
    id: "game.mapObject.gemsMine",
  },
  [getKey(MapObjectId.GoldMine)]: {
    defaultMessage: "Gold Mine",
    id: "game.mapObject.goldMine",
  },
  [getKey(MapObjectId.Alchemist)]: {
    defaultMessage: "Alchemist",
    id: "game.mapObject.alchemist",
  },
  [getKey(MapObjectId.OreMine)]: {
    defaultMessage: "Ore Mine",
    id: "game.mapObject.oreMine",
  },
  [getKey(MapObjectId.SulfurMine)]: {
    defaultMessage: "Sulfur Mine",
    id: "game.mapObject.sulfurMine",
  },
  [getKey(MapObjectId.Sawmill)]: {
    defaultMessage: "Sawmill",
    id: "game.mapObject.sawmill",
  },
  // other
  [getKey(MapObjectId.Bouy)]: {
    defaultMessage: "Buoy",
    id: "game.mapObject.buoy",
  },
  [getKey(MapObjectId.Cottage)]: {
    defaultMessage: "Cottage",
    id: "game.mapObject.cottage",
  },
  [getKey(MapObjectId.FaerieRing)]: {
    defaultMessage: "Faerie ring",
    id: "game.mapObject.faerieRing",
  },
  [getKey(MapObjectId.Fountain)]: {
    defaultMessage: "Fountain",
    id: "game.mapObject.fountain",
  },
  [getKey(MapObjectId.Graveyard)]: {
    defaultMessage: "Graveyard",
    id: "game.mapObject.graveyard",
  },
  [getKey(MapObjectId.Hut)]: {
    defaultMessage: "Hut",
    id: "game.mapObject.hut",
  },
  [getKey(MapObjectId.Oasis)]: {
    defaultMessage: "Oasis",
    id: "game.mapObject.oasis",
  },
  [getKey(MapObjectId.Obelisk)]: {
    defaultMessage: "Obelisk",
    id: "game.mapObject.obelisk",
  },
  [getKey(MapObjectId.Shipwreck)]: {
    defaultMessage: "Shipwreck",
    id: "game.mapObject.shipwreck",
  },
  [getKey(MapObjectId.Statue)]: {
    defaultMessage: "Statue",
    id: "game.mapObject.statue",
  },
  [getKey(MapObjectId.ThatchedHut)]: {
    defaultMessage: "Thatched Hut",
    id: "game.mapObject.thatchedHut",
  },
});

export const getMapObjectNameMessage = (mapObject: string) =>
  mapObjectMessages[getKey(mapObject)] || unknownMessage;

// TODO: move to homm1 package?
const mineObjectMap: { readonly [resource: string]: string } = {
  [Resource.Crystal]: MapObjectId.CrystalMine,
  [Resource.Gems]: MapObjectId.GemsMine,
  [Resource.Gold]: MapObjectId.GoldMine,
  [Resource.Mercury]: MapObjectId.Alchemist,
  [Resource.Ore]: MapObjectId.OreMine,
  [Resource.Sulfur]: MapObjectId.SulfurMine,
  [Resource.Wood]: MapObjectId.Sawmill,
};

export const getMineObjectNameMessage = (resource: string) =>
  getMapObjectNameMessage(mineObjectMap[resource]) || unknownMessage;
