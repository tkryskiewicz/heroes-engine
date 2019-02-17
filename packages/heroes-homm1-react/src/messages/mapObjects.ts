import { defineMessages, Messages } from "react-intl";

const mapObjectMessages: Messages = defineMessages({
  buoy: {
    defaultMessage: "Buoy",
    id: "game.mapObject.buoy",
  },
  graveyard: {
    defaultMessage: "Graveyard",
    id: "game.mapObject.graveyard",
  },
  oasis: {
    defaultMessage: "Oasis",
    id: "game.mapObject.oasis",
  },
  shipwreck: {
    defaultMessage: "Shipwreck",
    id: "game.mapObject.shipwreck",
  },
  statue: {
    defaultMessage: "Statue",
    id: "game.mapObject.statue",
  },
});

export const getMapObjectNameMessage = (mapObject: string) =>
  mapObjectMessages[mapObject];
