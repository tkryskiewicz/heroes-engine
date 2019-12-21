import { defineMessages } from "react-intl";

import { TerrainId } from "heroes-homm1";

import { unknownMessage } from "./util";

const terrainMessages = defineMessages<string>({
  [TerrainId.Water]: {
    defaultMessage: "Water",
    id: "game.terrain.water",
  },
  [TerrainId.Grass]: {
    defaultMessage: "Grass",
    id: "game.terrain.grass",
  },
  [TerrainId.Snow]: {
    defaultMessage: "Snow",
    id: "game.terrain.snow",
  },
  [TerrainId.Swamp]: {
    defaultMessage: "Swamp",
    id: "game.terrain.swamp",
  },
  [TerrainId.Lava]: {
    defaultMessage: "Lava",
    id: "game.terrain.lava",
  },
  [TerrainId.Desert]: {
    defaultMessage: "Desert",
    id: "game.terrain.desert",
  },
  [TerrainId.Dirt]: {
    defaultMessage: "Dirt",
    id: "game.terrain.dirt",
  },
});

export const getTerrainNameMessage = (terrain: string) =>
  terrainMessages[terrain] || unknownMessage;
