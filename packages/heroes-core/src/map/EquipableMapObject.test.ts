import { Item } from "../Item";
import {
  addEquipableMapObjectItem,
  EquipableMapObject,
  hasEquipableMapObjectItem,
  isEquipableMapObject,
  tradeEquipableMapObjectItems,
} from "./EquipableMapObject";
import { MapObject } from "./MapObject";

describe("isEquipableMapObject", () => {
  it("should return true when equipable object", () => {
    const object: EquipableMapObject = {
      artifacts: [],
      dataId: "dataId",
      id: "id",
    };

    const result = isEquipableMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not equipable object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isEquipableMapObject(object);

    expect(result).toBe(false);
  });
});

describe("addEquipableMapObjectItem", () => {
  it("should add item to inventory", () => {
    const item: Item = {
      data: "dataId",
      id: "id",
    };

    const object: EquipableMapObject = {
      artifacts: [],
      dataId: "dataId",
      id: "id",
    };

    const result = addEquipableMapObjectItem(object, item);

    const expected: EquipableMapObject = {
      ...object,
      artifacts: [
        item,
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("hasEquipableMapObjectItem", () => {
  it("should return true when item is in inventory", () => {
    const item: Item = {
      data: {},
      id: "item",
    };

    const object: EquipableMapObject = {
      artifacts: [
        item,
      ],
      dataId: "dataId",
      id: "id",
    };

    const result = hasEquipableMapObjectItem(object, "item");

    expect(result).toBe(true);
  });

  it("should return false when item not in inventory", () => {
    const object: EquipableMapObject = {
      artifacts: [],
      dataId: "dataId",
      id: "id",
    };

    const result = hasEquipableMapObjectItem(object, "item");

    expect(result).toBe(false);
  });
});

describe("tradeEquipableMapObjectItems", () => {
  it("should trade items between objects", () => {
    const item: Item = {
      data: {},
      id: "item",
    };

    const object: EquipableMapObject = {
      artifacts: [
        item,
      ],
      dataId: "dataId",
      id: "id",
    };

    const withObject: EquipableMapObject = {
      artifacts: [],
      dataId: "dataId",
      id: "otherId",
    };

    const [objectResult, withObjectResult] = tradeEquipableMapObjectItems(object, 0, withObject, 0);

    const expectedObject: EquipableMapObject = {
      ...object,
      artifacts: [
        undefined,
      ],
    };

    const expectedWithObject: EquipableMapObject = {
      ...withObject,
      artifacts: [
        item,
      ],
    };

    expect(objectResult).toEqual(expectedObject);
    expect(withObjectResult).toEqual(expectedWithObject);
  });

  it("should trade items within object", () => {
    const item: Item = {
      data: {},
      id: "item",
    };

    const withItem: Item = {
      data: {},
      id: "otherItem",
    };

    const object: EquipableMapObject = {
      artifacts: [
        item,
        withItem,
      ],
      dataId: "dataId",
      id: "id",
    };

    const [objectResult] = tradeEquipableMapObjectItems(object, 0, object, 1);

    const expected: EquipableMapObject = {
      artifacts: [
        withItem,
        item,
      ],
      dataId: "dataId",
      id: "id",
    };

    expect(objectResult).toEqual(expected);
  });
});
