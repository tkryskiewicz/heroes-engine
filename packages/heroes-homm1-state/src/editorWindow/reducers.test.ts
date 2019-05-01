import { createMap, MapPoint } from "heroes-core";
import { EditorOption, TerrainType } from "heroes-homm1";

import { changePosition, changeSelectedOption, changeSelectedTerrain, changeTerrain, zoomIn, zoomOut } from "./actions";
import { editorWindowReducer } from "./reducers";
import { EditorWindowState } from "./state";

describe("editorWindowReducer", () => {
  it("should return initial state", () => {
    const result = editorWindowReducer(undefined, {} as any);

    const expected: EditorWindowState = {
      map: createMap(50, 50, TerrainType.Water),
      position: {
        x: 0,
        y: 0,
      },
      selectedOption: EditorOption.Terrains,
      selectedTerrain: TerrainType.Water,
      zoomed: true,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing posiition", () => {
    const state: EditorWindowState = {
      map: createMap(1, 1, "terrain"),
      position: {
        x: 0,
        y: 0,
      },
      selectedOption: EditorOption.Details,
      selectedTerrain: "terrain",
      zoomed: false,
    };

    const position: MapPoint = {
      x: 1,
      y: 1,
    };

    const result = editorWindowReducer(state, changePosition(position));

    const expected: EditorWindowState = {
      ...state,
      position,
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing selected option", () => {
    const state: EditorWindowState = {
      map: createMap(1, 1, "terrain"),
      position: {
        x: 0,
        y: 0,
      },
      selectedOption: EditorOption.Details,
      selectedTerrain: "terrain",
      zoomed: false,
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
      map: createMap(1, 1, "terrain"),
      position: {
        x: 0,
        y: 0,
      },
      selectedOption: EditorOption.Details,
      selectedTerrain: "terrain",
      zoomed: false,
    };

    const result = editorWindowReducer(state, changeSelectedTerrain("otherTerrain"));

    const expected: EditorWindowState = {
      ...state,
      selectedTerrain: "otherTerrain",
    };

    expect(result).toEqual(expected);
  });

  it("should handle changing terrain", () => {
    const state: EditorWindowState = {
      map: createMap(1, 1, "terrain"),
      position: {
        x: 0,
        y: 0,
      },
      selectedOption: EditorOption.Details,
      selectedTerrain: "terrain",
      zoomed: false,
    };

    const result = editorWindowReducer(state, changeTerrain({ x: 0, y: 0 }, "otherTerrain"));

    const expected: EditorWindowState = {
      ...state,
      map: {
        ...state.map,
        tiles: [
          {
            terrain: "otherTerrain",
          },
        ],
      },
    };

    expect(result).toEqual(expected);
  });

  it("should handle zooming in", () => {
    const state: EditorWindowState = {
      map: createMap(1, 1, "terrain"),
      position: {
        x: 0,
        y: 0,
      },
      selectedOption: EditorOption.Details,
      selectedTerrain: "terrain",
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
      map: createMap(1, 1, "terrain"),
      position: {
        x: 0,
        y: 0,
      },
      selectedOption: EditorOption.Details,
      selectedTerrain: "terrain",
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
