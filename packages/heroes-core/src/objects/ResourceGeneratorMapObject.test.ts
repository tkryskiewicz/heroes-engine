import { GameObject, GameObjectData } from "../GameObject";
import { Resources } from "../Resource";
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
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isResourceGeneratorMapObjectData(objectData);

    expect(result).toEqual(false);
  });
});

describe("initializeResourceGeneratorMapObject", () => {
  it("should initialize object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

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
