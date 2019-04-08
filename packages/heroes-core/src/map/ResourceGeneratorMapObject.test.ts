import { Resources } from "../Resource";
import { MapObjectData } from "./MapObject";
import {
  createResourceGeneratorMapObject,
  generateResourceGeneratorMapObjectResources,
  isResourceGeneratorMapObjectData,
  ResourceGeneratorMapObject,
  ResourceGeneratorMapObjectData,
} from "./ResourceGeneratorMapObject";

describe("isResourceGeneratorMapObjectData", () => {
  it("should return true when resource generator map object data", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = isResourceGeneratorMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not resource generator map object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isResourceGeneratorMapObjectData(objectData);

    expect(result).toEqual(false);
  });
});

describe("createResourceGeneratorMapObject", () => {
  it("should create object", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = createResourceGeneratorMapObject("id", objectData);

    const expected: ResourceGeneratorMapObject = {
      dataId: "dataId",
      id: "id",
    };

    expect(result).toEqual(expected);
  });

  it("should create object with initial owner", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = createResourceGeneratorMapObject("id", objectData, "owner");

    const expected: ResourceGeneratorMapObject = {
      dataId: "dataId",
      id: "id",
      owner: "owner",
    };

    expect(result).toEqual(expected);
  });
});

describe("generateResourceGeneratorMapObjectResources", () => {
  it("should generate resources", () => {
    const objectData: ResourceGeneratorMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = generateResourceGeneratorMapObjectResources(objectData);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });
});
