import { MapPoint } from "heroes-core";
import { EditorObjectType, EditorOption } from "heroes-homm1";

import {
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
  closeObjectsWindow,
  CloseObjectsWindowAction,
  EditorWindowActionType,
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
