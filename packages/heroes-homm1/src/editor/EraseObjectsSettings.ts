import { ObjectType } from "../ObjectType";

export interface EraseObjectsSettings {
  readonly objectTypes: ObjectType[];
  readonly allOverlays: boolean;
  readonly clearEntire: boolean;
}
