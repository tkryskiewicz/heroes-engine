import { MapObject } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

export interface MobileMapObject extends MapObject {
  readonly mobility: number;
  readonly orientation: MapObjectOrientation;
}
