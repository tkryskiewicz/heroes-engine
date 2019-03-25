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
  SameOriginTroops = "same-origin-troops",
  DifferentOriginTroops = "different-origin-troops",
  Artifact = "artifact",
  StructureVisited = "structure-visited",
  StructureRobber = "structure-robber",
  BattleCowardice = "battle-cowardice",
}

export interface HeroClassMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.HeroClass;
  readonly heroClass: string;
}

export interface SameOriginTroopsMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.SameOriginTroops;
  readonly town?: string;
}

export interface DifferentOriginTroopsMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.DifferentOriginTroops;
  readonly count: number;
}

export interface ArtifactMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.Artifact;
  readonly artifact: string;
}

export interface StructureVisitedMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.StructureVisited;
  readonly structure: string;
}

export interface StructureRobberMoraleModifier extends MoraleModifierBase {
  readonly type: MoraleModifierType.StructureRobber;
  readonly structure: string;
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
