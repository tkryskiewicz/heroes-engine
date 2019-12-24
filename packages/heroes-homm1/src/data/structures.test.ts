import { Resources, Structure, StructureData } from "heroes-core";

import { CastleOptionStatus } from "../CastleOptionStatus";
import { FarmStructureId, StructureId } from "./StructureId";
import { constructStructure, getCastleOptionStatus, isCommonStructure } from "./structures";

describe("constructStructure", () => {
  it("should construct structure", () => {
    const structureType: StructureData = {
      cost: {
        resource: 200,
      },
      id: "structure",
    };

    const result = constructStructure(structureType);

    const expected: Structure = {
      cost: {
        resource: 200,
      },
      data: {},
      id: "structure",
      isBuilt: false,
    };

    expect(result).toEqual(expected);
  });

  it("should construct a dwelling structure", () => {
    const structureType: StructureData = {
      cost: {
        resource: 200,
      },
      dwelling: {
        cost: {
          resource: 100,
        },
        creature: "creature",
        growth: 2,
      },
      id: "structure",
    };

    const result = constructStructure(structureType);

    const expected: Structure = {
      cost: {
        resource: 200,
      },
      data: {},
      dwelling: {
        availableCount: 0,
        cost: {
          resource: 100,
        },
        creature: "creature",
        growth: 2,
      },
      id: "structure",
      isBuilt: false,
    };

    expect(result).toEqual(expected);
  });
});

describe("getCastleOptionStatus", () => {
  it("should return available", () => {
    const structure: Structure = {
      cost: {
        resource: 200,
      },
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const resources: Resources = {
      resource: 200,
    };

    const result = getCastleOptionStatus(structure, true, resources);

    expect(result).toBe(CastleOptionStatus.Available);
  });

  it("should return built when structure is built", () => {
    const structure: Structure = {
      cost: {
        resource: 200,
      },
      data: {},
      id: "structure",
      isBuilt: true,
    };

    const resources: Resources = {
      resource: 200,
    };

    const result = getCastleOptionStatus(structure, true, resources);

    expect(result).toBe(CastleOptionStatus.Built);
  });

  it("should return unavailable when cannot build structures", () => {
    const structure: Structure = {
      cost: {
        resource: 200,
      },
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const resources: Resources = {
      resource: 200,
    };

    const result = getCastleOptionStatus(structure, false, resources);

    expect(result).toBe(CastleOptionStatus.Unavailable);
  });

  it("should return unaffordable when not enough resources", () => {
    const structure: Structure = {
      cost: {
        resource: 200,
      },
      data: {},
      id: "structure",
      isBuilt: false,
    };

    const resources: Resources = {
      resource: 199,
    };

    const result = getCastleOptionStatus(structure, true, resources);

    expect(result).toBe(CastleOptionStatus.Unaffordable);
  });
});

describe("isCommonStructure", () => {
  it("should return true when mage guild", () => {
    const result = isCommonStructure(StructureId.MageGuild);

    expect(result).toBe(true);
  });

  it("should return false when castle", () => {
    const result = isCommonStructure(StructureId.Castle);

    expect(result).toBe(false);
  });

  it("should return false when not a common structure", () => {
    const result = isCommonStructure(FarmStructureId.ThatchedHut);

    expect(result).toBe(false);
  });
});
