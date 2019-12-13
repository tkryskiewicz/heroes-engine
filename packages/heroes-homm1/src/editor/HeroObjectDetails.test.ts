import { Direction } from "heroes-core";

import { ObjectId } from "../ObjectId";
import { HeroObject } from "../objects";
import { getHeroObjectDetails, HeroObjectDetails, setHeroObjectDetails } from "./HeroObjectDetails";

describe("getHeroObjectDetails", () => {
  it("should return object details", () => {
    const object: HeroObject = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      dataId: ObjectId.Hero,
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
      orientation: Direction.North,
      owner: "player",
      skills: {},
    };

    const result = getHeroObjectDetails(object);

    const expected: HeroObjectDetails = {
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

describe("setHeroObjectDetails", () => {
  it("should set object details", () => {
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
      orientation: Direction.North,
      owner: "player",
      skills: {},
    };

    const value: HeroObjectDetails = {
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

    const data: Parameters<typeof setHeroObjectDetails>[2] = {
      heroes: {
        otherHeroId: {
          heroClass: "otherHeroClass",
          id: "otherHeroId",
        },
      },
    };

    const result = setHeroObjectDetails(object, value, data);

    const expected: HeroObject = {
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
