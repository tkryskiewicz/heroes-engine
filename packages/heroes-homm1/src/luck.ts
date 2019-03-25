export enum LuckType {
  Good = "good",
  Neutral = "neutral",
  // TODO: is bad luck possible?
  Bad = "bad",
}

export const getLuckType = (value: number): LuckType => {
  if (value > 0) {
    return LuckType.Good;
  }

  if (value < 0) {
    return LuckType.Bad;
  }

  return LuckType.Neutral;
};

export interface LuckModifierBase {
  readonly type: LuckModifierType;
  readonly value: number;
}

export enum LuckModifierType {
  Artifact = "artifact",
  StructureVisited = "structure-visited",
}

export interface ArtifactLuckModifier extends LuckModifierBase {
  readonly type: LuckModifierType.Artifact;
  readonly artifact: string;
}

export interface StructureVisitedLuckModifier extends LuckModifierBase {
  readonly type: LuckModifierType.StructureVisited;
  readonly structure: string;
}

export type LuckModifier =
  ArtifactLuckModifier |
  StructureVisitedLuckModifier;
