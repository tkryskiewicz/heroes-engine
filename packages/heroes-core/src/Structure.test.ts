import { buildStructure, getTroop, isDwellingStructure, recruitTroop, Structure } from "./Structure";
import { Troop } from "./Troop";

describe("buildStructure", () => {
  it("should build structure", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const result = buildStructure(structure);

    expect(result.isBuilt).toBe(true);
  });

  it("should set creature availablity to growth when structure is a dwelling", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 0,
        cost: {},
        creature: "creature",
        growth: 1,
      },
      id: "structure",
      isBuilt: false,
    };

    const result = buildStructure(structure);

    expect(result.dwelling!.availableCount).toBe(1);
  });
});

describe("getTroop", () => {
  it("should return troop", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 1,
        cost: {},
        creature: "creature",
        growth: 0,
      },
      id: "structure",
      isBuilt: false,
    };

    const result = getTroop(structure, 1);

    const expected: Troop = {
      count: 1,
      creature: "creature",
    };

    expect(result).toEqual(expected);
  });

  it("should throw when structure is not a dwelling", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    expect(() => getTroop(structure, 1)).toThrowError();
  });

  it("should throw when count is negative", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 1,
        cost: {},
        creature: "creature",
        growth: 0,
      },
      id: "structure",
      isBuilt: false,
    };

    expect(() => getTroop(structure, -1)).toThrowError();
  });

  it("should throw when count is less than available count", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 0,
        cost: {},
        creature: "creature",
        growth: 0,
      },
      id: "structure",
      isBuilt: false,
    };

    expect(() => getTroop(structure, 1)).toThrowError();
  });
});

describe("isDwellingStructure", () => {
  it("should return true when dwelling structure", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 0,
        cost: {},
        creature: "creature",
        growth: 1,
      },
      id: "id",
      isBuilt: false,
    };

    const result = isDwellingStructure(structure);

    expect(result).toBe(true);
  });

  it("should return false when not a dwelling structure", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "id",
      isBuilt: false,
    };

    const result = isDwellingStructure(structure);

    expect(result).toBe(false);
  });
});

describe("recruitTroop", () => {
  it("should reduce available count", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 1,
        cost: {},
        creature: "creature",
        growth: 0,
      },
      id: "structure",
      isBuilt: false,
    };

    const result = recruitTroop(structure, 1);

    expect(result.dwelling!.availableCount).toBe(0);
  });

  it("should throw when structure is not a dwelling", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    expect(() => recruitTroop(structure, 1)).toThrowError();
  });

  it("should throw when count is negative", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 1,
        cost: {},
        creature: "creature",
        growth: 0,
      },
      id: "structure",
      isBuilt: false,
    };

    expect(() => recruitTroop(structure, -1)).toThrowError();
  });

  it("should throw when count is less than available count", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      dwelling: {
        availableCount: 0,
        cost: {},
        creature: "creature",
        growth: 0,
      },
      id: "structure",
      isBuilt: false,
    };

    expect(() => recruitTroop(structure, 1)).toThrowError();
  });
});
