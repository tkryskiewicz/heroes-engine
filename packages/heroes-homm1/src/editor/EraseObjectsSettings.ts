import { EditorObjectType } from "./EditorObjectType";

export interface EraseObjectsSettings {
  readonly objectTypes: EditorObjectType[];
  readonly allOverlays: boolean;
  readonly clearEntire: boolean;
}
