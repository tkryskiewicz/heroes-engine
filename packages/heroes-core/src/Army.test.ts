import { appendArmyTroop, Army, swapArmyTroops } from "./Army";
import { Troop } from "./Troop";

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
