import { Troop } from "../Troop";
import {
  createDwellingMapObject,
  DwellingMapObject,
  DwellingMapObjectData,
  isDwellingMapObject,
  isDwellingMapObjectData,
  recruitDwellingMapObjectCreatures,
} from "./DwellingMapObject";
import { MapObject, MapObjectData } from "./MapObject";

describe("isDwellingMapObjectData", () => {
  it("should return true when object data is dwelling object data", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "dataId",
    };

    const result = isDwellingMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when object data is not dwelling object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isDwellingMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("createDwellingMapObject", () => {
  it("should create object", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "dataId",
    };

    const result = createDwellingMapObject("id", objectData);

    const expected: DwellingMapObject = {
      availableCount: 1,
      dataId: "dataId",
      id: "id",
    };

    expect(result).toEqual(expected);
  });
});

describe("isDwellingMapObject", () => {
  it("should return true when dwelling map object", () => {
    const objectData: DwellingMapObjectData = {
      dwelling: {
        creature: "creature",
        initialCount: 1,
      },
      id: "dataId",
    };

    const object = createDwellingMapObject("id", objectData);

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
      id: "dataId",
    };

    const object = createDwellingMapObject("id", objectData);

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
      id: "dataId",
    };

    const object = createDwellingMapObject("id", objectData);

    const [, result] = recruitDwellingMapObjectCreatures(object, objectData);

    const expected: Troop = {
      count: 1,
      creature: "creature",
    };

    expect(result).toEqual(expected);
  });
});
