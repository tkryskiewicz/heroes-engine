import {
  isResourceObject,
  isResourceObjectData,
  ResourceObject,
  ResourceObjectData,
} from "./ResourceObject";

describe("isResourceObjectData", () => {
  it("should return true when resource object", () => {
    const objectData: ResourceObjectData = {
      id: "dataId",
      pickable: true,
      treasure: {},
    };

    const data: Parameters<typeof isResourceObjectData>[1] = {
      resources: {
        [objectData.id]: {
          id: objectData.id,
          mine: "mine",
        },
      },
    };

    const result = isResourceObjectData(objectData, data);

    expect(result).toBe(true);
  });
});

describe("isResourceObject", () => {
  it("should return true when there is a resource with same id", () => {
    const object: ResourceObject = {
      dataId: "resource",
      id: "id",
      treasure: {},
    };

    const data: Parameters<typeof isResourceObject>[1] = {
      resources: {
        resource: {
          id: "resource",
          mine: "mine",
        },
      },
    };

    const result = isResourceObject(object, data);

    expect(result).toBe(true);
  });
});
