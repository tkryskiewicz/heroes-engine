import { Map } from "heroes-core";
import { EditorOption } from "heroes-homm1";

export interface EditorWindowState {
  readonly map: Map;
  readonly x: number;
  readonly y: number;
  readonly selectedOption: EditorOption;
  readonly selectedTerrain: string;
  readonly zoomed: boolean;
}
