import { MapObjectData } from "heroes-core";

declare module "heroes-core/src/map/MapObject" {
  interface MapObjectData {
    readonly type: string | string[];
  }
}

export {
  MapObjectData,
};
