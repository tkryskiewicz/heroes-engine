import { Item, ItemData } from "heroes-core";

export type ArtifactData = ItemData;

export type Artifact<T = {}> = Item<T>;

export interface ArtifactSelection {
  readonly hero: string;
  readonly index: number;
}

export const constructArtifact = (artifact: string, data: {} = {}): Artifact => ({
  data,
  dataId: artifact,
  id: artifact,
});
