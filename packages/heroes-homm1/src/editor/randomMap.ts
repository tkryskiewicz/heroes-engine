import { createMap, GameData } from "heroes-core";

import { TerrainId } from "../data";
import { RandomMapSettings } from "./RandomMapSettings";

export const createRandomMap = (_data: GameData, _settings: RandomMapSettings, terrainVariants: number = 0) => {
  // TODO: implement

  return createMap(50, 50, TerrainId.Water, terrainVariants);
};
