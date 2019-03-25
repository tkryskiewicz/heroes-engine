import { constructHero, HeroId } from "./heroes";

describe("constructHero", () => {
  it("should construct hero", () => {
    const hero = constructHero(HeroId.LordKilburn, "alignment");

    expect(hero).toBeDefined();
  });

  it("should throw when hero is invalid", () => {
    expect(() => {
      constructHero("hero", "alignment");
    }).toThrow();
  });
});
