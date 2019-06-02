import { createMap, GameData } from "heroes-core";

import { TerrainType } from "../TerrainType";
import { RandomMapSettings } from "./RandomMapSettings";

export const createRandomMap = (_data: GameData, _settings: RandomMapSettings) => {
  // TODO: implement

  return createMap(50, 50, TerrainType.Water);
};
