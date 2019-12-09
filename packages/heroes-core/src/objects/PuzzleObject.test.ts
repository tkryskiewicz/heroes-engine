import { GameObjectData } from "../GameObject";
import { isPuzzleObjectData, PuzzleObjectData } from "./PuzzleObject";

describe("isPuzzleObjectData", () => {
  it("should return true if puzzle object", () => {
    const objectData: PuzzleObjectData = {
      id: "id",
      uncoversPuzzlePiece: true,
    };

    const result = isPuzzleObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not puzzle object", () => {
    const objectData: GameObjectData = {
      id: "id",
    };

    const result = isPuzzleObjectData(objectData);

    expect(result).toBe(false);
  });
});
