import { GameObjectData } from "../GameObject";
import { Resources } from "../Resource";
import {
  generateObjectResources,
  isResourceGeneratorObjectData,
  ResourceGeneratorObjectData,
} from "./ResourceGeneratorObject";

describe("isResourceGeneratorObjectData", () => {
  it("should return true when resource generator object data", () => {
    const objectData: ResourceGeneratorObjectData = {
      id: "dataId",
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = isResourceGeneratorObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not resource generator object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isResourceGeneratorObjectData(objectData);

    expect(result).toEqual(false);
  });
});

describe("generateObjectResources", () => {
  it("should generate resources", () => {
    const objectData: ResourceGeneratorObjectData = {
      id: "dataId",
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const result = generateObjectResources(objectData);

    const expected: Resources = {
      resource: 1,
    };

    expect(result).toEqual(expected);
  });
});
