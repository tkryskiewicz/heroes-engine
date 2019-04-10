import { Troop } from "../Troop";
import {
  appendArmedMapObjectTroop,
  ArmedMapObject,
  ArmedMapObjectData,
  dismissArmedMapObjectTroop,
  isArmedMapObject,
  isArmedMapObjectData,
  swapArmedMapObjectTroops,
} from "./ArmedMapObject";
import { MapObject, MapObjectData } from "./MapObject";

describe("isArmedMapObjectData", () => {
  it("should return true when armed object data", () => {
    const objectData: ArmedMapObjectData = {
      army: {
        preventMovingLastTroop: false,
      },
      id: "dataId",
    };

    const result = isArmedMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not armed object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isArmedMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("isArmedMapObject", () => {
  it("should return when armed object", () => {
    const object: ArmedMapObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const result = isArmedMapObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not armed object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isArmedMapObject(object);

    expect(result).toBe(false);
  });
});

describe("appendArmedMapObjectTroop", () => {
  it("should append troop to army", () => {
    const object: ArmedMapObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const result = appendArmedMapObjectTroop(object, troop);

    const expected: ArmedMapObject = {
      ...object,
      army: [
        troop,
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("dismissArmedMapObjectTroop", () => {
  it("should dismiss troop", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const object: ArmedMapObject = {
      army: [
        troop,
      ],
      dataId: "dataId",
      id: "id",
    };

    const result = dismissArmedMapObjectTroop(object, 0);

    const expected: ArmedMapObject = {
      ...object,
      army: [
        undefined,
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("swapArmedMapObjectTroops", () => {
  it("should swap troops", () => {
    const troop: Troop = {
      count: 1,
      creature: "creatureA",
    };

    const object: ArmedMapObject = {
      army: [
        troop,
      ],
      dataId: "dataId",
      id: "id",
    };

    const withTroop: Troop = {
      count: 1,
      creature: "creatureB",
    };

    const withObject: ArmedMapObject = {
      army: [
        withTroop,
      ],
      dataId: "dataId",
      id: "withId",
    };

    const [objectResult, withObjectResult] = swapArmedMapObjectTroops(object, 0, withObject, 0, {
      autoCombineTroops: true,
      preventMovingLastTroop: false,
    });

    const expectedObject: ArmedMapObject = {
      ...object,
      army: [
        withTroop,
      ],
    };

    const expectedWithObject: ArmedMapObject = {
      ...withObject,
      army: [
        troop,
      ],
    };

    expect(objectResult).toEqual(expectedObject);
    expect(withObjectResult).toEqual(expectedWithObject);
  });
});
