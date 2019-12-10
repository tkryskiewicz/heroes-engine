import { CreatureObjectDetails } from "./CreatureObjectDetails";
import { HeroObjectDetails } from "./HeroObjectDetails";
import { TownObjectDetails } from "./TownObjectDetails";

export {
  CreatureObjectDetails,
  getCreatureObjectDetails,
  setCreatureObjectDetails,
} from "./CreatureObjectDetails";
export { EditorOption } from "./EditorOption";
export { EraseObjectsSettings } from "./EraseObjectsSettings";
export {
  HeroObjectDetails,
  getHeroObjectDetails,
  setHeroObjectDetails,
} from "./HeroObjectDetails";
export { createRandomMap } from "./randomMap";
export { LandMassSetting, RandomMapSettings, createDefaultRandomMapSettings } from "./RandomMapSettings";
export {
  createDefaultScenarioSpecification,
  getScenarioSpecification,
  ScenarioSpecification,
  setScenarioSpecification,
} from "./ScenarioSpecification";
export {
  TownObjectDetails,
  getTownObjectDetails,
  setTownObjectDetails,
} from "./TownObjectDetails";

export type ObjectDetails =
  CreatureObjectDetails |
  HeroObjectDetails |
  TownObjectDetails;

export const EditorMaxCreatureCount = 127;
export const EditorHeroArtifactCount = 4;
export const EditorMaxHeroExperience = 99999;
