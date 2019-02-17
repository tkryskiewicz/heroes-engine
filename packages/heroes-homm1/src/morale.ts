export enum MoraleType {
  Good = "good",
  Neutral = "neutral",
  Bad = "bad",
}

export const getMoraleType = (value: number): MoraleType => {
  if (value > 0) {
    return MoraleType.Good;
  }

  if (value < 0) {
    return MoraleType.Bad;
  }

  return MoraleType.Neutral;
};

export interface MoraleModifierBase {
  readonly type: MoraleModifierType;
  readonly value: number;
}

export enum MoraleModifierType {
  HeroClass = "hero-class",
}

export interface HeroClassMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.HeroClass;
  readonly heroClass: string;
}

export enum MoraleModifierType {
  SameOriginTroops = "same-origin-troops",
}

export interface SameOriginTroopsMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.SameOriginTroops;
  readonly town?: string;
}

export enum MoraleModifierType {
  DifferentOriginTroops = "different-origin-troops",
}

export interface DifferentOriginTroopsMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.DifferentOriginTroops;
  readonly count: number;
}

export enum MoraleModifierType {
  Artifact = "artifact",
}

export interface ArtifactMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.Artifact;
  readonly artifact: string;
}

export enum MoraleModifierType {
  StructureVisited = "structure-visited",
}

export interface StructureVisitedMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.StructureVisited;
  readonly structure: string;
}

export enum MoraleModifierType {
  StructureRobber = "structure-robber",
}

export interface StructureRobberMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.StructureRobber;
  readonly structure: string;
}

export enum MoraleModifierType {
  BattleCowardice = "battle-cowardice",
}

export interface BattleCowardiceMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.BattleCowardice;
}

export type MoraleModifier =
  HeroClassMoraleModifier |
  SameOriginTroopsMoraleModifier |
  DifferentOriginTroopsMoraleModifier |
  ArtifactMoraleModifier |
  StructureVisitedMoraleModifier |
  StructureRobberMoraleModifier |
  BattleCowardiceMoraleModifier;
