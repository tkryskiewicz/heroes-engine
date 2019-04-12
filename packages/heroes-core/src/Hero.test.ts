import { canSelectNextHero, getNextHero, Hero } from "./Hero";

const getHero = (id: string, mobility: number = 1): Hero => ({
  army: [],
  artifacts: [],
  dataId: "hero",
  experience: 0,
  heroClass: "heroClass",
  id,
  luck: 0,
  mobility,
  morale: 0,
  skills: {},
});

describe("canSelectNextHero", () => {
  it("should return false when no heroes", () => {
    const result = canSelectNextHero([]);

    expect(result).toBe(false);
  });

  it("should return true when there are heroes with mobility", () => {
    const heroes: Hero[] = [
      getHero("id"),
    ];

    const result = canSelectNextHero(heroes);

    expect(result).toBe(true);
  });
});

describe("getNextHero", () => {
  it("should return nothing when no heroes", () => {
    const result = getNextHero([]);

    expect(result).toBeUndefined();
  });

  it("should return first hero when none selected", () => {
    const heroes: Hero[] = [
      getHero("id"),
    ];

    const result = getNextHero(heroes);

    expect(result).toBe("id");
  });

  it("should return next hero when one selected", () => {
    const heroes: Hero[] = [
      getHero("idA"),
      getHero("idB"),
    ];

    const result = getNextHero(heroes, "idA");

    expect(result).toBe("idB");
  });

  it("should cycle through all heroes", () => {
    const heroes: Hero[] = [
      getHero("idA"),
      getHero("idB"),
    ];

    const result = getNextHero(heroes, "idB");

    expect(result).toBe("idA");
  });

  it("should return nothing when only hero already selected", () => {
    const heroes: Hero[] = [
      getHero("id"),
    ];

    const result = getNextHero(heroes, "id");

    expect(result).toBeUndefined();
  });

  it("should ignore heroes with no mobility", () => {
    const heroes: Hero[] = [
      getHero("idA", 0),
      getHero("idB"),
    ];

    const result = getNextHero(heroes);

    expect(result).toBe("idB");
  });
});
