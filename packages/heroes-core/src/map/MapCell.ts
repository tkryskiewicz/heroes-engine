import { MapObject } from "./MapObject";

export interface MapCell {
  readonly terrain: string;
  readonly terrainVariant: number;
  readonly object?: MapObject;
}
