export interface Artifact<T = {}> {
  id: string;
  data: T;
  tradable: boolean;
}
