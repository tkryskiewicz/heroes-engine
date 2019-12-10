import { GameObjectData } from "heroes-core";

export interface VariantObjectData extends GameObjectData {
  readonly variants: { readonly [terrain: string]: string; };
}

export const isVariantObjectData = (objectData: GameObjectData): objectData is VariantObjectData =>
  (objectData as VariantObjectData).variants !== undefined;
