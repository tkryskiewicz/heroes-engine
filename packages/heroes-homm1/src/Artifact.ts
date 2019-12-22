import { Item, ItemData } from "heroes-core";

export type ArtifactData = ItemData;

export type Artifact = Item;

export interface ArtifactSelection {
  readonly hero: string;
  readonly index: number;
}
