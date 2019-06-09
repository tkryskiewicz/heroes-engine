import { InteractionLimitType } from "heroes-core";

import { MapObjectId } from "./MapObjectId";
import { isObeliskMapObject, isObeliskMapObjectData, ObeliskMapObject, ObeliskMapObjectData } from "./ObeliskMapObject";

describe("isObeliskMapObjectData", () => {
  it("should return true when obelisk object data", () => {
    const objectData: ObeliskMapObjectData = {
      grid: [],
      height: 1,
      id: MapObjectId.Obelisk,
      interactionLimit: InteractionLimitType.OncePerAlignment,
      type: "type",
      uncoversPuzzlePiece: true,
      width: 1,
    };

    const result = isObeliskMapObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("isObeliskMapObject", () => {
  it("should return true when obelisk object", () => {
    const object: ObeliskMapObject = {
      dataId: MapObjectId.Obelisk,
      id: "id",
      visitedBy: [],
    };

    const result = isObeliskMapObject(object);

    expect(result).toBe(true);
  });
});
