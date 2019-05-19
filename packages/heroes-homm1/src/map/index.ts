import { CreatureMapObjectDetails } from "heroes-core";

import { HeroMapObjectDetails } from "./HeroMapObject";
import { TownMapObjectDetails } from "./RandomTownMapObject";

export {
  HeroMapObject,
  HeroMapObjectData,
  createHeroMapObject,
  isHeroMapObject,
  isHeroMapObjectData,
  HeroMapObjectDetails,
  getHeroMapObjectDetails,
  setHeroMapObjectDetails,
} from "./HeroMapObject";
export * from "./map";
export { MapObjectId } from "./MapObjectId";
export {
  MineMapObject,
  MineMapObjectData,
  isMineMapObject,
  isMineMapObjectData,
} from "./MineMapObject";
export {
  ObeliskMapObject,
  ObeliskMapObjectData,
  isObeliskMapObject,
  isObeliskMapObjectData,
} from "./ObeliskMapObject";
export {
  MaxRandomCreatureCount,
  RandomCreatureMapObject,
  RandomCreatureMapObjectData,
  isRandomCreatureMapObject,
  isRandomCreatureMapObjectData,
  createRandomCreatureMapObject,
} from "./RandomCreatureMapObject";
export {
  RandomTownMapObject,
  RandomTownMapObjectData,
  createRandomTownMapObject,
  isRandomTownMapObject,
  isRandomTownMapObjectData,
  TownMapObjectDetails,
  getTownMapObjectDetails,
  setTownMapObjectDetails,
} from "./RandomTownMapObject";
export {
  ResourceMapObject,
  ResourceMapObjectData,
  isResourceMapObject,
  isResourceMapObjectData,
} from "./ResourceMapObject";
export {
  TerrainRestrictedMapObjectData,
  isTerrainRestrictedMapObjectData,
} from "./TerrainRestrictedMapObject";
export {
  TownMapObject,
  TownMapObjectData,
  createTownMapObject,
  isTownMapObject,
  recruitTownMapObjectTroop,
} from "./TownMapObject";
export {
  VariantMapObjectData,
  isVariantMapObjectData,
} from "./VariantMapObject";

export type MapObjectDetails =
  CreatureMapObjectDetails |
  HeroMapObjectDetails |
  TownMapObjectDetails;
