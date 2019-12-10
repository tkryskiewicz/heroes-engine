import {
  CreatureData,
  GameObject,
  HeroClassData,
  ItemData,
  MapObject,
  MapObjectData,
  MapObjectOrientation,
  MobilityModifierObjectData,
} from "heroes-core";

import { ObjectId } from "../ObjectId";
import {
  getInitialMobility,
  HeroObject,
  HeroObjectData,
  initializeHeroObject,
  isHeroObject,
  isHeroObjectData,
} from "./HeroObject";

describe("isHeroObjectData", () => {
  it("should return true when hero object data", () => {
    const objectData: HeroObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      baseMobility: 0,
      id: ObjectId.Hero,
      ownable: true,
    };

    const result = isHeroObjectData(objectData);

    expect(result).toBe(true);
  });
});

describe("initializeHeroObject", () => {
  it("should initialize object", () => {
    const objectData: HeroObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      baseMobility: 0,
      id: ObjectId.Hero,
      ownable: true,
    };

    const object: GameObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = initializeHeroObject(object, objectData);

    const expected: HeroObject = {
      ...object,
      army: [],
      dataId: ObjectId.Hero,
      experience: 0,
      heroClass: "",
      heroId: "",
      items: [],
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: undefined,
      skills: {},
    };

    expect(result).toEqual(expected);
  });
});

describe("isHeroObject", () => {
  it("should return true when hero object", () => {
    const object: HeroObject = {
      army: [],
      dataId: ObjectId.Hero,
      experience: 0,
      heroClass: "heroClass",
      heroId: "heroId",
      id: "id",
      items: [],
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: undefined,
      skills: {},
    };

    const result = isHeroObject(object);

    expect(result).toBe(true);
  });

  it("should return false when not hero object", () => {
    const object: MapObject = {
      dataId: "dataId",
      id: "id",
    };

    const result = isHeroObject(object);

    expect(result).toBe(false);
  });
});

describe("getInitialMobility", () => {
  const defaultCreatureData: CreatureData = {
    attack: 0,
    damage: {
      max: 0,
      min: 0,
    },
    defense: 0,
    hitPoints: 0,
    id: "creature",
    speed: 0,
  };

  const defaultMapObjectData: MapObjectData = {
    grid: [],
    height: 1,
    id: "mapObject",
    type: [],
    width: 1,
  };

  const defaultObjectData: HeroObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      baseMobility: 0,
      id: ObjectId.Hero,
      ownable: true,
  };

  const defaultHeroClassData: HeroClassData = {
      army: [],
      id: "heroClass",
      skills: {},
  };

  const defaultData: Parameters<typeof getInitialMobility>[4] = {
    creatures: {
      [defaultCreatureData.id]: defaultCreatureData,
    },
    heroClasses: {
      [defaultHeroClassData.id]: defaultHeroClassData,
    },
    items: {},
    mapObjects: {},
  };

  const defaultObject: HeroObject = {
      army: [],
      dataId: ObjectId.Hero,
      experience: 0,
      heroClass: defaultHeroClassData.id,
      heroId: "",
      id: "id",
      items: [],
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: "",
      skills: {},
  };

  it("should return base mobility when no army", () => {
    const objectData: HeroObjectData = {
      ...defaultObjectData,
      baseMobility: 1,
    };

    const object: HeroObject = {
      ...defaultObject,
      army: [],
    };

    const result = getInitialMobility(object, objectData, "terrain", [], defaultData);

    expect(result).toBe(1);
  });

  it("should return army mobility when lower than base mobility", () => {
    const creatureData: CreatureData = {
      ...defaultCreatureData,
      speed: 1,
    };

    const data: Parameters<typeof getInitialMobility>[4] = {
      ...defaultData,
      creatures: {
        [creatureData.id]: creatureData,
      },
    };

    const objectData: HeroObjectData = {
      ...defaultObjectData,
      baseMobility: 2,
    };

    const object: HeroObject = {
      ...defaultObject,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
    };

    const result = getInitialMobility(object, objectData, "terrain", [], data);

    expect(result).toBe(1);
  });

  it("should return base mobility when lower than army mobility", () => {
    const creatureData: CreatureData = {
      ...defaultCreatureData,
      speed: 2,
    };

    const data: Parameters<typeof getInitialMobility>[4] = {
      ...defaultData,
      creatures: {
        [creatureData.id]: creatureData,
      },
    };

    const objectData: HeroObjectData = {
      ...defaultObjectData,
      baseMobility: 1,
    };

    const object: HeroObject = {
      ...defaultObject,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
    };

    const result = getInitialMobility(object, objectData, "terrain", [], data);

    expect(result).toBe(1);
  });

  it("should override army mobility with hero class modifier", () => {
    const creatureData: CreatureData = {
      ...defaultCreatureData,
      speed: 1,
    };

    const objectData: HeroObjectData = {
      ...defaultObjectData,
      baseMobility: 2,
    };

    const heroClassData: HeroClassData = {
      ...defaultHeroClassData,
      terrainMobilityModifier: {
        type: "add",
        value: 1,
      },
    };

    const data: Parameters<typeof getInitialMobility>[4] = {
      ...defaultData,
      creatures: {
        [creatureData.id]: creatureData,
      },
      heroClasses: {
        [heroClassData.id]: heroClassData,
      },
    };

    const object: HeroObject = {
      ...defaultObject,
      army: [
        {
          count: 1,
          creature: creatureData.id,
        },
      ],
      heroClass: heroClassData.id,
    };

    const result = getInitialMobility(object, objectData, "terrain", [], data);

    expect(result).toBe(3);
  });

  it("should apply item modifiers", () => {
    const itemData: ItemData & MobilityModifierObjectData = {
      id: "item",
      isUltimate: false,
      mobilityModifier: {
        type: "add",
        value: 1,
      },
      tradable: false,
    };

    const data: Parameters<typeof getInitialMobility>[4] = {
      ...defaultData,
      items: {
        [itemData.id]: itemData,
      },
    };

    const objectData: HeroObjectData = {
      ...defaultObjectData,
      baseMobility: 1,
    };

    const object: HeroObject = {
      ...defaultObject,
      items: [
        {
          data: {},
          id: itemData.id,
        },
      ],
    };

    const result = getInitialMobility(object, objectData, "terrain", [], data);

    expect(result).toBe(2);
  });

  it("should apply owned object modifiers", () => {
    const mapObjectData: MapObjectData & MobilityModifierObjectData = {
      ...defaultMapObjectData,
      mobilityModifier: {
        type: "add",
        value: 1,
      },
    };

    const data: Parameters<typeof getInitialMobility>[4] = {
      ...defaultData,
      mapObjects: {
        [mapObjectData.id]: mapObjectData,
      },
    };

    const objectData: HeroObjectData = {
      ...defaultObjectData,
      baseMobility: 1,
    };

    const mapObject: MapObject = {
      dataId: mapObjectData.id,
      id: "mapObject",
    };

    const result = getInitialMobility(defaultObject, objectData, "terrain", [mapObject], data);

    expect(result).toBe(2);
  });
});
