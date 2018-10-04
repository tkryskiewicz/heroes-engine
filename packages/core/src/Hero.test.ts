import { canSelectNextHero, getNextHeroIndex, Hero } from "./Hero";

const getHero = (mobility: number = 1): Hero => ({
  alignment: "alignment",
  army: [],
  heroClass: "heroClass",
  id: "id",
  mobility,
  skills: {},
});

describe("canSelectNextHero", () => {
  it("should return false when no heroes", () => {
    const result = canSelectNextHero([]);

    expect(result).toBe(false);
  });

  it("should return true when there are heroes with mobility", () => {
    const heroes: Hero[] = [
      getHero(),
    ];

    const result = canSelectNextHero(heroes);

    expect(result).toBe(true);
  });
});

describe("getNextHeroIndex", () => {
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

  it("should ignore heroes with no mobility", () => {
    const heroes: Hero[] = [
      getHero(0),
      getHero(),
    ];

    const result = getNextHeroIndex(heroes);

    expect(result).toBe(1);
  });
});
