import { Hero, MapObjectOrientation } from "heroes-core";

import { createHeroMapObject, HeroMapObject, HeroMapObjectData, MapObjectId } from "../map";
import { getHeroMapObjectDetails, HeroMapObjectDetails, setHeroMapObjectDetails } from "./HeroMapObjectDetails";

describe("getHeroMapObjectDetails", () => {
  it("should return object details", () => {
    const objectData: HeroMapObjectData = {
      army: {
        preventMovingLastTroop: true,
      },
      grid: [],
      height: 1,
      id: MapObjectId.Hero,
      ownable: true,
      type: "type",
      width: 1,
    };

    const hero: Hero = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        {
          data: {},
          id: "artifact",
        },
        undefined,
      ],
      dataId: "dataId",
      experience: 1,
      heroClass: "heroClass",
      heroId: "heroId",
      id: "id",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const object = createHeroMapObject("id", objectData, hero, "player");

    const result = getHeroMapObjectDetails(object);

    const expected: HeroMapObjectDetails = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        "artifact",
        undefined,
      ],
      experience: 1,
      heroId: "heroId",
      owner: "player",
    };

    expect(result).toEqual(expected);
  });
});

describe("setHeroMapObjectDetails", () => {
  it("should set object details", () => {
    const object: HeroMapObject = {
      army: [],
      artifacts: [],
      dataId: MapObjectId.Hero,
      experience: 0,
      heroClass: "heroClass",
      heroId: "heroId",
      id: "id",
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: "player",
      skills: {},
    };

    const value: HeroMapObjectDetails = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        "artifact",
        undefined,
      ],
      experience: 1,
      heroId: "otherHeroId",
      owner: "otherPlayer",
    };

    const data: Parameters<typeof setHeroMapObjectDetails>[2] = {
      heroes: {
        otherHeroId: {
          heroClass: "otherHeroClass",
          id: "otherHeroId",
        },
      },
    };

    const result = setHeroMapObjectDetails(object, value, data);

    const expected: HeroMapObject = {
      ...object,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      artifacts: [
        {
          data: {},
          id: "artifact",
        },
        undefined,
      ],
      experience: 1,
      heroClass: "otherHeroClass",
      heroId: "otherHeroId",
      id: "id",
      owner: "otherPlayer",
    };

    expect(result).toEqual(expected);
  });
});
