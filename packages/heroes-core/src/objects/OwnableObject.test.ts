import { GameObject, GameObjectData } from "../GameObject";
import {
  changeObjectOwner,
  initializeOwnableObject,
  isObjectOwnedBy,
  isOwnableObject,
  isOwnableObjectData,
  OwnableObject,
  OwnableObjectData,
} from "./OwnableObject";

describe("isOwnableObjectData", () => {
  it("should return true when ownable map object data", () => {
    const objectData: OwnableObjectData = {
      id: "dataId",
      ownable: true,
    };

    const result = isOwnableObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isOwnableObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeOwnableObject", () => {
  it("should initialize owner", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeOwnableObject(object);

    const expected: OwnableObject = {
      ...object,
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });
});

describe("isOwnableObject", () => {
  it("should return true when ownable map object", () => {
    const object: OwnableObject = {
      dataId: "dataId",
      id: "id",
      owner: undefined,
    };

    const result = isOwnableObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isOwnableObject(object);

    expect(result).toBe(false);
  });
});

describe("isObjectOwnedBy", () => {
  it("should return true when owner", () => {
    const object: OwnableObject = {
      dataId: "dataId",
      id: "id",
      owner: "owner",
    };

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(true);
  });

  it("should return false when not owner", () => {
    const object: OwnableObject = {
      dataId: "dataId",
      id: "id",
      owner: undefined,
    };

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(false);
  });
});

describe("changeObjectOwner", () => {
  it("should set owner", () => {
    const object: OwnableObject = {
      dataId: "dataId",
      id: "id",
      owner: undefined,
    };

    const result = changeObjectOwner(object, "player");

    const expected: OwnableObject = {
      ...object,
      owner: "player",
    };

    expect(result).toEqual(expected);
  });

  it("should clear owner", () => {
    const object: OwnableObject = {
      dataId: "dataId",
      id: "id",
      owner: "player",
    };

    const result = changeObjectOwner(object, undefined);

    const expected: OwnableObject = {
      ...object,
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });
});
