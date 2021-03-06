import { Modifier } from "heroes-core";

export { CampaignId, CampaignIds } from "./campaigns";
export { CastleOptionStatus } from "./CastleOptionStatus";
export { ComPort } from "./ComPort";
export * from "./data";
export * from "./editor";
export { getCurrentLevel, getNextLevelExperience } from "./experience";
export {
  createGameObject,
  getGameHero,
  getGameHeroes,
  getGameTown,
  getGameTowns,
  buildGameStructure,
  recruitGameTroop,
  buyMageGuildSpellBook,
  startGameTurn,
  endGameTurn,
  moveGameObject,
} from "./Game";
export { GameDifficulty, getGameDifficultyRating } from "./GameDifficulty";
export * from "./gameObjects";
export { GameOption } from "./GameOption";
export { GameSettings } from "./GameSettings";
export { GameType } from "./GameType";
export {
  LuckType,
  getLuckType,
  LuckModifierType,
  LuckModifier,
  ArtifactLuckModifier,
  StructureVisitedLuckModifier,
} from "./luck";
export * from "./map";
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
export * from "./ObjectId";
export * from "./objects";
export { OpponentSetting, getOpponentSettingRating } from "./OpponentSetting";
export { PlayerColorId } from "./PlayerColorId";
export { playerColors } from "./playerColors";
export { Scenario } from "./Scenario";
export { ScenarioDifficulty } from "./ScenarioDifficulty";
export { campaignScenarios } from "./scenarios";
export { ScenarioSize } from "./ScenarioSize";
export {
  HighScores,
  CampaignGameScore,
  initialCampaignGameScores,
  getCampaignGameRating,
  StandardGameScore,
  initialStandardGameScores,
  getStandardGameRating,
  initialHighScores,
} from "./scores";
export { SoundVolume, isSoundEnabled } from "./SoundVolume";
export { Spell } from "./Spell";

export const MaxPlayers = 4;
export const HeroLimit = 8;
export const BaseMovementCost = 4;
export const DiagonalMovementCostModifier: Modifier = {
  type: "multiply",
  value: 1.5,
};
export const ArmySize = 5;
export const ArtifactLimit = 14;
export const TownLimit = 8; // TODO: is this true?
export const PuzzlePieceCount = 48;
export const BattlefieldHeigth = 5;
export const BattlefieldWidth = 7;
export const TerrainVariants = 7;
