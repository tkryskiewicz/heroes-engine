import { createMap, createPoint } from "heroes-core";
import {
  createDefaultRandomMapSettings,
  createDefaultScenarioSpecification,
  CreatureObjectDetails,
  EditorOption,
  EraseObjectsSettings,
  LandMassSetting,
  ObjectType,
  RandomMapSettings,
  Scenario,
  ScenarioDifficulty,
  ScenarioSize,
  ScenarioSpecification,
  TerrainId,
} from "heroes-homm1";

import {
  changeEraseObjectsSettings,
  changePosition,
  changeRandomMapSettings,
  changeScenario,
  changeScenarioSpecification,
  changeSelectedObject,
  changeSelectedObjectDetails,
  changeSelectedObjectType,
  changeSelectedOption,
  changeSelectedTerrain,
  closeEraseObjectsSettings,
  closeObjectDetails,
  closeObjectDetailsUnavailablePrompt,
  closeObjectsWindow,
  closeRandomMapSettings,
  closeScenarioSpecification,
  openEraseObjectsSettings,
  openObjectDetails,
  openObjectDetailsUnavailablePrompt,
  openObjectsWindow,
  openRandomMapSettings,
  openScenarioSpecification,
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
    objectTypes: Object.values(ObjectType),
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
    map: createMap(50, 50, TerrainId.Water, 0),
    name: "No Name",
    size: ScenarioSize.Medium,
  },
  scenarioSpecification: createDefaultScenarioSpecification(),
  scenarioSpecificationVisible: false,
  selectedObjectType: ObjectType.Water,
  selectedOption: EditorOption.Terrains,
  selectedTerrain: TerrainId.Water,
  zoomed: true,
};

describe("editorWindowReducer", () => {
  it("should return initial state", () => {
    const result = editorWindowReducer(undefined, {} as any);

    const expected: EditorWindowState = {
      ...defaultState,
      scenario: {
        ...defaultState.scenario,
        // FIXME
        map: expect.any(Object),
      },
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing scenario", () => {
    const state: EditorWindowState = {
      ...defaultState,
      scenario: {
        description: "",
        difficulty: ScenarioDifficulty.Normal,
        filePrefix: "",
        map: createMap(1, 1, "terrain"),
        name: "",
        size: ScenarioSize.Medium,
      },
    };

    const value: Scenario = {
      description: "description",
      difficulty: ScenarioDifficulty.Impossible,
      filePrefix: "prefix",
      map: createMap(2, 2, "otherTerrain"),
      name: "name",
      size: ScenarioSize.Large,
    };

    const result = editorWindowReducer(state, changeScenario(value));

    const expected: EditorWindowState = {
      ...state,
      scenario: value,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing posiition", () => {
    const state: EditorWindowState = {
      ...defaultState,
      position: createPoint(0, 0),
    };

    const position = createPoint(1, 1);

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

  it("should handle changing selected object type", () => {
    const state: EditorWindowState = {
      ...defaultState,
      selectedObjectType: ObjectType.Water,
    };

    const result = editorWindowReducer(state, changeSelectedObjectType(ObjectType.Grass));

    const expected: EditorWindowState = {
      ...state,
      selectedObjectType: ObjectType.Grass,
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

  it("should handle opening object details", () => {
    const state: EditorWindowState = {
      ...defaultState,
      visibleObjectDetails: undefined,
    };

    const value: CreatureObjectDetails = 1;

    const result = editorWindowReducer(state, openObjectDetails("id", value));

    const expected: EditorWindowState = {
      ...state,
      selectedObjectDetails: value,
      visibleObjectDetails: "id",
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing object details", () => {
    const state: EditorWindowState = {
      ...defaultState,
      visibleObjectDetails: "object",
    };

    const result = editorWindowReducer(state, closeObjectDetails());

    const expected: EditorWindowState = {
      ...state,
      visibleObjectDetails: undefined,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing selected object details", () => {
    const state: EditorWindowState = {
      ...defaultState,
      selectedObjectDetails: 0,
    };

    const value: CreatureObjectDetails = 1;

    const result = editorWindowReducer(state, changeSelectedObjectDetails(value));

    const expected: EditorWindowState = {
      ...state,
      selectedObjectDetails: value,
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
          ObjectType.Artifact,
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

  it("should handle opening scenario specification", () => {
    const state: EditorWindowState = {
      ...defaultState,
      scenarioSpecificationVisible: false,
    };

    const result = editorWindowReducer(state, openScenarioSpecification());

    const expected: EditorWindowState = {
      ...state,
      scenarioSpecificationVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing scenario specification", () => {
    const state: EditorWindowState = {
      ...defaultState,
      scenarioSpecificationVisible: true,
    };

    const result = editorWindowReducer(state, closeScenarioSpecification());

    const expected: EditorWindowState = {
      ...state,
      scenarioSpecificationVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing scenario specification", () => {
    const state: EditorWindowState = {
      ...defaultState,
      scenarioSpecification: {
        description: "",
        difficulty: ScenarioDifficulty.Normal,
        filePrefix: "",
        name: "",
        size: ScenarioSize.Medium,
      },
    };

    const value: ScenarioSpecification = {
      description: "description",
      difficulty: ScenarioDifficulty.Easy,
      filePrefix: "prefix",
      name: "name",
      size: ScenarioSize.Small,
    };

    const result = editorWindowReducer(state, changeScenarioSpecification(value));

    const expected: EditorWindowState = {
      ...state,
      scenarioSpecification: value,
    };

    expect(result).toEqual(expected);
  });

  it("should handle opening random map settings", () => {
    const state: EditorWindowState = {
      ...defaultState,
      randomMapSettingsVisible: false,
    };

    const result = editorWindowReducer(state, openRandomMapSettings());

    const expected: EditorWindowState = {
      ...state,
      randomMapSettingsVisible: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle closing random map settings", () => {
    const state: EditorWindowState = {
      ...defaultState,
      randomMapSettingsVisible: true,
    };

    const result = editorWindowReducer(state, closeRandomMapSettings());

    const expected: EditorWindowState = {
      ...state,
      randomMapSettingsVisible: false,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing random map settings", () => {
    const state: EditorWindowState = {
      ...defaultState,
      randomMapSettings: {
        landMass: LandMassSetting.Scattered,
        mines: 0,
        monsters: 0,
        mountains: 0,
        saveWithoutViewing: false,
        terrainAmount: {},
        treasures: 0,
        trees: 0,
      },
    };

    const value: RandomMapSettings = {
      landMass: LandMassSetting.Centralized,
      mines: 1,
      monsters: 1,
      mountains: 1,
      saveWithoutViewing: true,
      terrainAmount: {
        terrain: 1,
      },
      treasures: 1,
      trees: 1,
    };

    const result = editorWindowReducer(state, changeRandomMapSettings(value));

    const expected: EditorWindowState = {
      ...state,
      randomMapSettings: value,
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
