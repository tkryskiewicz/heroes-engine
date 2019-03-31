import { buildStructure, Structure } from "./Structure";
import { buildTownStructure, endTownTurn, getTownStructure, isStructureBuilt, recruitTownTroop, Town } from "./Town";

describe("getTownStructure", () => {
  it("should return structure", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [
        structure,
      ],
    };

    const result = getTownStructure(town, "structure");

    expect(result).toEqual(structure);
  });

  it("should return undefined when no structure", () => {
    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    const result = getTownStructure(town, "structure");

    expect(result).toBeUndefined();
  });
});

describe("isStructureBuilt", () => {
  it("should return true when structure is built", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [
        buildStructure(structure),
      ],
    };

    const result = isStructureBuilt(town, "structure");

    expect(result).toBe(true);
  });

  it("should return false when structure is not built", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [
        structure,
      ],
    };

    const result = isStructureBuilt(town, "structure");

    expect(result).toBe(false);
  });

  it("should return false when no structure", () => {
    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    const result = isStructureBuilt(town, "structure");

    expect(result).toBe(false);
  });
});

describe("buildTownStructure", () => {
  it("should build structure", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const otherStructure: Structure = {
      cost: {},
      data: {},
      id: "otherStructure",
      isBuilt: false,
    };

    const town: Town = {
      canConstructStructures: true,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [
        structure,
        otherStructure,
      ],
    };

    const result = buildTownStructure(town, "structure");

    expect(isStructureBuilt(result, "structure")).toBe(true);
  });

  it("should throw when can't build structures", () => {
    const structure: Structure = {
      cost: {},
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [
        structure,
      ],
    };

    expect(() => {
      buildTownStructure(town, "structure");
    }).toThrow();
  });

  it("should throw when no structure", () => {
    const town: Town = {
      canConstructStructures: true,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    expect(() => {
      buildTownStructure(town, "structure");
    }).toThrow();
  });
});

describe("recruitTownTroop", () => {
  it("should recruit troop", () => {
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
      isBuilt: true,
    };

    const otherStructure: Structure = {
      cost: {},
      data: {},
      id: "otherStructure",
      isBuilt: false,
    };

    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [
        structure,
        otherStructure,
      ],
    };

    const result = recruitTownTroop(town, "structure", 1);

    const expected: Town = {
      ...town,
      garrison: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      structures: [
        {
          cost: {},
          data: {},
          dwelling: {
            availableCount: 0,
            cost: {},
            creature: "creature",
            growth: 0,
          },
          id: "structure",
          isBuilt: true,
        },
        otherStructure,
      ],
    };

    expect(result).toEqual(expected);
  });

  it("should throw when no structure", () => {
    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    expect(() => {
      recruitTownTroop(town, "structure", 1);
    }).toThrow();
  });
});

describe("endTownTurn", () => {
  it("should allow building structures", () => {
    const town: Town = {
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    const result = endTownTurn(town);

    const expected: Town = {
      canConstructStructures: true,
      garrison: [],
      heroClass: "heroClass",
      id: "id",
      name: "Name",
      structures: [],
    };

    expect(result).toEqual(expected);
  });
});
