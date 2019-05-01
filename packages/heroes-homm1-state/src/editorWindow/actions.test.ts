import { MapPoint } from "heroes-core";
import { EditorOption } from "heroes-homm1";

import {
  changePosition,
  ChangePositionAction,
  changeSelectedOption,
  ChangeSelectedOptionAction,
  changeSelectedTerrain,
  ChangeSelectedTerrainAction,
  changeTerrain,
  ChangeTerrainAction,
  EditorWindowActionType,
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
