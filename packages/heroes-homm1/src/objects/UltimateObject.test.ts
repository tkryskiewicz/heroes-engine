import { GameObjectData } from "heroes-core";

import { isUltimateObjectData, UltimateObjectData } from "./UltimateObject";

describe("isUltimateObjectData", () => {
  it("should return true when ultimate object data", () => {
    const objectData: UltimateObjectData = {
      id: "dataId",
      isUltimate: true,
    };

    const result = isUltimateObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not ultimate object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isUltimateObjectData(objectData);

    expect(result).toBe(false);
  });
});
