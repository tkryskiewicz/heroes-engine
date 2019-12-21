import { ObjectType } from "../data";

export interface EraseObjectsSettings {
  readonly objectTypes: ObjectType[];
  readonly allOverlays: boolean;
  readonly clearEntire: boolean;
}
