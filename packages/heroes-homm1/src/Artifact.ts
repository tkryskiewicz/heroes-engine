import { Item, ItemData } from "heroes-core";

declare module "heroes-core/src/Item" {
  interface ItemData {
    readonly isUltimate: boolean;
  }
}

export type ArtifactData = ItemData;

export type Artifact<T = {}> = Item<T>;

export interface ArtifactSelection {
  readonly hero: string;
  readonly index: number;
}
