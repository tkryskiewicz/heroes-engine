import { GameObjectData } from "heroes-core";

import { CategorisedObjectData, isCategorisedObjectData, isObjectFromCategory } from "./CategorisedObject";

describe("isCategorisedObjectData", () => {
  it("should return true when categorised object data", () => {
    const objectData: CategorisedObjectData = {
      category: "category",
      id: "dataId",
    };

    const result = isCategorisedObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not categorised object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isCategorisedObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("isObjectFromCategory", () => {
  it("should return true when category matches", () => {
    const objectData: CategorisedObjectData = {
      category: "category",
      id: "dataId",
    };

    const result = isObjectFromCategory(objectData, "category");

    expect(result).toBe(true);
  });

  it("should return false when category doesn't match", () => {
    const objectData: CategorisedObjectData = {
      category: "category",
      id: "dataId",
    };

    const result = isObjectFromCategory(objectData, "otherCategory");

    expect(result).toBe(false);
  });

  it("should return true when multiple categories and matches", () => {
    const objectData: CategorisedObjectData = {
      category: [
        "category",
      ],
      id: "dataId",
    };

    const result = isObjectFromCategory(objectData, "category");

    expect(result).toBe(true);
  });

  it("should return false when multiple categories and doesn't match", () => {
    const objectData: CategorisedObjectData = {
      category: [
        "category",
      ],
      id: "dataId",
    };

    const result = isObjectFromCategory(objectData, "otherCategory");

    expect(result).toBe(false);
  });
});
