import { Troop } from "../Troop";
import {
  DwellingMapObject,
  DwellingMapObjectData,
  initializeDwellingMapObject,
  isDwellingMapObject,
  isDwellingMapObjectData,
  recruitDwellingMapObjectCreatures,
} from "./DwellingMapObject";
import { createMapObject, MapObject, MapObjectData } from "./MapObject";

describe("isDwellingMapObjectData", () => {
  it("should return true when object data is dwelling object data", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isDwellingMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when object data is not dwelling object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isDwellingMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeDwellingMapObject", () => {
  it("should initialize available count", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const object = createMapObject("id", objectData);

    const result = initializeDwellingMapObject(object, objectData);

    const expected: DwellingMapObject = {
      ...object,
      availableCount: 1,
    };

    expect(result).toEqual(expected);
  });
});

describe("isDwellingMapObject", () => {
  it("should return true when dwelling map object", () => {
    const object: DwellingMapObject = {
      availableCount: 0,
      dataId: "dataId",
      id: "dataId",
    };

    const result = isDwellingMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not dwelling map object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isDwellingMapObject(object);

    expect(result).toBe(false);
  });
});

describe("recruitDwellingMapObjectCreatures", () => {
  it("should set available count to zero", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const object = initializeDwellingMapObject(createMapObject("id", objectData), objectData);

    const [result] = recruitDwellingMapObjectCreatures(object, objectData);

    const expected: DwellingMapObject = {
      ...object,
      availableCount: 0,
    };

    expect(result).toEqual(expected);
  });

  it("should return troop with count equal to available count", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const object = initializeDwellingMapObject(createMapObject("id", objectData), objectData);

    const [, result] = recruitDwellingMapObjectCreatures(object, objectData);

    const expected: Troop = {
      count: 1,
      creature: "creature",
    };

    expect(result).toEqual(expected);
  });
});
