import { MapObjectData } from "./MapObject";
import { isPuzzleMapObjectData, PuzzleMapObjectData } from "./PuzzleMapObject";

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
