import { Map, MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption, EraseObjectsSettings, MapObjectDetails } from "heroes-homm1";

export interface EditorWindowState {
  readonly map: Map;
  readonly position: MapPoint;
  readonly selectedOption: EditorOption;
  readonly selectedTerrain: string;
  readonly selectedObjectType: EditorObjectType;
  readonly selectedObject?: string;
  readonly objectsWindowVisible: boolean;
  readonly visibleObjectDetails?: string;
  readonly selectedObjectDetails?: MapObjectDetails;
  readonly objectDetailsUnavailablePromptVisible: boolean;
  readonly eraseObjectsSettings: EraseObjectsSettings;
  readonly eraseObejctsSettingsVisible: boolean;
  readonly zoomed: boolean;
}
