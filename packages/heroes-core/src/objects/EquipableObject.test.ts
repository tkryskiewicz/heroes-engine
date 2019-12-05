import { GameObject, GameObjectData } from "../GameObject";
import { Item } from "../Item";
import {
  addObjectItem,
  EquipableObject,
  EquipableObjectData,
  hasObjectItem,
  initializeEquipableObject,
  isEquipableObject,
  isEquipableObjectData,
  tradeObjectItems,
} from "./EquipableObject";

describe("isEquipableObjectData", () => {
  it("should return true when equipable object data", () => {
    const objectData: EquipableObjectData = {
      equipable: true,
      id: "dataId",
    };

    const result = isEquipableObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not equipable object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isEquipableObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeEquipableObject", () => {
  it("should initialize items", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeEquipableObject(object);

    const expected: EquipableObject = {
      ...object,
      items: [],
    };

    expect(result).toEqual(expected);
  });
});

describe("isEquipableObject", () => {
  it("should return true when equipable object", () => {
    const object: EquipableObject = {
      dataId: "dataId",
      id: "id",
      items: [],
    };

    const result = isEquipableObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not equipable object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isEquipableObject(object);

    expect(result).toBe(false);
  });
});

describe("addObjectItem", () => {
  it("should add item to inventory", () => {
    const item: Item = {
      data: "dataId",
      id: "id",
    };

    const object: EquipableObject = {
      dataId: "dataId",
      id: "id",
      items: [],
    };

    const result = addObjectItem(object, item);

    const expected: EquipableObject = {
      ...object,
      items: [
        item,
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("hasObjectItem", () => {
  it("should return true when item is in inventory", () => {
    const item: Item = {
      data: {},
      id: "item",
    };

    const object: EquipableObject = {
      dataId: "dataId",
      id: "id",
      items: [
        item,
      ],
    };

    const result = hasObjectItem(object, "item");

    expect(result).toBe(true);
  });

  it("should return false when item not in inventory", () => {
    const object: EquipableObject = {
      dataId: "dataId",
      id: "id",
      items: [],
    };

    const result = hasObjectItem(object, "item");

    expect(result).toBe(false);
  });
});

describe("tradeObjectItems", () => {
  it("should trade items between objects", () => {
    const item: Item = {
      data: {},
      id: "item",
    };

    const object: EquipableObject = {
      dataId: "dataId",
      id: "id",
      items: [
        item,
      ],
    };

    const withObject: EquipableObject = {
      dataId: "dataId",
      id: "otherId",
      items: [],
    };

    const [objectResult, withObjectResult] = tradeObjectItems(object, 0, withObject, 0);

    const expectedObject: EquipableObject = {
      ...object,
      items: [
        undefined,
      ],
    };

    const expectedWithObject: EquipableObject = {
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

    const object: EquipableObject = {
      dataId: "dataId",
      id: "id",
      items: [
        item,
        withItem,
      ],
    };

    const [objectResult] = tradeObjectItems(object, 0, object, 1);

    const expected: EquipableObject = {
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
