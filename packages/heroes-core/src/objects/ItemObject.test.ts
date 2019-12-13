import { GameObjectData } from "../GameObject";
import { Item } from "../Item";
import {
  constructItemObjectItem,
  isItemObjectData,
  ItemObjectData,
} from "./ItemObject";

describe("isItemObjectData", () => {
  it("should return true when item object data", () => {
    const objectData: ItemObjectData = {
      id: "dataId",
      item: "item",
    };

    const result = isItemObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not item object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isItemObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("constructItemObjectItem", () => {
  it("should construct item", () => {
    const objectData: ItemObjectData = {
      id: "dataId",
      item: "item",
    };

    const result = constructItemObjectItem(objectData);

    const expected: Item = {
      data: {},
      dataId: "dataId",
      id: "item",
    };

    expect(result).toEqual(expected);
  });
});
