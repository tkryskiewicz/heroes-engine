import { Item } from "../Item";
import {
  constructItemMapObjectItem,
  isItemMapObjectData,
  ItemMapObjectData,
} from "./ItemMapObject";
import { MapObjectData } from "./MapObject";

describe("isItemMapObjectData", () => {
  it("should return true when item object data", () => {
    const objectData: ItemMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      item: "item",
      width: 1,
    };

    const result = isItemMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not item object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isItemMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("constructItemMapObjectItem", () => {
  it("should construct item", () => {
    const objectData: ItemMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      item: "item",
      width: 1,
    };

    const result = constructItemMapObjectItem(objectData);

    const expected: Item = {
      data: {},
      id: "item",
    };

    expect(result).toEqual(expected);
  });
});
