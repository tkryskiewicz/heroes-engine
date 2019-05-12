import { MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption, EraseObjectsSettings } from "heroes-homm1";

import {
  changeEraseObjectsSettings,
  ChangeEraseObjectsSettingsAction,
  changePosition,
  ChangePositionAction,
  changeSelectedObject,
  ChangeSelectedObjectAction,
  changeSelectedObjectType,
  ChangeSelectedObjectTypeAction,
  changeSelectedOption,
  ChangeSelectedOptionAction,
  changeSelectedTerrain,
  ChangeSelectedTerrainAction,
  changeTerrain,
  ChangeTerrainAction,
  closeEraseObjectsSettings,
  CloseEraseObjectsSettingsAction,
  closeObjectDetailsUnavailablePrompt,
  CloseObjectDetailsUnavailablePromptAction,
  closeObjectsWindow,
  CloseObjectsWindowAction,
  EditorWindowActionType,
  openEraseObjectsSettings,
  OpenEraseObjectsSettingsAction,
  openObjectDetailsUnavailablePrompt,
  OpenObjectDetailsUnavailablePromptAction,
  openObjectsWindow,
  OpenObjectsWindowAction,
  zoomIn,
  ZoomInAction,
  zoomOut,
  ZoomOutAction,
} from "./actions";

describe("editorWindowActions", () => {
  it("should create an action to change position", () => {
    const position: MapPoint = {
      x: 0,
      y: 0,
    };

    const result = changePosition(position);

    const expected: ChangePositionAction = {
      type: EditorWindowActionType.ChangePosition,
      value: position,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change selected option", () => {
    const result = changeSelectedOption(EditorOption.Details);

    const expected: ChangeSelectedOptionAction = {
      type: EditorWindowActionType.ChangeSelectedOption,
      value: EditorOption.Details,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change selected terrain", () => {
    const result = changeSelectedTerrain("terrain");

    const expected: ChangeSelectedTerrainAction = {
      type: EditorWindowActionType.ChangeSelectedTerrain,
      value: "terrain",
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change terrain", () => {
    const result = changeTerrain({ x: 0, y: 0 }, "terrain");

    const expected: ChangeTerrainAction = {
      point: { x: 0, y: 0 },
      terrain: "terrain",
      type: EditorWindowActionType.ChangeTerrain,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change selected object type", () => {
    const result = changeSelectedObjectType(EditorObjectType.WaterObjects);

    const expected: ChangeSelectedObjectTypeAction = {
      type: EditorWindowActionType.ChangeSelectedObjectType,
      value: EditorObjectType.WaterObjects,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change selected object", () => {
    const result = changeSelectedObject("object");

    const expected: ChangeSelectedObjectAction = {
      type: EditorWindowActionType.ChangeSelectedObject,
      value: "object",
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open objects window", () => {
    const result = openObjectsWindow();

    const expected: OpenObjectsWindowAction = {
      type: EditorWindowActionType.OpenObjectsWindow,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close objects window", () => {
    const result = closeObjectsWindow();

    const expected: CloseObjectsWindowAction = {
      type: EditorWindowActionType.CloseObjectsWindow,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open object details unavailable prompt", () => {
    const result = openObjectDetailsUnavailablePrompt();

    const expected: OpenObjectDetailsUnavailablePromptAction = {
      type: EditorWindowActionType.OpenObjectDetailsUnavailablePrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close object details unavailable prompt", () => {
    const result = closeObjectDetailsUnavailablePrompt();

    const expected: CloseObjectDetailsUnavailablePromptAction = {
      type: EditorWindowActionType.CloseObjectDetailsUnavailablePrompt,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to open erase objects settings", () => {
    const result = openEraseObjectsSettings();

    const expected: OpenEraseObjectsSettingsAction = {
      type: EditorWindowActionType.OpenEraseObjectsSettings,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close erase objects settings", () => {
    const result = closeEraseObjectsSettings();

    const expected: CloseEraseObjectsSettingsAction = {
      type: EditorWindowActionType.CloseEraseObjectsSettings,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change erase objects settings", () => {
    const value: EraseObjectsSettings = {
      allOverlays: false,
      clearEntire: false,
      objectTypes: [],
    };

    const result = changeEraseObjectsSettings(value);

    const expected: ChangeEraseObjectsSettingsAction = {
      type: EditorWindowActionType.ChangeEraseObjectsSettings,
      value,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to zoom in", () => {
    const result = zoomIn();

    const expected: ZoomInAction = {
      type: EditorWindowActionType.ZoomIn,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to zoom out", () => {
    const result = zoomOut();

    const expected: ZoomOutAction = {
      type: EditorWindowActionType.ZoomOut,
    };

    expect(result).toEqual(expected);
  });
});
