import { MapObjectData } from "heroes-core";

declare module "heroes-core/src/objects/MapObject" {
  interface MapObjectData {
    readonly type: string | string[];
  }
}

export {
  MapObjectData,
};
