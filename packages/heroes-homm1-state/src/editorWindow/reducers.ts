import { changeTerrain, createMap } from "heroes-core";
import { EditorOption, TerrainType } from "heroes-homm1";

import { EditorWindowAction, EditorWindowActionType } from "./actions";
import { EditorWindowState } from "./state";

const map = createMap(50, 50, TerrainType.Water);

const initialState: EditorWindowState = {
  map,
  position: {
    x: 0,
    y: 0,
  },
  selectedOption: EditorOption.Terrains,
  selectedTerrain: TerrainType.Water,
  zoomed: true,
};

export const editorWindowReducer = (
  state: EditorWindowState = initialState,
  action: EditorWindowAction,
): EditorWindowState => {
  switch (action.type) {
    case EditorWindowActionType.ChangePosition:
      return {
        ...state,
        position: action.value,
      };
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
    case EditorWindowActionType.ChangeTerrain:
      return {
        ...state,
        map: changeTerrain(state.map, action.point, action.terrain),
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
