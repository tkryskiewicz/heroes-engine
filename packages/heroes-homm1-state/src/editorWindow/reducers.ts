import { changeTerrain, createMap, placeObject } from "heroes-core";
import { EditorObjectType, EditorOption, TerrainType } from "heroes-homm1";

import { EditorWindowAction, EditorWindowActionType } from "./actions";
import { EditorWindowState } from "./state";

const map = createMap(50, 50, TerrainType.Water);

const initialState: EditorWindowState = {
  map,
  objectDetailsUnavailablePromptVisible: false,
  objectsWindowVisible: false,
  position: {
    x: 0,
    y: 0,
  },
  selectedObjectType: EditorObjectType.WaterObjects,
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
    case EditorWindowActionType.ChangeSelectedObjectType:
      return {
        ...state,
        selectedObjectType: action.value,
      };
    case EditorWindowActionType.ChangeSelectedObject:
      return {
        ...state,
        selectedObject: action.value,
      };
    case EditorWindowActionType.OpenObjectsWindow:
      return {
        ...state,
        objectsWindowVisible: true,
      };
    case EditorWindowActionType.CloseObjectsWindow:
      return {
        ...state,
        objectsWindowVisible: false,
      };
    case EditorWindowActionType.PlaceObject:
      return {
        ...state,
        map: placeObject(state.map, action.point, action.object),
      };
    case EditorWindowActionType.OpenObjectDetailsUnavailablePrompt:
      return {
        ...state,
        objectDetailsUnavailablePromptVisible: true,
      };
    case EditorWindowActionType.CloseObjectDetailsUnavailablePrompt:
      return {
        ...state,
        objectDetailsUnavailablePromptVisible: false,
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
