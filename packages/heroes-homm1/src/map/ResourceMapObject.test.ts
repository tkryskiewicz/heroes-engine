import {
  isResourceMapObject,
  isResourceMapObjectData,
  ResourceMapObject,
  ResourceMapObjectData,
} from "./ResourceMapObject";

describe("isResourceMapObjectData", () => {
  it("should return true when resource object", () => {
    const objectData: ResourceMapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      pickable: true,
      treasure: {},
      width: 1,
    };

    const data: Parameters<typeof isResourceMapObjectData>[1] = {
      resources: {
        [objectData.id]: {
          id: objectData.id,
          mine: "mine",
        },
      },
    };

    const result = isResourceMapObjectData(objectData, data);

    expect(result).toBe(true);
  });
});

describe("isResourceMapObject", () => {
  it("should return true when there is a resource with same id", () => {
    const object: ResourceMapObject = {
      dataId: "resource",
      id: "id",
      treasure: {},
    };

    const data: Parameters<typeof isResourceMapObject>[1] = {
      resources: {
        resource: {
          id: "resource",
          mine: "mine",
        },
      },
    };

    const result = isResourceMapObject(object, data);

    expect(result).toBe(true);
  });
});
