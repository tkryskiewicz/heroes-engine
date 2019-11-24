import { MapObjectOrientation } from "heroes-core";

import { HeroMapObject, MapObjectId } from "../map";
import { getHeroMapObjectDetails, HeroMapObjectDetails, setHeroMapObjectDetails } from "./HeroMapObjectDetails";

describe("getHeroMapObjectDetails", () => {
  it("should return object details", () => {
    const object: HeroMapObject = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      dataId: MapObjectId.Hero,
      experience: 1,
      heroClass: "heroClass",
      heroId: "heroId",
      id: "id",
      items: [
      {
          data: {},
          id: "artifact",
        },
      ],
      luck: 0,
      mobility: 0,
      morale: 0,
      orientation: MapObjectOrientation.North,
      owner: "player",
      skills: {},
    };

    // const object = initializeHeroMapObject(createMapObject("id", objectData), objectData);

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
      dataId: MapObjectId.Hero,
      experience: 0,
      heroClass: "heroClass",
      heroId: "heroId",
      id: "id",
      items: [],
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
      experience: 1,
      heroClass: "otherHeroClass",
      heroId: "otherHeroId",
      id: "id",
      items: [
        {
          data: {},
          id: "artifact",
        },
        undefined,
      ],
      owner: "otherPlayer",
    };

    expect(result).toEqual(expected);
  });
});
