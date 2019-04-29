import { MapPoint } from "heroes-core";
import { EditorOption } from "heroes-homm1";

export enum EditorWindowActionType {
  ChangePosition = "editorWindow/changePosition",
  ChangeSelectedOption = "editorWindow/changeSelectedOption",
  ChangeSelectedTerrain = "editorWindow/changeSelectedTerrain",
  ChangeTerrain = "editorWindow/changeTerrain",
  ZoomIn = "editorWindow/zoomIn",
  ZoomOut = "editorWindow/zoomOut",
}

export type EditorWindowAction =
  ChangePositionAction |
  ChangeSelectedOptionAction |
  ChangeSelectedTerrainAction |
  ChangeTerrainAction |
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
