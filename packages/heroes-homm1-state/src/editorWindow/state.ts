import { Map, MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption } from "heroes-homm1";

export interface EditorWindowState {
  readonly map: Map;
  readonly position: MapPoint;
  readonly selectedOption: EditorOption;
  readonly selectedTerrain: string;
  readonly selectedObjectType: EditorObjectType;
  readonly selectedObject?: string;
  readonly objectsWindowVisible: boolean;
  readonly zoomed: boolean;
}