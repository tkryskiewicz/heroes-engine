import { getNextHeroIndex, Hero } from "./Hero";

describe("getNextHeroIndex", () => {
  const getHero = (): Hero => ({
    alignment: "alignment",
    heroClass: "heroClass",
    id: "id",
    mobility: 0,
    skills: {},
  });

  it("should return nothing when no heroes", () => {
    const result = getNextHeroIndex([]);

    expect(result).toBeUndefined();
  });

  it("should return first hero index when none selected", () => {
    const heroes: Hero[] = [
      getHero(),
    ];

    const result = getNextHeroIndex(heroes);

    expect(result).toBe(0);
  });

  it("should return next hero when one selected", () => {
    const heroes: Hero[] = [
      getHero(),
      getHero(),
    ];

    const result = getNextHeroIndex(heroes, 0);

    expect(result).toBe(1);
  });

  it("should cycle through all heroes", () => {
    const heroes: Hero[] = [
      getHero(),
      getHero(),
    ];

    const result = getNextHeroIndex(heroes, 1);

    expect(result).toBe(0);
  });

  it("should return nothing when only hero already selected", () => {
    const heroes: Hero[] = [
      getHero(),
    ];

    const result = getNextHeroIndex(heroes, 0);

    expect(result).toBeUndefined();
  });
});
