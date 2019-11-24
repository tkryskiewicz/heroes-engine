import { Item } from "../Item";
import {
  addEquipableMapObjectItem,
  EquipableMapObject,
  EquipableMapObjectData,
  hasEquipableMapObjectItem,
  initializeEquipableMapObject,
  isEquipableMapObject,
  isEquipableMapObjectData,
  tradeEquipableMapObjectItems,
} from "./EquipableMapObject";
import { createMapObject, MapObject, MapObjectData } from "./MapObject";

describe("isEquipableMapObjectData", () => {
  it("should return true when equipable object data", () => {
    const objectData: EquipableMapObjectData = {
      equipable: true,
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isEquipableMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not equipable object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isEquipableMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeEquipableMapObject", () => {
  it("should initialize items", () => {
    const objectData: EquipableMapObjectData = {
      equipable: true,
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const object = createMapObject("id", objectData);

    const result = initializeEquipableMapObject(object);

    const expected: EquipableMapObject = {
      ...object,
      items: [],
    };

    expect(result).toEqual(expected);
  });
});

describe("isEquipableMapObject", () => {
  it("should return true when equipable object", () => {
    const object: EquipableMapObject = {
      dataId: "dataId",
      id: "id",
      items: [],
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
      dataId: "dataId",
      id: "id",
      items: [],
    };

    const result = addEquipableMapObjectItem(object, item);

    const expected: EquipableMapObject = {
      ...object,
      items: [
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
      dataId: "dataId",
      id: "id",
      items: [
        item,
      ],
    };

    const result = hasEquipableMapObjectItem(object, "item");

    expect(result).toBe(true);
  });

  it("should return false when item not in inventory", () => {
    const object: EquipableMapObject = {
      dataId: "dataId",
      id: "id",
      items: [],
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
      dataId: "dataId",
      id: "id",
      items: [
        item,
      ],
    };

    const withObject: EquipableMapObject = {
      dataId: "dataId",
      id: "otherId",
      items: [],
    };

    const [objectResult, withObjectResult] = tradeEquipableMapObjectItems(object, 0, withObject, 0);

    const expectedObject: EquipableMapObject = {
      ...object,
      items: [
        undefined,
      ],
    };

    const expectedWithObject: EquipableMapObject = {
      ...withObject,
      items: [
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
      dataId: "dataId",
      id: "id",
      items: [
        item,
        withItem,
      ],
    };

    const [objectResult] = tradeEquipableMapObjectItems(object, 0, object, 1);

    const expected: EquipableMapObject = {
      dataId: "dataId",
      id: "id",
      items: [
        withItem,
        item,
      ],
    };

    expect(objectResult).toEqual(expected);
  });
});
