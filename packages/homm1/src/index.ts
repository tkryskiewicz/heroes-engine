export { Alignment, changeAlignment } from "./Alignment";
export { ArtifactId } from "./artifacts";
export { CreatureId, creatures, creaturesById } from "./creatures";
export { CreatureSpeed } from "./CreatureSpeed";
export { GameDifficulty, getGameDifficultyRating } from "./GameDifficulty";
export { HeroClass } from "./HeroClass";
export { HeroInfo, HeroId, heroes } from "./heroes";
export { MovementSpeed, changeMovementSpeed } from "./MovementSpeed";
export { OpponentSetting, changeOpponentSetting, getOpponentSettingRating } from "./OpponentSetting";
export { Resource } from "./Resource";
export { Skill } from "./Skill";
export { SoundVolume, changeVolume } from "./SoundVolume";
export { TownId } from "./towns";

export const MaxPlayers = 4;
export const HeroLimit = 8;
export const MaxMobility = 25;
export const ArmySize = 5;
export const TownLimit = 8; // TODO: is this true?
export const PuzzlePieceCount = 48;
