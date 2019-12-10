import { isMineObject, isMineObjectData, MineObject, MineObjectData } from "./MineObject";

describe("isMineObjectData", () => {
  it("should return true when a mine for a resource", () => {
    const objectData: MineObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const data: Parameters<typeof isMineObjectData>[1] = {
      resources: {
        resource: {
          id: "resource",
          mine: "dataId",
        },
      },
    };

    const result = isMineObjectData(objectData, data);

    expect(result).toBe(true);
  });
});

describe("isMineObject", () => {
  it("should return true when a mine for a resource", () => {
    const object: MineObject = {
      dataId: "dataId",
      id: "id",
      owner: undefined,
    };

    const data: Parameters<typeof isMineObject>[1] = {
      resources: {
        resource: {
          id: "resource",
          mine: "dataId",
        },
      },
    };

    const result = isMineObject(object, data);

    expect(result).toBe(true);
  });
});
