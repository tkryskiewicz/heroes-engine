import { MapObjectData } from "./MapObject";
import { createMineMapObject, isMineMapObjectData, MineMapObject, MineMapObjectData } from "./MineMapObject";

describe("isMineMapObjectData", () => {
  it("should return true when mine map object data", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const result = isMineMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not mine map object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isMineMapObjectData(objectData);

    expect(result).toEqual(false);
  });
});

describe("createMineMapObject", () => {
  it("should create mine map object", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const result = createMineMapObject(objectData);

    const expected: MineMapObject = {
      id: "id",
    };

    expect(result).toEqual(expected);
  });

  it("should create mine map object with initial owner", () => {
    const objectData: MineMapObjectData = {
      id: "id",
      mine: {
        amount: 1,
        resource: "resource",
      },
      ownable: true,
    };

    const result = createMineMapObject(objectData, "owner");

    const expected: MineMapObject = {
      id: "id",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});
