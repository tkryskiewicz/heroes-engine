import { number, select } from "@storybook/addon-knobs";

import { CombatSide } from "heroes-core";
import {
  Alignment,
  ArtifactId,
  CastleOptionStatus,
  creatures,
  FarmStructureId,
  ForestStructureId,
  GameDifficulty,
  HeroClass,
  heroes,
  HeroId,
  MountainsStructureId,
  MovementSpeed,
  OpponentSetting,
  PlainsStructureId,
  Resource,
  ScenarioDifficulty,
  ScenarioSize,
  Skill,
  SpellId,
  SpellType,
  StructureId,
  TerrainType,
  TownId,
} from "heroes-homm1";

interface SelectOptions {
  readonly [s: string]: string;
}

export const gameDifficultyOptions = Object.keys(GameDifficulty).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: GameDifficulty[c],
  };
}, {});

export const alignmentOptions = Object.keys(Alignment).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: Alignment[c],
  };
}, {});

export const resourceOptions = Object.keys(Resource).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: Resource[c],
  };
}, {});

const heroClassOptions = Object.keys(HeroClass).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: HeroClass[c],
  };
}, {});

export const heroClass = (name: string) => select(name, heroClassOptions, HeroClass.Knight);

// TODO: names should have spaces
export const skillOptions = Object.keys(Skill).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: Skill[c],
  };
}, {});

export const morale = (name: string) => number(name, 0, { range: true, min: -3, max: 3, step: 1 });

export const luck = (name: string) => number(name, 0, { range: true, min: -3, max: 3, step: 1 });

const heroOptions = heroes.reduce<SelectOptions>((p, c) => {
  return {
    ...p,
    [c.id]: c.id,
  };
}, {});

export const hero = (name: string) => select(name, heroOptions, HeroId.LordKilburn);

export const townOptions = Object.keys(TownId).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: TownId[c],
  };
}, {});

export const structureOptions = {
  ...StructureId,
  ...FarmStructureId,
  ...PlainsStructureId,
  ...ForestStructureId,
  ...MountainsStructureId,
};

export const castleOptionStatusOptions = Object.keys(CastleOptionStatus).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: CastleOptionStatus[c],
  };
}, {});

export const creatureOptions = creatures.reduce<SelectOptions>((p, c) => {
  return {
    ...p,
    [c.id]: c.id,
  };
}, {});

export const movementSpeedOptions = Object.keys(MovementSpeed).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: MovementSpeed[c],
  };
}, {});

export const opponentSettingOptions = Object.keys(OpponentSetting).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: OpponentSetting[c],
  };
}, {});

const artifactOptions = Object.keys(ArtifactId).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: ArtifactId[c],
  };
}, {});

export const artifact = (name: string) => select(name, artifactOptions, ArtifactId.ThunderMaceOfDominion);

export const terrainTypeOptions = Object.keys(TerrainType).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: TerrainType[c],
  };
}, {});

export const combatSideOptions = Object.keys(CombatSide).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: CombatSide[c],
  };
}, {});

export const scenarioSizeOptions = Object.keys(ScenarioSize).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: ScenarioSize[c],
  };
}, {});

export const scenarioDifficultyOptions = Object.keys(ScenarioDifficulty).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: ScenarioDifficulty[c],
  };
}, {});

export const spellTypeOptions = Object.keys(SpellType).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: SpellType[c],
  };
}, {});

const spellOptions = Object.keys(SpellId).reduce<SelectOptions>((p, c: any) => {
  return {
    ...p,
    [c]: SpellId[c],
  };
}, {});

export const spell = (name: string) => select(name, spellOptions, SpellId.Bless);
