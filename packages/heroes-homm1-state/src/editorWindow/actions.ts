import { MapPoint } from "heroes-core";
import {
  EditorOption,
  EraseObjectsSettings,
  ObjectDetails,
  ObjectType,
  RandomMapSettings,
  Scenario,
  ScenarioSpecification,
} from "heroes-homm1";

export enum EditorWindowActionType {
  ChangeScenario = "editorWindow/changeScenario",
  ChangePosition = "editorWindow/changePosition",
  ChangeSelectedOption = "editorWindow/changeSelectedOption",
  ChangeSelectedTerrain = "editorWindow/changeSelectedTerrain",
  ChangeSelectedObjectType = "editorWindow/changeSelectedObjectType",
  // TODO: rename??
  ChangeSelectedObject = "editorWindow/changeSelectedObject",
  OpenObjectsWindow = "editorWindow/openObjectsWindow",
  CloseObjectsWindow = "editorWindow/closeObjectsWindow",
  ChangeSelectedObjectDetails = "editorWindow/changeSelectedObjectDetails",
  OpenObjectDetails = "editorWindow/openObjectDetails",
  CloseObjectDetails = "editorWindow/closeObjectDetails",
  OpenObjectDetailsUnavailablePrompt = "editorWindow/openObjectDetailsUnavailablePrompt",
  CloseObjectDetailsUnavailablePrompt = "editorWindow/closeObjectDetailsUnavailablePrompt",
  OpenEraseObjectsSettings = "editorWindow/openEraseObjectsSettings",
  CloseEraseObjectsSettings = "editorWindow/closeEraseObjectsSettings",
  ChangeEraseObjectsSettings = "editorWindow/changeEraseObjectsSettings",
  OpenScenarioSpecification = "editorWindow/openScenarioSpecification",
  CloseScenarioSpecification = "editorWindow/closeScenarioSpecification",
  ChangeScenarioSpecification = "editorWindow/changeScenarioSpecification",
  OpenRandomMapSettings = "editorWindow/openRandomMapSettings",
  CloseRandomMapSettings = "editorWindow/closeRandomMapSettings",
  ChangeRandomMapSettings = "editorWindow/changeRandomMapSettings",
  ZoomIn = "editorWindow/zoomIn",
  ZoomOut = "editorWindow/zoomOut",
}

export type EditorWindowAction =
  ChangeScenarioAction |
  ChangePositionAction |
  ChangeSelectedOptionAction |
  ChangeSelectedTerrainAction |
  ChangeSelectedObjectTypeAction |
  ChangeSelectedObjectAction |
  OpenObjectsWindowAction |
  CloseObjectsWindowAction |
  ChangeSelectedObjectDetailsAction |
  OpenObjectDetailsAction |
  CloseObjectDetailsAction |
  OpenObjectDetailsUnavailablePromptAction |
  CloseObjectDetailsUnavailablePromptAction |
  OpenEraseObjectsSettingsAction |
  CloseEraseObjectsSettingsAction |
  ChangeEraseObjectsSettingsAction |
  OpenScenarioSpecificationAction |
  CloseScenarioSpecificationAction |
  ChangeScenarioSpecificationAction |
  OpenRandomMapSettingsAction |
  CloseRandomMapSettingsAction |
  ChangeRandomMapSettingsAction |
  ZoomInAction |
  ZoomOutAction;

export interface ChangeScenarioAction {
  readonly type: EditorWindowActionType.ChangeScenario;
  readonly value: Scenario;
}

export const changeScenario = (value: Scenario): ChangeScenarioAction => ({
  type: EditorWindowActionType.ChangeScenario,
  value,
});

export interface ChangePositionAction {
  readonly type: EditorWindowActionType.ChangePosition;
  readonly value: MapPoint;
}

export const changePosition = (value: MapPoint): ChangePositionAction => ({
  type: EditorWindowActionType.ChangePosition,
  value,
});

export interface ChangeSelectedOptionAction {
  readonly type: EditorWindowActionType.ChangeSelectedOption;
  readonly value: EditorOption;
}

export const changeSelectedOption = (value: EditorOption): ChangeSelectedOptionAction => ({
  type: EditorWindowActionType.ChangeSelectedOption,
  value,
});

export interface ChangeSelectedTerrainAction {
  readonly type: EditorWindowActionType.ChangeSelectedTerrain;
  readonly value: string;
}

export const changeSelectedTerrain = (value: string): ChangeSelectedTerrainAction => ({
  type: EditorWindowActionType.ChangeSelectedTerrain,
  value,
});

export interface ChangeSelectedObjectTypeAction {
  readonly type: EditorWindowActionType.ChangeSelectedObjectType;
  readonly value: ObjectType;
}

export const changeSelectedObjectType = (value: ObjectType): ChangeSelectedObjectTypeAction => ({
  type: EditorWindowActionType.ChangeSelectedObjectType,
  value,
});

export interface ChangeSelectedObjectAction {
  readonly type: EditorWindowActionType.ChangeSelectedObject;
  readonly value?: string;
}

export const changeSelectedObject = (value?: string): ChangeSelectedObjectAction => ({
  type: EditorWindowActionType.ChangeSelectedObject,
  value,
});

export interface OpenObjectsWindowAction {
  readonly type: EditorWindowActionType.OpenObjectsWindow;
}

export const openObjectsWindow = (): OpenObjectsWindowAction => ({
  type: EditorWindowActionType.OpenObjectsWindow,
});

export interface CloseObjectsWindowAction {
  readonly type: EditorWindowActionType.CloseObjectsWindow;
}

export const closeObjectsWindow = (): CloseObjectsWindowAction => ({
  type: EditorWindowActionType.CloseObjectsWindow,
});

export interface ChangeSelectedObjectDetailsAction {
  readonly type: EditorWindowActionType.ChangeSelectedObjectDetails;
  readonly value: ObjectDetails;
}

export const changeSelectedObjectDetails = (value: ObjectDetails): ChangeSelectedObjectDetailsAction => ({
  type: EditorWindowActionType.ChangeSelectedObjectDetails,
  value,
});

export interface OpenObjectDetailsAction {
  readonly type: EditorWindowActionType.OpenObjectDetails;
  readonly id: string;
  readonly value: ObjectDetails;
}

export const openObjectDetails = (id: string, value: ObjectDetails): OpenObjectDetailsAction => ({
  id,
  type: EditorWindowActionType.OpenObjectDetails,
  value,
});

export interface CloseObjectDetailsAction {
  readonly type: EditorWindowActionType.CloseObjectDetails;
}

export const closeObjectDetails = (): CloseObjectDetailsAction => ({
  type: EditorWindowActionType.CloseObjectDetails,
});

export interface OpenObjectDetailsUnavailablePromptAction {
  readonly type: EditorWindowActionType.OpenObjectDetailsUnavailablePrompt;
}

export const openObjectDetailsUnavailablePrompt = (): OpenObjectDetailsUnavailablePromptAction => ({
  type: EditorWindowActionType.OpenObjectDetailsUnavailablePrompt,
});

export interface CloseObjectDetailsUnavailablePromptAction {
  readonly type: EditorWindowActionType.CloseObjectDetailsUnavailablePrompt;
}

export const closeObjectDetailsUnavailablePrompt = (): CloseObjectDetailsUnavailablePromptAction => ({
  type: EditorWindowActionType.CloseObjectDetailsUnavailablePrompt,
});

export interface OpenEraseObjectsSettingsAction {
  readonly type: EditorWindowActionType.OpenEraseObjectsSettings;
}

export const openEraseObjectsSettings = (): OpenEraseObjectsSettingsAction => ({
  type: EditorWindowActionType.OpenEraseObjectsSettings,
});

export interface CloseEraseObjectsSettingsAction {
  readonly type: EditorWindowActionType.CloseEraseObjectsSettings;
}

export const closeEraseObjectsSettings = (): CloseEraseObjectsSettingsAction => ({
  type: EditorWindowActionType.CloseEraseObjectsSettings,
});

export interface ChangeEraseObjectsSettingsAction {
  readonly type: EditorWindowActionType.ChangeEraseObjectsSettings;
  readonly value: EraseObjectsSettings;
}

export const changeEraseObjectsSettings = (value: EraseObjectsSettings): ChangeEraseObjectsSettingsAction => ({
  type: EditorWindowActionType.ChangeEraseObjectsSettings,
  value,
});

export interface OpenScenarioSpecificationAction {
  readonly type: EditorWindowActionType.OpenScenarioSpecification;
}

export const openScenarioSpecification = (): OpenScenarioSpecificationAction => ({
  type: EditorWindowActionType.OpenScenarioSpecification,
});

export interface CloseScenarioSpecificationAction {
  readonly type: EditorWindowActionType.CloseScenarioSpecification;
}

export const closeScenarioSpecification = (): CloseScenarioSpecificationAction => ({
  type: EditorWindowActionType.CloseScenarioSpecification,
});

export interface ChangeScenarioSpecificationAction {
  readonly type: EditorWindowActionType.ChangeScenarioSpecification;
  readonly value: ScenarioSpecification;
}

export const changeScenarioSpecification = (value: ScenarioSpecification): ChangeScenarioSpecificationAction => ({
  type: EditorWindowActionType.ChangeScenarioSpecification,
  value,
});

export interface OpenRandomMapSettingsAction {
  readonly type: EditorWindowActionType.OpenRandomMapSettings;
}

export const openRandomMapSettings = (): OpenRandomMapSettingsAction => ({
  type: EditorWindowActionType.OpenRandomMapSettings,
});

export interface CloseRandomMapSettingsAction {
  readonly type: EditorWindowActionType.CloseRandomMapSettings;
}

export const closeRandomMapSettings = (): CloseRandomMapSettingsAction => ({
  type: EditorWindowActionType.CloseRandomMapSettings,
});

export interface ChangeRandomMapSettingsAction {
  readonly type: EditorWindowActionType.ChangeRandomMapSettings;
  readonly value: RandomMapSettings;
}

export const changeRandomMapSettings = (value: RandomMapSettings): ChangeRandomMapSettingsAction => ({
  type: EditorWindowActionType.ChangeRandomMapSettings,
  value,
});

export interface ZoomInAction {
  readonly type: EditorWindowActionType.ZoomIn;
}

export const zoomIn = (): ZoomInAction => ({
  type: EditorWindowActionType.ZoomIn,
});

export interface ZoomOutAction {
  readonly type: EditorWindowActionType.ZoomOut;
}

export const zoomOut = (): ZoomOutAction => ({
  type: EditorWindowActionType.ZoomOut,
});
