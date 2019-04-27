import { createMap } from "heroes-core";
import { EditorOption, TerrainType } from "heroes-homm1";

import { EditorWindowAction, EditorWindowActionType } from "./actions";
import { EditorWindowState } from "./state";

const map = createMap(50, 50, TerrainType.Water);

const initialState: EditorWindowState = {
  map,
  selectedOption: EditorOption.Terrains,
  selectedTerrain: TerrainType.Water,
  x: 0,
  y: 0,
  zoomed: true,
};

export const editorWindowReducer = (
  state: EditorWindowState = initialState,
  action: EditorWindowAction,
): EditorWindowState => {
  switch (action.type) {
    case EditorWindowActionType.ChangeSelectedOption:
      return {
        ...state,
        selectedOption: action.value,
      };
    case EditorWindowActionType.ChangeSelectedTerrain:
      return {
        ...state,
        selectedTerrain: action.value,
      };
    case EditorWindowActionType.ZoomIn:
      return {
        ...state,
        zoomed: true,
      };
    case EditorWindowActionType.ZoomOut:
      return {
        ...state,
        zoomed: false,
      };
    default:
      return state;
  }
};
