import { GameObject, GameObjectData } from "../GameObject";
import { Troop } from "../Troop";
import {
  DwellingObject,
  DwellingObjectData,
  initializeDwellingObject,
  isDwellingObject,
  isDwellingObjectData,
  recruitDwellingObjectCreatures,
} from "./DwellingObject";

describe("isDwellingObjectData", () => {
  it("should return true when object data is dwelling object data", () => {
    const objectData: DwellingObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "dataId",
    };

    const result = isDwellingObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when object data is not dwelling object data", () => {
    const objectData: GameObjectData = {
      id: "dataId",
    };

    const result = isDwellingObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeDwellingObject", () => {
  it("should initialize available count", () => {
    const objectData: DwellingObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "dataId",
    };

    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeDwellingObject(object, objectData);

    const expected: DwellingObject = {
      ...object,
      availableCount: 1,
    };

    expect(result).toEqual(expected);
  });
});

describe("isDwellingObject", () => {
  it("should return true when dwelling object", () => {
    const object: DwellingObject = {
      availableCount: 0,
      dataId: "dataId",
      id: "dataId",
    };

    const result = isDwellingObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not dwelling object", () => {
    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isDwellingObject(object);

    expect(result).toBe(false);
  });
});

describe("recruitDwellingObjectCreatures", () => {
  it("should set available count to zero", () => {
    const objectData: DwellingObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "dataId",
    };

    const object: DwellingObject = {
      availableCount: 1,
      dataId: "dataId",
      id: "id",
    };

    const [result] = recruitDwellingObjectCreatures(object, objectData);

    const expected: DwellingObject = {
      ...object,
      availableCount: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should return troop with count equal to available count", () => {
    const objectData: DwellingObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "dataId",
    };

    const object: DwellingObject = {
      availableCount: 1,
      dataId: "dataId",
      id: "id",
    };

    const [, result] = recruitDwellingObjectCreatures(object, objectData);

    const expected: Troop = {
      count: 1,
      creature: "creature",
    };

    expect(result).toEqual(expected);
  });
});
