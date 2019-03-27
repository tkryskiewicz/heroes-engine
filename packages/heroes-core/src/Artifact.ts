export interface ArtifactData {
  readonly id: string;
  readonly tradable: boolean;
}

export interface Artifact<T = {}> {
  readonly id: string;
  readonly data: T;
}

export interface ArtifactSelection {
  readonly hero: string;
  readonly index: number;
}
