import { CreatureMapObjectDetails } from "./CreatureMapObjectDetails";
import { HeroMapObjectDetails } from "./HeroMapObjectDetails";
import { TownMapObjectDetails } from "./TownMapObjectDetails";

export {
  CreatureMapObjectDetails,
  getCreatureMapObjectDetails,
  setCreatureMapObjectDetails,
} from "./CreatureMapObjectDetails";
export { EditorObjectType, previousObjectType, nextObjectType } from "./EditorObjectType";
export { EditorOption } from "./EditorOption";
export { EraseObjectsSettings } from "./EraseObjectsSettings";
export {
  HeroMapObjectDetails,
  getHeroMapObjectDetails,
  setHeroMapObjectDetails,
} from "./HeroMapObjectDetails";
export { createRandomMap } from "./randomMap";
export { LandMassSetting, RandomMapSettings } from "./RandomMapSettings";
export { getScenarioSpecification, ScenarioSpecification, setScenarioSpecification } from "./ScenarioSpecification";
export {
  TownMapObjectDetails,
  getTownMapObjectDetails,
  setTownMapObjectDetails,
} from "./TownMapObjectDetails";

export type MapObjectDetails =
  CreatureMapObjectDetails |
  HeroMapObjectDetails |
  TownMapObjectDetails;

export const EditorMaxCreatureCount = 127;
export const EditorHeroArtifactCount = 4;
export const EditorMaxHeroExperience = 99999;
