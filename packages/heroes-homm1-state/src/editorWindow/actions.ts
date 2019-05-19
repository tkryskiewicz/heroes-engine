import { Map, MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption, EraseObjectsSettings, MapObjectDetails } from "heroes-homm1";

export enum EditorWindowActionType {
  ChangeMap = "editorWindow/changeMap",
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
  ZoomIn = "editorWindow/zoomIn",
  ZoomOut = "editorWindow/zoomOut",
}

export type EditorWindowAction =
  ChangeMapAction |
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
  ZoomInAction |
  ZoomOutAction;

export interface ChangeMapAction {
  readonly type: EditorWindowActionType.ChangeMap;
  readonly value: Map;
}

export const changeMap = (value: Map): ChangeMapAction => ({
  type: EditorWindowActionType.ChangeMap,
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
  readonly value: EditorObjectType;
}

export const changeSelectedObjectType = (value: EditorObjectType): ChangeSelectedObjectTypeAction => ({
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
  readonly value: MapObjectDetails;
}

export const changeSelectedObjectDetails = (value: MapObjectDetails): ChangeSelectedObjectDetailsAction => ({
  type: EditorWindowActionType.ChangeSelectedObjectDetails,
  value,
});

export interface OpenObjectDetailsAction {
  readonly type: EditorWindowActionType.OpenObjectDetails;
  readonly id: string;
  readonly value: MapObjectDetails;
}

export const openObjectDetails = (id: string, value: MapObjectDetails): OpenObjectDetailsAction => ({
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
