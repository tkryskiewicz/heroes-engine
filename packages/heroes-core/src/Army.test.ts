import { appendArmyTroop, Army, dismissArmyTroop, getArmySize, setArmyTroop, swapArmyTroops } from "./Army";
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

describe("setArmyTroop", () => {
  it("should set troop at given index", () => {
    const army: Army = [];

    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const [result] = setArmyTroop(army, 0, troop, false);

    expect(result[0]).toBe(troop);
  });

  it("should clear troop at given index", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troop,
    ];

    const [result] = setArmyTroop(army, 0, undefined, false);

    expect(result[0]).toBeUndefined();
  });

  it("should replace troop at given index", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creatureA",
    };

    const army: Army = [
      troopA,
    ];

    const troopB: Troop = {
      count: 1,
      creature: "creatureB",
    };

    const [result] = setArmyTroop(army, 0, troopB, false);

    expect(result[0]).toBe(troopB);
  });

  it("should not combine troops of same creatures when setting at different index", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troopA,
    ];

    const troopB: Troop = {
      count: 1,
      creature: "creature",
    };

    const [result] = setArmyTroop(army, 1, troopB, false);

    expect(result[1]).toBe(troopB);
  });

  it("should combine troops of same creatures when setting at same index", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troopA,
    ];

    const troopB: Troop = {
      count: 1,
      creature: "creature",
    };

    const [result] = setArmyTroop(army, 0, troopB, true);

    const expected: Troop = {
      count: 2,
      creature: "creature",
    };

    expect(result[0]).toEqual(expected);
  });

  it("should combine troops of same creatures when auto-combining and setting different index", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troopA,
    ];

    const troopB: Troop = {
      count: 1,
      creature: "creature",
    };

    const [result] = setArmyTroop(army, 1, troopB, true);

    const expected: Troop = {
      count: 2,
      creature: "creature",
    };

    expect(result[0]).toEqual(expected);
  });

  it("should combine troops of same creatures when auto-combining and setting same index", () => {
    const troopA: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troopA,
    ];

    const troopB: Troop = {
      count: 1,
      creature: "creature",
    };

    const [result] = setArmyTroop(army, 0, troopB, true);

    const expected: Troop = {
      count: 2,
      creature: "creature",
    };

    expect(result[0]).toEqual(expected);
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

describe("swapArmyTroops", () => {
  it("should throw when not moving a troop", () => {
    const army: Army = [];

    expect(() => {
      swapArmyTroops(army, 0, army, 1);
    }).toThrow();
  });

  it("should move troop inside an army", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troop,
    ];

    const [armyResult, withArmyResult] = swapArmyTroops(army, 0, army, 1);

    expect(armyResult).toBe(withArmyResult);
    expect(armyResult[0]).toBeUndefined();
    expect(armyResult[1]).toEqual(troop);
  });

  it("should swap troops inside an army", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const withTroop: Troop = {
      count: 1,
      creature: "withCreature",
    };

    const army: Army = [
      troop,
      withTroop,
    ];

    const [armyResult, withArmyResult] = swapArmyTroops(army, 0, army, 1);

    expect(armyResult).toBe(withArmyResult);
    expect(armyResult[0]).toEqual(withTroop);
    expect(armyResult[1]).toEqual(troop);
  });

  it("should combine troops inside an army", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const withTroop: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troop,
      withTroop,
    ];

    const [armyResult] = swapArmyTroops(army, 0, army, 1);

    const expected: Troop = {
      count: 2,
      creature: "creature",
    };

    expect(armyResult[0]).toBeUndefined();
    expect(armyResult[1]).toEqual(expected);
  });

  it("should move troop between armies", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troop,
    ];

    const withArmy: Army = [];

    const [armyResult, withArmyResult] = swapArmyTroops(army, 0, withArmy, 0);

    expect(armyResult[0]).toBeUndefined();
    expect(withArmyResult[0]).toEqual(troop);
  });

  it("should swap troops between armies", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troop,
    ];

    const withTroop: Troop = {
      count: 1,
      creature: "withCreature",
    };

    const withArmy: Army = [
      withTroop,
    ];

    const [armyResult, withArmyResult] = swapArmyTroops(army, 0, withArmy, 0);

    expect(armyResult[0]).toEqual(withTroop);
    expect(withArmyResult[0]).toEqual(troop);
  });

  it("should combine troops between armies", () => {
    const troop: Troop = {
      count: 1,
      creature: "creature",
    };

    const army: Army = [
      troop,
    ];

    const withTroop: Troop = {
      count: 1,
      creature: "creature",
    };

    const withArmy: Army = [
      withTroop,
    ];

    const [armyResult, withArmyResult] = swapArmyTroops(army, 0, withArmy, 0);

    const expected: Troop = {
      count: 2,
      creature: "creature",
    };

    expect(armyResult[0]).toBeUndefined();
    expect(withArmyResult[0]).toEqual(expected);
  });

  describe("preventMovingLastTroop", () => {
    it("should throw when moving last troop between armies", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
      ];

      const withArmy: Army = [];

      expect(() => {
        swapArmyTroops(army, 0, withArmy, 0, { preventMovingLastTroop: true });
      }).toThrow();
    });

    it("should move last troop inside an army", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
      ];

      const [armyResult] = swapArmyTroops(army, 0, army, 1, { preventMovingLastTroop: true });

      expect(armyResult[0]).toBeUndefined();
      expect(armyResult[1]).toEqual(troop);
    });

    it("should swap last troop between armies", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
      ];

      const withTroop: Troop = {
        count: 1,
        creature: "withCreature",
      };

      const withArmy: Army = [
        withTroop,
      ];

      const [armyResult, withArmyResult] = swapArmyTroops(army, 0, withArmy, 0, { preventMovingLastTroop: true });

      expect(armyResult[0]).toEqual(withTroop);
      expect(withArmyResult[0]).toEqual(troop);
    });
  });

  describe("autoCombineTroops", () => {
    it("should auto-combine troops inside an army", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const combineTroop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
        combineTroop,
      ];

      const [armyResult] = swapArmyTroops(army, 0, army, 2, { autoCombineTroops: true });

      const expected: Troop = {
        count: 2,
        creature: "creature",
      };

      expect(armyResult[0]).toBeUndefined();
      expect(armyResult[1]).toEqual(expected);
    });

    it("should combine troop with target troop inside an army", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const withTroop: Troop = {
        count: 1,
        creature: "creature",
      };

      const combineTroop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
        withTroop,
        combineTroop,
      ];

      const [armyResult] = swapArmyTroops(army, 0, army, 1, { autoCombineTroops: true });

      const expected: Troop = {
        count: 2,
        creature: "creature",
      };

      expect(armyResult[0]).toBeUndefined();
      expect(armyResult[1]).toEqual(expected);
      expect(armyResult[2]).toEqual(combineTroop);
    });

    it("should auto-combine troops between armies", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
      ];

      const withTroop: Troop = {
        count: 1,
        creature: "creature",
      };

      const withArmy: Army = [
        withTroop,
      ];

      const [armyResult, withArmyResult] = swapArmyTroops(army, 0, withArmy, 1, { autoCombineTroops: true });

      const expected: Troop = {
        count: 2,
        creature: "creature",
      };

      expect(armyResult[0]).toBeUndefined();
      expect(withArmyResult[1]).toBeUndefined();
      expect(withArmyResult[0]).toEqual(expected);
    });

    it("should combine troop with target troop between armies", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
      ];

      const withTroop: Troop = {
        count: 1,
        creature: "creature",
      };

      const combineTroop: Troop = {
        count: 1,
        creature: "creature",
      };

      const withArmy: Army = [
        withTroop,
        combineTroop,
      ];

      const [armyResult, withArmyResult] = swapArmyTroops(army, 0, withArmy, 0, { autoCombineTroops: true });

      const expected: Troop = {
        count: 2,
        creature: "creature",
      };

      expect(armyResult[0]).toBeUndefined();
      expect(withArmyResult[0]).toEqual(expected);
    });

    it("should throw when swapping last troop between armies", () => {
      const troop: Troop = {
        count: 1,
        creature: "creature",
      };

      const army: Army = [
        troop,
      ];

      const withTroop: Troop = {
        count: 1,
        creature: "withCreature",
      };

      const combineTroop: Troop = {
        count: 1,
        creature: "creature",
      };

      const withArmy: Army = [
        withTroop,
        combineTroop,
      ];

      expect(() => {
        swapArmyTroops(army, 0, withArmy, 0, {
          autoCombineTroops: true,
          preventMovingLastTroop: true,
        });
      }).toThrow();
    });
  });
});
