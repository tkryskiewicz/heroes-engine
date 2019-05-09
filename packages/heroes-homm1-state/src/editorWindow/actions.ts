import { MapObject, MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption } from "heroes-homm1";

export enum EditorWindowActionType {
  ChangePosition = "editorWindow/changePosition",
  ChangeSelectedOption = "editorWindow/changeSelectedOption",
  ChangeSelectedTerrain = "editorWindow/changeSelectedTerrain",
  ChangeTerrain = "editorWindow/changeTerrain",
  ChangeSelectedObjectType = "editorWindow/changeSelectedObjectType",
  ChangeSelectedObject = "editorWindow/changeSelectedObject",
  OpenObjectsWindow = "editorWindow/openObjectsWindow",
  CloseObjectsWindow = "editorWindow/closeObjectsWindow",
  PlaceObject = "editorWindow/placeObject",
  ZoomIn = "editorWindow/zoomIn",
  ZoomOut = "editorWindow/zoomOut",
}

export type EditorWindowAction =
  ChangePositionAction |
  ChangeSelectedOptionAction |
  ChangeSelectedTerrainAction |
  ChangeTerrainAction |
  ChangeSelectedObjectTypeAction |
  ChangeSelectedObjectAction |
  OpenObjectsWindowAction |
  CloseObjectsWindowAction |
  PlaceObjectAction |
  ZoomInAction |
  ZoomOutAction;

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

export interface ChangeTerrainAction {
  readonly type: EditorWindowActionType.ChangeTerrain;
  readonly point: MapPoint;
  readonly terrain: string;
}

export const changeTerrain = (point: MapPoint, terrain: string): ChangeTerrainAction => ({
  point,
  terrain,
  type: EditorWindowActionType.ChangeTerrain,
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

export interface PlaceObjectAction {
  readonly type: EditorWindowActionType.PlaceObject;
  readonly point: MapPoint;
  readonly object: MapObject;
}

export const placeObject = (point: MapPoint, object: MapObject): PlaceObjectAction => ({
  object,
  point,
  type: EditorWindowActionType.PlaceObject,
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
