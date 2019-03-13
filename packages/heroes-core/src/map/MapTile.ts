import { MapObject } from "./MapObject";

export interface MapTile {
  readonly terrain: string;
  readonly object?: MapObject;
}
