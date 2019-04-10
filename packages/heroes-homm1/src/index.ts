export { Alignment, changeAlignment } from "./Alignment";
export { Artifact, ArtifactData, ArtifactSelection } from "./Artifact";
export { ArtifactId, artifacts, constructArtifact } from "./artifacts";
export { CampaignId, CampaignIds } from "./campaigns";
export { CastleOptionStatus } from "./CastleOptionStatus";
export { ComPort } from "./ComPort";
export { CreatureId, creatures, creatureById } from "./creatures";
export { CreatureSpeed } from "./CreatureSpeed";
export { getCurrentLevel, getNextLevelExperience } from "./experience";
export {
  getGameHero,
  getGameHeroes,
  getGameTown,
  getGameTowns,
  buildGameStructure,
  recruitGameTroop,
  buyMageGuildSpellBook,
  endGameTurn,
} from "./Game";
export { GameDifficulty, getGameDifficultyRating } from "./GameDifficulty";
export { GameOption } from "./GameOption";
export { GameSettings } from "./GameSettings";
export { GameType } from "./GameType";
export { HeroClass, HeroClassIds } from "./HeroClass";
export { HeroInfo, HeroId, heroes, constructHero } from "./heroes";
export {
  LuckType,
  getLuckType,
  LuckModifierType,
  LuckModifier,
  ArtifactLuckModifier,
  StructureVisitedLuckModifier,
} from "./luck";
export * from "./map";
export { mapObjects } from "./mapObjects";
export {
  MoraleType,
  getMoraleType,
  MoraleModifierType,
  MoraleModifier,
  HeroClassMoraleModifier,
  SameOriginTroopsMoraleModifier,
  DifferentOriginTroopsMoraleModifier,
  ArtifactMoraleModifier,
  StructureVisitedMoraleModifier,
  StructureRobberMoraleModifier,
  BattleCowardiceMoraleModifier,
} from "./morale";
export { MovementSpeed, changeMovementSpeed } from "./MovementSpeed";
export { OpponentSetting, changeOpponentSetting, getOpponentSettingRating } from "./OpponentSetting";
export { Resource } from "./Resource";
export { resources } from "./resources";
export { ScenarioDifficulty } from "./ScenarioDifficulty";
export { campaignScenarios } from "./scenarios";
export { ScenarioSize } from "./ScenarioSize";
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
export { Spell } from "./Spell";
export { SpellBook, SpellBookSpell, constructSpellBook } from "./SpellBook";
export { SpellId, spells } from "./spells";
export { SpellType } from "./SpellType";
export {
  constructStructure,
  getCastleOptionStatus,
  StructureId,
  isCommonStructure,
  FarmStructureId,
  PlainsStructureId,
  ForestStructureId,
  MountainsStructureId,
  MageGuild,
  Shipyard,
} from "./structures";
export { TerrainType } from "./TerrainType";
export { TownId, TownIds } from "./TownId";
export { constructTown } from "./towns";

export const MaxPlayers = 4;
export const HeroLimit = 8;
export const MaxMobility = 25;
export const ArmySize = 5;
export const ArtifactLimit = 14;
export const TownLimit = 8; // TODO: is this true?
export const PuzzlePieceCount = 48;
export const BattlefieldHeigth = 5;
export const BattlefieldWidth = 7;
export const TerrainVariants = 7;
