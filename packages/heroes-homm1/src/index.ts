export { Alignment, changeAlignment } from "./Alignment";
export { ArtifactId } from "./artifacts";
export { CampaignId, CampaignIds } from "./campaigns";
export { CreatureId, creatures, creaturesById } from "./creatures";
export { CreatureSpeed } from "./CreatureSpeed";
export { GameDifficulty, getGameDifficultyRating } from "./GameDifficulty";
export { GameSettings } from "./GameSettings";
export { GameType } from "./GameType";
export { HeroClass, HeroClassIds } from "./HeroClass";
export { HeroInfo, HeroId, heroes } from "./heroes";
export { MovementSpeed, changeMovementSpeed } from "./MovementSpeed";
export { OpponentSetting, changeOpponentSetting, getOpponentSettingRating } from "./OpponentSetting";
export { Resource } from "./Resource";
export { campaignScenarios } from "./scenarios";
export {
  CampaignGameScore,
  initialCampaignGameScores,
  getCampaignGameRating,
  StandardGameScore,
  initialStandardGameScores,
  getStandardGameRating,
} from "./scores";
export { Skill, SkillIds } from "./Skill";
export { SoundVolume, changeVolume } from "./SoundVolume";
export {
  StructureId,
  isCommonStructure,
  FarmStructureId,
  PlainsStructureId,
  ForestStructureId,
  MountainsStructureId,
} from "./structures";
export { TownId, TownIds } from "./towns";

export const MaxPlayers = 4;
export const HeroLimit = 8;
export const MaxMobility = 25;
export const ArmySize = 5;
export const ArtifactLimit = 14;
export const TownLimit = 8; // TODO: is this true?
export const PuzzlePieceCount = 48;
