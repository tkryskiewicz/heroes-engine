import { createMap, createPoint } from "heroes-core";
import { EditorObjectType, EditorOption, TerrainType } from "heroes-homm1";

import { EditorWindowAction, EditorWindowActionType } from "./actions";
import { EditorWindowState } from "./state";

const map = createMap(50, 50, TerrainType.Water);

const initialState: EditorWindowState = {
  eraseObejctsSettingsVisible: false,
  eraseObjectsSettings: {
    allOverlays: false,
    clearEntire: false,
    objectTypes: Object.values(EditorObjectType),
  },
  map,
  objectDetailsUnavailablePromptVisible: false,
  objectsWindowVisible: false,
  position: createPoint(0, 0),
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
    case EditorWindowActionType.ChangeMap:
      return {
        ...state,
        map: action.value,
      };
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
    case EditorWindowActionType.OpenObjectDetails:
      return {
        ...state,
        visibleObjectDetails: action.id,
      };
    case EditorWindowActionType.CloseObjectDetails:
      return {
        ...state,
        visibleObjectDetails: undefined,
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
    case EditorWindowActionType.OpenEraseObjectsSettings:
      return {
        ...state,
        eraseObejctsSettingsVisible: true,
      };
    case EditorWindowActionType.CloseEraseObjectsSettings:
      return {
        ...state,
        eraseObejctsSettingsVisible: false,
      };
    case EditorWindowActionType.ChangeEraseObjectsSettings:
      return {
        ...state,
        eraseObjectsSettings: action.value,
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
