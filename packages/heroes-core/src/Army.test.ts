import { appendArmyTroop, Army, dismissArmyTroop, getArmySize, swapArmyTroops } from "./Army";
import { Troop } from "./Troop";

describe("getArmySize", () => {
  it("should return 0 when army is empty", () => {
    const army: Army = [];

    const result = getArmySize(army);

    expect(result).toBe(0);
  });

  it("should return 1 when only one troop", () => {
    const army: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    const result = getArmySize(army);

    expect(result).toBe(1);
  });

  it("should handle empty slots", () => {
    const army: Army = [
      {
        count: 1,
        creature: "creatureA",
      },
      undefined,
      {
        count: 1,
        creature: "creatureB",
      },
    ];

    const result = getArmySize(army);

    expect(result).toBe(2);
  });
});

describe("appendArmyTroop", () => {
  it("should set as first troop when empty", () => {
    const army: Army = [];

    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const result = appendArmyTroop(army, troop);

    const expected: Army = [
      troop,
    ];

    expect(result).toEqual(expected);
  });

  it("should set to next free slot when not empty", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creatureA",
    };

    const army: Army = [
      troopA,
    ];

    const troop: Troop = {
      count: 1,
      creature: "creatureB",
    };

    const result = appendArmyTroop(army, troop);

    const expected: Army = [
      troopA,
      troop,
    ];

    expect(result).toEqual(expected);
  });

  it("should stack same creatures", () => {
    const army: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const result = appendArmyTroop(army, troop);

    const expected: Army = [
      {
        count: 2,
        creature: "creature",
      },
    ];

    expect(result).toEqual(expected);
  });

  it("should insert into free slot", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creatureA",
    };

    const troopB: Troop = {
      count: 1,
      creature: "creatureB",
    };

    const army: Army = [
      troopA,
      undefined,
      troopB,
    ];

    const troop: Troop = {
      count: 1,
      creature: "creatureC",
    };

    const result = appendArmyTroop(army, troop);

    const expected: Army = [
      troopA,
      troop,
      troopB,
    ];

    expect(result).toEqual(expected);
  });
});

describe("swapArmyTroops", () => {
  it("should swap empty slots", () => {
    const army: Army = [];

    const result = swapArmyTroops(army, 0, 1);

    const expected: Army = [
      undefined,
      undefined,
    ];

    expect(result).toEqual(expected);
  });

  it("should swap troop with empty slot", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troop,
    ];

    const result = swapArmyTroops(army, 0, 1);

    const expected: Army = [
      undefined,
      troop,
    ];

    expect(result).toEqual(expected);
  });

  it("should swap troops", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creatureA",
    };

    const troopB: Troop = {
      count: 1,
      creature: "creatureB",
    };

    const army: Army = [
      troopA,
      troopB,
    ];

    const result = swapArmyTroops(army, 0, 1);

    const expected: Army = [
      troopB,
      troopA,
    ];

    expect(result).toEqual(expected);
  });
});

describe("dismissArmyTroop", () => {
  it("should dismiss troop", () => {
    const army: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    const result = dismissArmyTroop(army, 0);

    const expected = [
      undefined,
    ];

    expect(result).toEqual(expected);
  });
});
