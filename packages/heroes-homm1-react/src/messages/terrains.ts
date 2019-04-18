import { defineMessages, Messages } from "react-intl";

import { TerrainType } from "heroes-homm1";

import { unknownMessage } from "./util";

const terrainMessages: Messages = defineMessages({
  [TerrainType.Water]: {
    defaultMessage: "Water",
    id: "game.terrain.water",
  },
  [TerrainType.Grass]: {
    defaultMessage: "Grass",
    id: "game.terrain.grass",
  },
  [TerrainType.Snow]: {
    defaultMessage: "Snow",
    id: "game.terrain.snow",
  },
  [TerrainType.Swamp]: {
    defaultMessage: "Swamp",
    id: "game.terrain.swamp",
  },
  [TerrainType.Lava]: {
    defaultMessage: "Lava",
    id: "game.terrain.lava",
  },
  [TerrainType.Desert]: {
    defaultMessage: "Desert",
    id: "game.terrain.desert",
  },
  [TerrainType.Dirt]: {
    defaultMessage: "Dirt",
    id: "game.terrain.dirt",
  },
});

export const getTerrainNameMessage = (terrain: string) =>
  terrainMessages[terrain] || unknownMessage;
