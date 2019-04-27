import { EditorOption } from "heroes-homm1";

import {
  changeSelectedOption,
  ChangeSelectedOptionAction,
  changeSelectedTerrain,
  ChangeSelectedTerrainAction,
  EditorWindowActionType,
  zoomIn,
  ZoomInAction,
  zoomOut,
  ZoomOutAction,
} from "./actions";

describe("editorWindowActions", () => {
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
