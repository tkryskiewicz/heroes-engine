import { HeroClassData } from "heroes-core";

import { constructHero } from "./heroes";

describe("constructHero", () => {
  it("should construct hero", () => {
    const heroClassData: HeroClassData = {
      army: [],
      id: "heroClass",
      skills: {},
    };

    const hero = constructHero("hero", heroClassData);

    expect(hero).toBeDefined();
  });
});
