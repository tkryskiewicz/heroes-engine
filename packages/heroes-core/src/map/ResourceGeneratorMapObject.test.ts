import { Resources } from "../Resource";
import { createMapObject, MapObjectData } from "./MapObject";
import {
  generateResourceGeneratorMapObjectResources,
  initializeResourceGeneratorMapObject,
  isResourceGeneratorMapObjectData,
  ResourceGeneratorMapObject,
  ResourceGeneratorMapObjectData,
} from "./ResourceGeneratorMapObject";

describe("isResourceGeneratorMapObjectData", () => {
  it("should return true when resource generator map object data", () => {
    const objectData: ResourceGeneratorMapObjectData = {
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

    const result = isResourceGeneratorMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not resource generator map object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isResourceGeneratorMapObjectData(objectData);

    expect(result).toEqual(false);
  });
});

describe("initializeResourceGeneratorMapObject", () => {
  it("should initialize object", () => {
    const objectData: ResourceGeneratorMapObjectData = {
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

    const object = createMapObject("id", objectData);

    const result = initializeResourceGeneratorMapObject(object);

    const expected: ResourceGeneratorMapObject = {
      dataId: "dataId",
      id: "id",
      owner: undefined,
    };

    expect(result).toEqual(expected);
  });
});

describe("generateResourceGeneratorMapObjectResources", () => {
  it("should generate resources", () => {
    const objectData: ResourceGeneratorMapObjectData = {
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

    const result = generateResourceGeneratorMapObjectResources(objectData);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });
});
