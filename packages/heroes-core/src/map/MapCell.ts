import { GameObject } from "../GameObject";

export interface MapCell {
  readonly terrain: string;
  readonly terrainVariant: number;
  readonly object?: GameObject;
}
