import { createMapObject, MapObject, MapObjectData } from "../map";
import { Troop } from "../Troop";
import {
  appendArmedObjectTroop,
  ArmedObject,
  ArmedObjectData,
  changeArmedObjectArmy,
  dismissArmedObjectTroop,
  getArmedObjectArmyMobility,
  initializeArmedObject,
  isArmedObject,
  isArmedObjectData,
  swapArmedObjectTroops,
} from "./ArmedObject";

describe("isArmedObjectData", () => {
  it("should return true when armed object data", () => {
    const objectData: ArmedObjectData = {
      army: {
        preventMovingLastTroop: false,
      },
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isArmedObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not armed object data", () => {
    const objectData: MapObjectData = {
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const result = isArmedObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("initializeArmedObject", () => {
  it("should initialize army", () => {
    const objectData: ArmedObjectData = {
      army: {
        preventMovingLastTroop: false,
      },
      grid: [],
      height: 1,
      id: "dataId",
      width: 1,
    };

    const object = createMapObject("id", objectData);

    const result = initializeArmedObject(object);

    const expected: ArmedObject = {
      ...object,
      army: [],
    };

    expect(result).toEqual(expected);
  });
});

describe("isArmedObject", () => {
  it("should return when armed object", () => {
    const object: ArmedObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const result = isArmedObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not armed object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isArmedObject(object);

    expect(result).toBe(false);
  });
});

describe("changeArmedObjectArmy", () => {
  it("should set army", () => {
    const object: ArmedObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const result = changeArmedObjectArmy(object, [
      {
        count: 1,
        creature: "creature",
      },
    ]);

    const expected: ArmedObject = {
      ...object,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("appendArmedObjectTroop", () => {
  it("should append troop to army", () => {
    const object: ArmedObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const result = appendArmedObjectTroop(object, troop);

    const expected: ArmedObject = {
      ...object,
      army: [
        troop,
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("dismissArmedObjectTroop", () => {
  it("should dismiss troop", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const object: ArmedObject = {
      army: [
        troop,
      ],
      dataId: "dataId",
      id: "id",
    };

    const result = dismissArmedObjectTroop(object, 0);

    const expected: ArmedObject = {
      ...object,
      army: [
        undefined,
      ],
    };

    expect(result).toEqual(expected);
  });
});

describe("swapArmedObjectTroops", () => {
  it("should swap troops", () => {
    const troop: Troop = {
      count: 1,
      creature: "creatureA",
    };

    const object: ArmedObject = {
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

    const withObject: ArmedObject = {
      army: [
        withTroop,
      ],
      dataId: "dataId",
      id: "withId",
    };

    const [objectResult, withObjectResult] = swapArmedObjectTroops(object, 0, withObject, 0, {
      autoCombineTroops: true,
      preventMovingLastTroop: false,
    });

    const expectedObject: ArmedObject = {
      ...object,
      army: [
        withTroop,
      ],
    };

    const expectedWithObject: ArmedObject = {
      ...withObject,
      army: [
        troop,
      ],
    };

    expect(objectResult).toEqual(expectedObject);
    expect(withObjectResult).toEqual(expectedWithObject);
  });
});

describe("getArmedObjectArmyMobility", () => {
  it("should return infinity when no army", () => {
    const data: Parameters<typeof getArmedObjectArmyMobility>[1] = {
      creatures: {},
    };

    const object: ArmedObject = {
      army: [],
      dataId: "dataId",
      id: "id",
    };

    const result = getArmedObjectArmyMobility(object, data);

    expect(result).toBe(Infinity);
  });

  it("should return troop mobility when one troop", () => {
    const data: Parameters<typeof getArmedObjectArmyMobility>[1] = {
      creatures: {
        creatureA: {
          attack: 0,
          damage: {
            max: 0,
            min: 0,
          },
          defense: 0,
          hitPoints: 0,
          id: "creatureA",
          speed: 1,
        },
      },
    };

    const object: ArmedObject = {
      army: [
        {
          count: 1,
          creature: "creatureA",
        },
      ],
      dataId: "dataId",
      id: "id",
    };

    const result = getArmedObjectArmyMobility(object, data);

    expect(result).toBe(1);
  });

  it("should return slowest troop mobility", () => {
    const data: Parameters<typeof getArmedObjectArmyMobility>[1] = {
      creatures: {
        creatureA: {
          attack: 0,
          damage: {
            max: 0,
            min: 0,
          },
          defense: 0,
          hitPoints: 0,
          id: "creatureA",
          speed: 2,
        },
        creatureB: {
          attack: 0,
          damage: {
            max: 0,
            min: 0,
          },
          defense: 0,
          hitPoints: 0,
          id: "creatureA",
          speed: 1,
        },
      },
    };

    const object: ArmedObject = {
      army: [
        {
          count: 1,
          creature: "creatureA",
        },
        {
          count: 1,
          creature: "creatureB",
        },
      ],
      dataId: "dataId",
      id: "id",
    };

    const result = getArmedObjectArmyMobility(object, data);

    expect(result).toBe(1);
  });
});
