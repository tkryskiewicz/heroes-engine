import { createMap, createPoint } from "heroes-core";
import {
  createDefaultRandomMapSettings,
  createDefaultScenarioSpecification,
  EditorOption,
  MapObjectType,
  ScenarioDifficulty,
  ScenarioSize,
  TerrainType,
} from "heroes-homm1";

import { EditorWindowAction, EditorWindowActionType } from "./actions";
import { EditorWindowState } from "./state";

const map = createMap(50, 50, TerrainType.Water, 4);

const initialState: EditorWindowState = {
  eraseObejctsSettingsVisible: false,
  eraseObjectsSettings: {
    allOverlays: false,
    clearEntire: false,
    objectTypes: Object.values(MapObjectType),
  },
  objectDetailsUnavailablePromptVisible: false,
  objectsWindowVisible: false,
  position: createPoint(0, 0),
  randomMapSettings: createDefaultRandomMapSettings(),
  randomMapSettingsVisible: false,
  scenario: {
    description: "No Description",
    difficulty: ScenarioDifficulty.Normal,
    filePrefix: "VJVF",
    map,
    name: "No Name",
    size: ScenarioSize.Medium,
  },
  scenarioSpecification: createDefaultScenarioSpecification(),
  scenarioSpecificationVisible: false,
  selectedObjectType: MapObjectType.Water,
  selectedOption: EditorOption.Terrains,
  selectedTerrain: TerrainType.Water,
  zoomed: true,
};

export const editorWindowReducer = (
  state: EditorWindowState = initialState,
  action: EditorWindowAction,
): EditorWindowState => {
  switch (action.type) {
    case EditorWindowActionType.ChangeScenario:
      return {
        ...state,
        scenario: action.value,
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
    case EditorWindowActionType.ChangeSelectedObjectDetails:
      return {
        ...state,
        selectedObjectDetails: action.value,
      };
    case EditorWindowActionType.OpenObjectDetails:
      return {
        ...state,
        selectedObjectDetails: action.value,
        visibleObjectDetails: action.id,
      };
    case EditorWindowActionType.CloseObjectDetails:
      return {
        ...state,
        selectedObjectDetails: undefined,
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
    case EditorWindowActionType.OpenScenarioSpecification:
      return {
        ...state,
        scenarioSpecificationVisible: true,
      };
    case EditorWindowActionType.CloseScenarioSpecification:
      return {
        ...state,
        scenarioSpecificationVisible: false,
      };
    case EditorWindowActionType.ChangeScenarioSpecification:
      return {
        ...state,
        scenarioSpecification: action.value,
      };
    case EditorWindowActionType.OpenRandomMapSettings:
      return {
        ...state,
        randomMapSettingsVisible: true,
      };
    case EditorWindowActionType.CloseRandomMapSettings:
      return {
        ...state,
        randomMapSettingsVisible: false,
      };
    case EditorWindowActionType.ChangeRandomMapSettings:
      return {
        ...state,
        randomMapSettings: action.value,
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
