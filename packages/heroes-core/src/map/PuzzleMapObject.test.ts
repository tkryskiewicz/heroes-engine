import { Game } from "../Game";
import { createMap } from "./Map";
import { MapObjectData } from "./MapObject";
import { handlePuzzleMapObject, isPuzzleMapObjectData, PuzzleMapObjectData } from "./PuzzleMapObject";

describe("isPuzzleMapObjectData", () => {
  it("should return true if puzzle map object", () => {
    const objectData: PuzzleMapObjectData = {
      id: "id",
      uncoversPuzzlePiece: true,
    };

    const result = isPuzzleMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not puzzle map object", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isPuzzleMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("handlePuzzleMapObject", () => {
  it("should uncover puzzle piece", () => {
    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
        spells: {},
      },
      heroes: [],
      map: createMap(1, 1, "terrain"),
      puzzle: {
        totalPieces: 1,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    const result = handlePuzzleMapObject(game);

    expect(result.puzzle.uncoveredPieces).toBe(1);
  });

  it("should not uncover more than total pieces", () => {
    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {},
        resources: {},
        spells: {},
      },
      heroes: [],
      map: createMap(1, 1, "terrain"),
      puzzle: {
        totalPieces: 1,
        uncoveredPieces: 1,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    const result = handlePuzzleMapObject(game);

    expect(result.puzzle.uncoveredPieces).toBe(1);
  });
});
