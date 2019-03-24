import { defineMessages, Messages } from "react-intl";

import { MapObjectId } from "heroes-homm1";

import { convertValue } from "./util";

const mapObjectMessages: Messages = defineMessages({
  [MapObjectId.Bouy]: {
    defaultMessage: "Buoy",
    id: "game.mapObject.buoy",
  },
  [MapObjectId.Cottage]: {
    defaultMessage: "Cottage",
    id: "game.mapObject.cottage",
  },
  [MapObjectId.FaerieRing]: {
    defaultMessage: "Faerie ring",
    id: "game.mapObject.faerieRing",
  },
  [MapObjectId.Fountain]: {
    defaultMessage: "Fountain",
    id: "game.mapObject.fountain",
  },
  [MapObjectId.Graveyard]: {
    defaultMessage: "Graveyard",
    id: "game.mapObject.graveyard",
  },
  [MapObjectId.Hut]: {
    defaultMessage: "Hut",
    id: "game.mapObject.hut",
  },
  [MapObjectId.Oasis]: {
    defaultMessage: "Oasis",
    id: "game.mapObject.oasis",
  },
  [MapObjectId.Shipwreck]: {
    defaultMessage: "Shipwreck",
    id: "game.mapObject.shipwreck",
  },
  [MapObjectId.Statue]: {
    defaultMessage: "Statue",
    id: "game.mapObject.statue",
  },
  [MapObjectId.ThatchedHut]: {
    defaultMessage: "Thatched Hut",
    id: "game.mapObject.thatchedHut",
  },
});

export const getMapObjectNameMessage = (mapObject: string) =>
  mapObjectMessages[convertValue(mapObject)];
