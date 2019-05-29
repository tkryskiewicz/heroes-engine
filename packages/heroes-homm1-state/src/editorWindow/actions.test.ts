import { createMap, createPoint } from "heroes-core";
import {
  CreatureMapObjectDetails,
  EditorObjectType,
  EditorOption,
  EraseObjectsSettings,
  Scenario,
  ScenarioDifficulty,
  ScenarioSize,
  ScenarioSpecification,
} from "heroes-homm1";

import {
  changeEraseObjectsSettings,
  ChangeEraseObjectsSettingsAction,
  changePosition,
  ChangePositionAction,
  changeScenario,
  ChangeScenarioAction,
  changeScenarioSpecification,
  ChangeScenarioSpecificationAction,
  changeSelectedObject,
  ChangeSelectedObjectAction,
  changeSelectedObjectDetails,
  ChangeSelectedObjectDetailsAction,
  changeSelectedObjectType,
  ChangeSelectedObjectTypeAction,
  changeSelectedOption,
  ChangeSelectedOptionAction,
  changeSelectedTerrain,
  ChangeSelectedTerrainAction,
  closeEraseObjectsSettings,
  CloseEraseObjectsSettingsAction,
  closeObjectDetails,
  CloseObjectDetailsAction,
  closeObjectDetailsUnavailablePrompt,
  CloseObjectDetailsUnavailablePromptAction,
  closeObjectsWindow,
  CloseObjectsWindowAction,
  closeScenarioSpecification,
  CloseScenarioSpecificationAction,
  EditorWindowActionType,
  openEraseObjectsSettings,
  OpenEraseObjectsSettingsAction,
  openObjectDetails,
  OpenObjectDetailsAction,
  openObjectDetailsUnavailablePrompt,
  OpenObjectDetailsUnavailablePromptAction,
  openObjectsWindow,
  OpenObjectsWindowAction,
  openScenarioSpecification,
  OpenScenarioSpecificationAction,
  zoomIn,
  ZoomInAction,
  zoomOut,
  ZoomOutAction,
} from "./actions";

describe("editorWindowActions", () => {
  it("should create an action to change scenario", () => {
    const scenario: Scenario = {
      description: "description",
      difficulty: ScenarioDifficulty.Easy,
      filePrefix: "prefix",
      map: createMap(1, 1, "terrain"),
      name: "name",
      size: ScenarioSize.Small,
    };

    const result = changeScenario(scenario);

    const expected: ChangeScenarioAction = {
      type: EditorWindowActionType.ChangeScenario,
      value: scenario,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change position", () => {
    const position = createPoint(0, 0);

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

  it("should create an action to open object details", () => {
    const value: CreatureMapObjectDetails = 1;

    const result = openObjectDetails("id", value);

    const expected: OpenObjectDetailsAction = {
      id: "id",
      type: EditorWindowActionType.OpenObjectDetails,
      value,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close object details", () => {
    const result = closeObjectDetails();

    const expected: CloseObjectDetailsAction = {
      type: EditorWindowActionType.CloseObjectDetails,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to change selected object details", () => {
    const value: CreatureMapObjectDetails = 1;

    const result = changeSelectedObjectDetails(value);

    const expected: ChangeSelectedObjectDetailsAction = {
      type: EditorWindowActionType.ChangeSelectedObjectDetails,
      value,
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

  it("should create an action to open scenario specification", () => {
    const result = openScenarioSpecification();

    const expected: OpenScenarioSpecificationAction = {
      type: EditorWindowActionType.OpenScenarioSpecification,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to close scenario specification", () => {
    const result = closeScenarioSpecification();

    const expected: CloseScenarioSpecificationAction = {
      type: EditorWindowActionType.CloseScenarioSpecification,
    };

    expect(result).toEqual(expected);
  });

  it("should create an action to changing scenario specification", () => {
    const value: ScenarioSpecification = {
      description: "description",
      difficulty: ScenarioDifficulty.Normal,
      filePrefix: "prefix",
      name: "name",
      size: ScenarioSize.Medium,
    };

    const result = changeScenarioSpecification(value);

    const expected: ChangeScenarioSpecificationAction = {
      type: EditorWindowActionType.ChangeScenarioSpecification,
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
