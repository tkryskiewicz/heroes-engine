import { MapObjectData } from "./MapObject";
import { isPuzzleMapObjectData, PuzzleMapObjectData } from "./PuzzleMapObject";

describe("isPuzzleMapObjectData", () => {
  it("should return true if puzzle map object", () => {
    const objectData: PuzzleMapObjectData = {
      grid: [],
      height: 1,
      id: "id",
      uncoversPuzzlePiece: true,
      width: 1,
    };

    const result = isPuzzleMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not puzzle map object", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "id",
      width: 1,
    };

    const result = isPuzzleMapObjectData(objectData);

    expect(result).toBe(false);
  });
});
