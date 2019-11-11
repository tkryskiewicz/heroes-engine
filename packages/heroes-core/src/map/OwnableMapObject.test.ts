import { MapObject, MapObjectData } from "./MapObject";
import {
  changeOwnableMapObjectOwner,
  createOwnableMapObject,
  isObjectOwnedBy,
  isOwnableMapObject,
  isOwnableMapObjectData,
  OwnableMapObject,
  OwnableMapObjectData,
} from "./OwnableMapObject";

describe("isOwnableMapObjectData", () => {
  it("should return true when ownable map object data", () => {
    const objectData: OwnableMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      ownable: true,
      width: 1,
    };

    const result = isOwnableMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isOwnableMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createOwnableMapObject", () => {
  it("should create ownable map object", () => {
    const objectData: OwnableMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      ownable: true,
      width: 1,
    };

    const result = createOwnableMapObject("id", objectData);

    const expected: OwnableMapObject = {
      dataId: "dataId",
      id: "id",
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });

  it("should create with initial owner", () => {
    const objectData: OwnableMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      ownable: true,
      width: 1,
    };

    const result = createOwnableMapObject("id", objectData, "owner");

    const expected: OwnableMapObject = {
      dataId: "dataId",
      id: "id",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("isOwnableMapObject", () => {
  it("should return true when ownable map object", () => {
    const objectData: OwnableMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      ownable: true,
      width: 1,
    };

    const object = createOwnableMapObject("id", objectData);

    const result = isOwnableMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not ownable map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isOwnableMapObject(object);

    expect(result).toBe(false);
  });
});

describe("isObjectOwnedBy", () => {
  it("should return true when owner", () => {
    const objectData: OwnableMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      ownable: true,
      width: 1,
    };

    const object = createOwnableMapObject("id", objectData, "owner");

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(true);
  });

  it("should return false when not owner", () => {
    const objectData: OwnableMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      ownable: true,
      width: 1,
    };

    const object = createOwnableMapObject("id", objectData, "otherOwner");

    const result = isObjectOwnedBy(object, "owner");

    expect(result).toBe(false);
  });
});

describe("changeOwnableMapObjectOwner", () => {
  it("should set owner", () => {
    const object: OwnableMapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = changeOwnableMapObjectOwner(object, "player");

    const expected: OwnableMapObject = {
      ...object,
      owner: "player",
    };

    expect(result).toEqual(expected);
  });

  it("should clear owner", () => {
    const object: OwnableMapObject = {
      dataId: "dataId",
      id: "id",
      owner: "player",
    };

    const result = changeOwnableMapObjectOwner(object, undefined);

    const expected: OwnableMapObject = {
      ...object,
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });
});
