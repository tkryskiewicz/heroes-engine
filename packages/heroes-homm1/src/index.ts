export { Alignment } from "./Alignment";
export { alignments } from "./alignments";
export { Artifact, ArtifactData, ArtifactSelection } from "./Artifact";
export { ArtifactId, artifacts, constructArtifact } from "./artifacts";
export { CampaignId, CampaignIds } from "./campaigns";
export { CastleOptionStatus } from "./CastleOptionStatus";
export { ComPort } from "./ComPort";
export { CreatureId, creatures } from "./creatures";
export { CreatureSpeed } from "./CreatureSpeed";
export * from "./editor";
export { getCurrentLevel, getNextLevelExperience } from "./experience";
export {
  constructGameHero,
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
export { heroClasses } from "./heroClasses";
export { HeroId, heroes, constructHero } from "./heroes";
export {
  LuckType,
  getLuckType,
  LuckModifierType,
  LuckModifier,
  ArtifactLuckModifier,
  StructureVisitedLuckModifier,
} from "./luck";
export * from "./map";
export { mapObjects, createMapObject } from "./mapObjects";
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
export { MovementSpeed } from "./MovementSpeed";
export { OpponentSetting, getOpponentSettingRating } from "./OpponentSetting";
export { Resource } from "./Resource";
export { resources } from "./resources";
export { Scenario } from "./Scenario";
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
export { SoundVolume } from "./SoundVolume";
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
export { terrains } from "./terrains";
export { TerrainType } from "./TerrainType";
export { constructTown } from "./Town";
export { TownId, TownIds } from "./TownId";
export { towns } from "./towns";

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
