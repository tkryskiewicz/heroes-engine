import { InteractionLimitType } from "heroes-core";

import { ObjectId } from "../ObjectId";
import { isObeliskObject, isObeliskObjectData, ObeliskObject, ObeliskObjectData } from "./ObeliskObject";

describe("isObeliskObjectData", () => {
  it("should return true when obelisk object data", () => {
    const objectData: ObeliskObjectData = {
      id: ObjectId.Obelisk,
      interactionLimit: InteractionLimitType.OncePerPlayer,
      uncoversPuzzlePiece: true,
    };

    const result = isObeliskObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("isObeliskObject", () => {
  it("should return true when obelisk object", () => {
    const object: ObeliskObject = {
      dataId: ObjectId.Obelisk,
      id: "id",
      visitedBy: [],
    };

    const result = isObeliskObject(object);

    expect(result).toBe(true);
  });
});
