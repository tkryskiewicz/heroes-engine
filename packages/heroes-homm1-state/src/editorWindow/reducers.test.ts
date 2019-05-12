import { createMap, MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption, EraseObjectsSettings, TerrainType } from "heroes-homm1";

import {
  changeEraseObjectsSettings,
  changePosition,
  changeSelectedObject,
  changeSelectedObjectType,
  changeSelectedOption,
  changeSelectedTerrain,
  changeTerrain,
  closeEraseObjectsSettings,
  closeObjectDetailsUnavailablePrompt,
  closeObjectsWindow,
  openEraseObjectsSettings,
  openObjectDetailsUnavailablePrompt,
  openObjectsWindow,
  zoomIn,
  zoomOut,
} from "./actions";
import { editorWindowReducer } from "./reducers";
import { EditorWindowState } from "./state";

const defaultState: EditorWindowState = {
  eraseObejctsSettingsVisible: false,
  eraseObjectsSettings: {
    allOverlays: false,
    clearEntire: false,
    objectTypes: Object.values(EditorObjectType),
  },
  map: createMap(50, 50, TerrainType.Water),
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

describe("editorWindowReducer", () => {
  it("should return initial state", () => {
    const result = editorWindowReducer(undefined, {} as any);

    const expected: EditorWindowState = {
      ...defaultState,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing posiition", () => {
    const state: EditorWindowState = {
      ...defaultState,
      position: {
        x: 0,
        y: 0,
      },
    };

    const position: MapPoint = {
      x: 1,
      y: 1,
    };

    const result = editorWindowReducer(state, changePosition(position));

    const expected: EditorWindowState = {
      ...state,
      position,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing selected option", () => {
    const state: EditorWindowState = {
      ...defaultState,
      selectedOption: EditorOption.Details,
    };

    const result = editorWindowReducer(state, changeSelectedOption(EditorOption.Objects));

    const expected: EditorWindowState = {
      ...state,
      selectedOption: EditorOption.Objects,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing selected terrain", () => {
    const state: EditorWindowState = {
      ...defaultState,
      selectedTerrain: "terrain",
    };

    const result = editorWindowReducer(state, changeSelectedTerrain("otherTerrain"));

    const expected: EditorWindowState = {
      ...state,
      selectedTerrain: "otherTerrain",
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing terrain", () => {
    const state: EditorWindowState = {
      ...defaultState,
      map: createMap(1, 1, "terrain"),
    };

    const result = editorWindowReducer(state, changeTerrain({ x: 0, y: 0 }, "otherTerrain"));

    const expected: EditorWindowState = {
      ...state,
      map: {
        ...state.map,
        tiles: [
          {
            terrain: "otherTerrain",
          },
        ],
      },
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing selected object type", () => {
    const state: EditorWindowState = {
      ...defaultState,
      selectedObjectType: EditorObjectType.WaterObjects,
    };

    const result = editorWindowReducer(state, changeSelectedObjectType(EditorObjectType.GrassObjects));

    const expected: EditorWindowState = {
      ...state,
      selectedObjectType: EditorObjectType.GrassObjects,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing selected object", () => {
    const state: EditorWindowState = {
      ...defaultState,
    };

    const result = editorWindowReducer(state, changeSelectedObject("object"));

    const expected: EditorWindowState = {
      ...state,
      selectedObject: "object",
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening objects window", () => {
    const state: EditorWindowState = {
      ...defaultState,
      objectsWindowVisible: false,
    };

    const result = editorWindowReducer(state, openObjectsWindow());

    const expected: EditorWindowState = {
      ...state,
      objectsWindowVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing objects window", () => {
    const state: EditorWindowState = {
      ...defaultState,
      objectsWindowVisible: true,
    };

    const result = editorWindowReducer(state, closeObjectsWindow());

    const expected: EditorWindowState = {
      ...state,
      objectsWindowVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening object details unavailable prompt", () => {
    const state: EditorWindowState = {
      ...defaultState,
      objectDetailsUnavailablePromptVisible: false,
    };

    const result = editorWindowReducer(state, openObjectDetailsUnavailablePrompt());

    const expected: EditorWindowState = {
      ...state,
      objectDetailsUnavailablePromptVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing object details unavailable prompt", () => {
    const state: EditorWindowState = {
      ...defaultState,
      objectDetailsUnavailablePromptVisible: true,
    };

    const result = editorWindowReducer(state, closeObjectDetailsUnavailablePrompt());

    const expected: EditorWindowState = {
      ...state,
      objectDetailsUnavailablePromptVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening erase objects settings", () => {
    const state: EditorWindowState = {
      ...defaultState,
      eraseObejctsSettingsVisible: false,
    };

    const result = editorWindowReducer(state, openEraseObjectsSettings());

    const expected: EditorWindowState = {
      ...state,
      eraseObejctsSettingsVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing erase objects settings", () => {
    const state: EditorWindowState = {
      ...defaultState,
      eraseObejctsSettingsVisible: true,
    };

    const result = editorWindowReducer(state, closeEraseObjectsSettings());

    const expected: EditorWindowState = {
      ...state,
      eraseObejctsSettingsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing erase objects settings", () => {
    const state: EditorWindowState = {
      ...defaultState,
      eraseObjectsSettings: {
        allOverlays: false,
        clearEntire: false,
        objectTypes: [
          EditorObjectType.Artifacts,
        ],
      },
    };

    const value: EraseObjectsSettings = {
      allOverlays: false,
      clearEntire: false,
      objectTypes: [],
    };

    const result = editorWindowReducer(state, changeEraseObjectsSettings(value));

    const expected: EditorWindowState = {
      ...state,
      eraseObjectsSettings: value,
    };

    expect(result).toEqual(expected);
  });

  it("should handle zooming in", () => {
    const state: EditorWindowState = {
      ...defaultState,
      zoomed: false,
    };

    const result = editorWindowReducer(state, zoomIn());

    const expected: EditorWindowState = {
      ...state,
      zoomed: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle zooming out", () => {
    const state: EditorWindowState = {
      ...defaultState,
      zoomed: true,
    };

    const result = editorWindowReducer(state, zoomOut());

    const expected: EditorWindowState = {
      ...state,
      zoomed: false,
    };

    expect(result).toEqual(expected);
  });
});
