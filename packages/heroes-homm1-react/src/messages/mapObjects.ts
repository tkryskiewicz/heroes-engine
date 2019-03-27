import { defineMessages, Messages } from "react-intl";

import { MapObjectId } from "heroes-homm1";

import { convertValue, unknownMessage } from "./util";

const getKey = (mapObject: string) =>
  convertValue(mapObject);

const mapObjectMessages: Messages = defineMessages({
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
