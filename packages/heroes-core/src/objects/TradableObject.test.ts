import { GameObjectData } from "../GameObject";
import { isObjectTradable, isTradableObjectData, TradableObjectData } from "./TradableObject";

describe("isTradableObjectData", () => {
  it("should return true when tradable object data", () => {
    const objectData: TradableObjectData = {
      id: "id",
      tradable: true,
    };

    const result = isTradableObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not tradable object data", () => {
    const objectData: GameObjectData = {
      id: "id",
    };

    const result = isTradableObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("isObjectTradable", () => {
  it("should return true when object is tradable", () => {
    const objectData: TradableObjectData = {
      id: "dataId",
      tradable: true,
    };

    const result = isObjectTradable(objectData);

    expect(result).toBe(true);
  });

  it("should return false when object is not tradable", () => {
    const objectData: TradableObjectData = {
      id: "dataId",
      tradable: false,
    };

    const result = isObjectTradable(objectData);

    expect(result).toBe(false);
  });
});
