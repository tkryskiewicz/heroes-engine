import { Map, MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption, EraseObjectsSettings } from "heroes-homm1";

export interface EditorWindowState {
  readonly map: Map;
  readonly position: MapPoint;
  readonly selectedOption: EditorOption;
  readonly selectedTerrain: string;
  readonly selectedObjectType: EditorObjectType;
  readonly selectedObject?: string;
  readonly objectsWindowVisible: boolean;
  readonly objectDetailsUnavailablePromptVisible: boolean;
  readonly eraseObjectsSettings: EraseObjectsSettings;
  readonly eraseObejctsSettingsVisible: boolean;
  readonly zoomed: boolean;
}
