import { MapObjectType } from "../map";

export interface EraseObjectsSettings {
  readonly objectTypes: MapObjectType[];
  readonly allOverlays: boolean;
  readonly clearEntire: boolean;
}
