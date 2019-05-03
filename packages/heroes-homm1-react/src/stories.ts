import { number, select } from "@storybook/addon-knobs";

import { CombatSide, MapObjectOrientation } from "heroes-core";
import {
  Alignment,
  ArmySize,
  ArtifactId,
  CastleOptionStatus,
  CreatureId,
  creatures,
  EditorObjectType,
  EditorOption,
  FarmStructureId,
  ForestStructureId,
  GameDifficulty,
  GameOption,
  GameType,
  HeroClass,
  heroes,
  HeroId,
  LuckType,
  MapObjectId,
  MoraleType,
  MountainsStructureId,
  MovementSpeed,
  OpponentSetting,
  PlainsStructureId,
  Resource,
  resources,
  ScenarioDifficulty,
  ScenarioSize,
  Skill,
  SoundVolume,
  SpellId,
  SpellType,
  StructureId,
  TerrainType,
  TownId,
} from "heroes-homm1";

export interface SelectOptions {
  readonly [s: string]: string;
}

const gameOptionOptions = Object.keys(GameOption).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: GameDifficulty[c],
  };
}, {});

export const gameOption = (name: string) => select(name, gameOptionOptions, GameOption.NewGame);

const gameTypeOptions = {
  Campaign: GameType.Campaign,
  Standard: GameType.Standard,
};

export const gameType = (name: string) => select(name, gameTypeOptions, GameType.Standard);

const gameDifficultyOptions = Object.keys(GameDifficulty).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: GameDifficulty[c],
  };
}, {});

export const gameDifficulty = (name: string) => select(name, gameDifficultyOptions, GameDifficulty.Easy);

const alignmentOptions = Object.keys(Alignment).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: Alignment[c],
  };
}, {});

export const alignment = (name: string) => select(name, alignmentOptions, Alignment.Red);

const resourceOptions = Object.keys(Resource).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: Resource[c],
  };
}, {});

export const resource = (name: string) => select(name, resourceOptions, Resource.Gold);

// TODO: keys are also values, doesn't look nice
const mineOptions = Object.values(resources).reduce((p, c) => ({
  ...p,
  [c.mine]: c.mine,
}), {});

export const mine = (name: string) => select(name, mineOptions, MapObjectId.OreMine);

const heroClassOptions = Object.keys(HeroClass).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: HeroClass[c],
  };
}, {});

export const heroClass = (name: string) => select(name, heroClassOptions, HeroClass.Knight);

const skillOptions = Object.keys(Skill).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: Skill[c],
  };
}, {});

export const skill = (name: string) => select(name, skillOptions, Skill.Attack);

export const skillValue = (name: string) => number(name, 0, { range: true, min: 0, max: 999, step: 1 });

export const morale = (name: string) => number(name, 0, { range: true, min: -3, max: 3, step: 1 });

const moraleTypeOptions = Object.keys(MoraleType).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: MoraleType[c],
  };
}, {});

export const moraleType = (name: string) => select(name, moraleTypeOptions, MoraleType.Good);

export const luck = (name: string) => number(name, 0, { range: true, min: -3, max: 3, step: 1 });

const luckTypeOptions = Object.keys(LuckType).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: LuckType[c],
  };
}, {});

export const luckType = (name: string) => select(name, luckTypeOptions, LuckType.Good);

export const troopIndex = (name: string) => number(name, 0, { range: true, min: 0, max: ArmySize - 1, step: 1 });

const heroOptions = heroes.reduce<SelectOptions>((p, c) => {
  return {
    ...p,
    [c.id]: c.id,
  };
}, {});

export const hero = (name: string) => select(name, heroOptions, HeroId.LordKilburn);

const townOptions = Object.keys(TownId).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: TownId[c],
  };
}, {});

export const town = (name: string) => select(name, townOptions, TownId.Farm);

const structureOptions = {
  ...StructureId,
  ...FarmStructureId,
  ...PlainsStructureId,
  ...ForestStructureId,
  ...MountainsStructureId,
};

export const structure = (name: string) => select(name, structureOptions, StructureId.Castle);

const castleOptionStatusOptions = Object.keys(CastleOptionStatus).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: CastleOptionStatus[c],
  };
}, {});

export const castleOptionStatus = (name: string) => select(name, castleOptionStatusOptions, CastleOptionStatus.Built);

const creatureOptions = creatures.reduce<SelectOptions>((p, c) => {
  return {
    ...p,
    [c.id]: c.id,
  };
}, {});

export const creature = (name: string) => select(name, creatureOptions, CreatureId.Peasant);

export const movementSpeedOptions = Object.keys(MovementSpeed).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: MovementSpeed[c],
  };
}, {});

export const soundVolume = (name: string) => number(name, SoundVolume.On, {
  max: SoundVolume.On,
  min: SoundVolume.Off,
  range: true,
  step: 1,
});

export const movementSpeed = (name: string) => select(name, movementSpeedOptions, MovementSpeed.Walk);

const opponentSettingOptions = Object.keys(OpponentSetting).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: OpponentSetting[c],
  };
}, {});

export const opponentSetting = (name: string) => select(name, opponentSettingOptions, OpponentSetting.Dumb);

const artifactOptions = Object.keys(ArtifactId).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: ArtifactId[c],
  };
}, {});

export const artifact = (name: string) => select(name, artifactOptions, ArtifactId.ThunderMaceOfDominion);

const terrainTypeOptions = Object.keys(TerrainType).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: TerrainType[c],
  };
}, {});

export const terrainType = (name: string) => select(name, terrainTypeOptions, TerrainType.Water);

const combatSideOptions = Object.keys(CombatSide).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: CombatSide[c],
  };
}, {});

export const combatSide = (name: string) => select(name, combatSideOptions, CombatSide.Attacker);

const scenarioSizeOptions = Object.keys(ScenarioSize).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: ScenarioSize[c],
  };
}, {});

export const scenarioSize = (name: string) => select(name, scenarioSizeOptions, ScenarioSize.Small);

export const scenarioDifficultyOptions = Object.keys(ScenarioDifficulty).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: ScenarioDifficulty[c],
  };
}, {});

export const scenarioDifficulty = (name: string) => select(name, scenarioDifficultyOptions, ScenarioDifficulty.Easy);

const spellTypeOptions = Object.keys(SpellType).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: SpellType[c],
  };
}, {});

export const spellType = (name: string) => select(name, spellTypeOptions, SpellType.Combat);

const spellOptions = Object.keys(SpellId).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: SpellId[c],
  };
}, {});

export const spell = (name: string) => select(name, spellOptions, SpellId.Bless);

const mapObjectOptions = Object.keys(MapObjectId).reduce<SelectOptions>((p, c: any) => ({
  ...p,
  [c]: MapObjectId[c],
}), {});

export const mapObject = (name: string) => select(name, mapObjectOptions, MapObjectId.Bouy);

const mapObjectOrientationOptions = Object.keys(MapObjectOrientation).reduce<SelectOptions>((p, c: any) => ({
  ...p,
  [c]: MapObjectOrientation[c],
}), {});

export const mapObjectOrientation = (name: string) =>
  select(name, mapObjectOrientationOptions, MapObjectOrientation.North);

const dwellingObjectOptions = [
  MapObjectId.Cottage,
  MapObjectId.Hut,
  MapObjectId.ThatchedHut,
].reduce<SelectOptions>((p, c) => ({
  ...p,
  [c]: c,
}), {});

export const dwellingObject = (name: string) => select(name, dwellingObjectOptions, MapObjectId.Cottage);

const editorOptionOptions = Object.keys(EditorOption).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: EditorOption[c],
  };
}, {});

export const editorOption = (name: string) => select(name, editorOptionOptions, EditorOption.Terrains);

const editorObjectTypeOptions = Object.keys(EditorObjectType).reduce<SelectOptions>((p, c: any) => ({
  ...p,
  [c]: EditorObjectType[c],
}), {});

export const editorObjectType = (name: string) => select(name, editorObjectTypeOptions, EditorObjectType.WaterObjects);
