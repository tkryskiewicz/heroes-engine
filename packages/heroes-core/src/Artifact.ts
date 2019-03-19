export interface Artifact<T = {}> {
  readonly id: string;
  readonly data: T;
  readonly tradable: boolean;
}

export interface ArtifactSelection {
  readonly hero: string;
  readonly index: number;
}
