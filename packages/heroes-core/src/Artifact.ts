export interface Artifact<T = {}> {
  readonly id: string;
  readonly data: T;
  readonly tradable: boolean;
}
