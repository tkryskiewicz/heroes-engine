import { canSelectNextHero, getNextHeroIndex, Hero, heroHasArtifact } from "./Hero";

const getHero = (mobility: number = 1): Hero => ({
  army: [],
  artifacts: [],
  experience: 0,
  heroClass: "heroClass",
  id: "id",
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

describe("heroHasArtifact", () => {
  it("should return true when hero has artifact", () => {
    const hero: Hero = {
      army: [],
      artifacts: [
        {
          data: {},
          id: "artifact",
        },
      ],
      experience: 0,
      heroClass: "heroClass",
      id: "id",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const result = heroHasArtifact(hero, "artifact");

    expect(result).toBe(true);
  });

  it("should return false when hero doesn't have artifact", () => {
    const hero: Hero = {
      army: [],
      artifacts: [
        {
          data: {},
          id: "id",
        },
      ],
      experience: 0,
      heroClass: "heroClass",
      id: "id",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const result = heroHasArtifact(hero, "artifact");

    expect(result).toBe(false);
  });
});
