import { MapObjectData } from "heroes-core";

export interface VariantMapObjectData extends MapObjectData {
  readonly variants: { readonly [terrain: string]: string; };
}

export const isVariantMapObjectData = (objectData: MapObjectData): objectData is VariantMapObjectData =>
  (objectData as VariantMapObjectData).variants !== undefined;
