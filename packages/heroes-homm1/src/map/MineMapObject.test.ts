import { isMineMapObject, isMineMapObjectData, MineMapObject, MineMapObjectData } from "./MineMapObject";

describe("isMineMapObjectData", () => {
  it("should return true when a mine for a resource", () => {
    const objectData: MineMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
      width: 1,
    };

    const data: Parameters<typeof isMineMapObjectData>[1] = {
      resources: {
        resource: {
          id: "resource",
          mine: "dataId",
        },
      },
    };

    const result = isMineMapObjectData(objectData, data);

    expect(result).toBe(true);
  });
});

describe("isMineMapObject", () => {
  it("should return true when a mine for a resource", () => {
    const object: MineMapObject = {
      dataId: "dataId",
      id: "id",
    };

    const data: Parameters<typeof isMineMapObject>[1] = {
      resources: {
        resource: {
          id: "resource",
          mine: "dataId",
        },
      },
    };

    const result = isMineMapObject(object, data);

    expect(result).toBe(true);
  });
});
