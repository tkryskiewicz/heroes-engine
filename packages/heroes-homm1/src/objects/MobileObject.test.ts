import { HeroClassData, MapObjectOrientation, MobileObject, TerrainData } from "heroes-core";

import { ObjectId } from "../ObjectId";
import { HeroObject } from "../objects";
import { getMovementCost } from "./MobileObject";

describe("getMovementCost", () => {
  const defaultTerrainData: TerrainData = {
    hasTransitions: false,
    id: "terrain",
  };

  const defaultHeroClassData: HeroClassData = {
    army: [],
    id: "heroClass",
    skills: {},
  };

  const defaultData: Parameters<typeof getMovementCost>[3] = {
    baseMovementCost: 0,
    heroClasses: {},
    terrains: {
      [defaultTerrainData.id]: defaultTerrainData,
    },
  };

  const defaultObject: MobileObject = {
      dataId: "",
      id: "",
      mobility: 0,
      orientation: MapObjectOrientation.North,
  };

  const defaultHeroObject: HeroObject = {
      army: [],
      dataId: ObjectId.Hero,
      experience: 0,
      heroClass: "",
      heroId: "",
      id: "",
      items: [],
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: "",
      skills: {},
  };

  it("should return base movement cost", () => {
    const data: Parameters<typeof getMovementCost>[3] = {
      ...defaultData,
      baseMovementCost: 1,
    };

    const result = getMovementCost(defaultObject, MapObjectOrientation.North, defaultTerrainData.id, data);

    expect(result).toBe(1);
  });

  it("should modify cost by terrain modifier", () => {
    const terrainData: TerrainData = {
      ...defaultTerrainData,
      movementCostModifier: {
        type: "add",
        value: 1,
      },
    };

    const data: Parameters<typeof getMovementCost>[3] = {
      ...defaultData,
      baseMovementCost: 1,
      terrains: {
        [terrainData.id]: terrainData,
      },
    };

    const result = getMovementCost(defaultObject, MapObjectOrientation.North, defaultTerrainData.id, data);

    expect(result).toBe(2);
  });

  it("should modify cost by diagonal modifier when diagonal movement", () => {
    const data: Parameters<typeof getMovementCost>[3] = {
      ...defaultData,
      baseMovementCost: 1,
      diagonalMovementCostModifier: {
        type: "add",
        value: 1,
      },
    };

    const result = getMovementCost(defaultObject, MapObjectOrientation.NorthEast, defaultTerrainData.id, data);

    expect(result).toBe(2);
  });

  it("should modify cost by hero class modifier when hero object", () => {
    const heroClassData: HeroClassData = {
      ...defaultHeroClassData,
      terrainMovementCostModifier: {
        type: "add",
        value: 1,
      },
    };

    const data: Parameters<typeof getMovementCost>[3] = {
      ...defaultData,
      baseMovementCost: 1,
      heroClasses: {
        [heroClassData.id]: heroClassData,
      },
    };

    const object: HeroObject = {
      ...defaultHeroObject,
      heroClass: heroClassData.id,
    };

    const result = getMovementCost(object, MapObjectOrientation.North, defaultTerrainData.id, data);

    expect(result).toBe(2);
  });

  it("should override terrain modifier with hero class modifier", () => {
    const terrainData: TerrainData = {
      ...defaultTerrainData,
      movementCostModifier: {
        type: "add",
        value: 1,
      },
    };

    const heroClassData: HeroClassData = {
      ...defaultHeroClassData,
      terrainMovementCostModifier: {
        type: "add",
        value: 2,
      },
    };

    const data: Parameters<typeof getMovementCost>[3] = {
      baseMovementCost: 1,
      heroClasses: {
        [heroClassData.id]: heroClassData,
      },
      terrains: {
        [terrainData.id]: terrainData,
      },
    };

    const object: HeroObject = {
      ...defaultHeroObject,
      heroClass: heroClassData.id,
    };

    const result = getMovementCost(object, MapObjectOrientation.North, terrainData.id, data);

    expect(result).toBe(3);
  });

  it("should not override terrain modifier when hero object and no hero class modifier", () => {
    const terrainData: TerrainData = {
      ...defaultTerrainData,
      movementCostModifier: {
        type: "add",
        value: 1,
      },
    };

    const heroClassData: HeroClassData = {
      ...defaultHeroClassData,
      terrainMovementCostModifier: undefined,
    };

    const data: Parameters<typeof getMovementCost>[3] = {
      baseMovementCost: 1,
      heroClasses: {
        [heroClassData.id]: heroClassData,
      },
      terrains: {
        [terrainData.id]: terrainData,
      },
    };

    const object: HeroObject = {
      ...defaultHeroObject,
      heroClass: defaultHeroClassData.id,
    };

    const result = getMovementCost(object, MapObjectOrientation.North, terrainData.id, data);

    expect(result).toBe(2);
  });
});
