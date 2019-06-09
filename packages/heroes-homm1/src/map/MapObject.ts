import { MapObjectData as MapObjectDataCore } from "heroes-core";

import { MapObjectType } from "./MapObjectType";

declare module "heroes-core/src/map/MapObject" {
  interface MapObjectData {
    readonly type: string | string[];
  }
}

export interface MapObjectData extends MapObjectDataCore {
  readonly type: MapObjectType | MapObjectType[];
}
