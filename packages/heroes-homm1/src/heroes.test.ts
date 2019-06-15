import { Army, HeroClassData, HeroSkills } from "heroes-core";

import { constructHero } from "./heroes";

describe("constructHero", () => {
  it("should assign skills", () => {
    const data: HeroClassData = {
      army: [],
      id: "data",
      skills: {
        skill: 1,
      },
    };

    const result = constructHero("id", "heroId", data);

    const expected: HeroSkills = {
      skill: 1,
    };

    expect(result.skills).toEqual(expected);
  });

  it("should assign initial army", () => {
    const data: HeroClassData = {
      army: [
        {
          creature: "creature",
          max: 1,
          min: 1,
        },
      ],
      id: "data",
      skills: {},
    };

    const result = constructHero("id", "heroId", data);

    const expected: Army = [
      {
        count: 1,
        creature: "creature",
      },
    ];

    expect(result.army).toEqual(expected);
  });

  it("should remove empty troops", () => {
    const data: HeroClassData = {
      army: [
        {
          creature: "creature",
          max: 0,
          min: 0,
        },
      ],
      id: "data",
      skills: {},
    };

    const result = constructHero("id", "heroId", data);

    const expected: Army = [];

    expect(result.army).toEqual(expected);
  });
});
