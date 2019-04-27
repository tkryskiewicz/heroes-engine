import { Map, MapPoint } from "heroes-core";
import { EditorOption } from "heroes-homm1";

export interface EditorWindowState {
  readonly map: Map;
  readonly position: MapPoint;
  readonly selectedOption: EditorOption;
  readonly selectedTerrain: string;
  readonly zoomed: boolean;
}
