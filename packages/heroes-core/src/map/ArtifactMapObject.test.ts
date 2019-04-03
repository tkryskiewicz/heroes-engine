import { Game, getGameHero } from "../Game";
import { Hero } from "../Hero";
import { ArtifactMapObjectData, handleArtifactMapObject, isArtifactMapObjectData } from "./ArtifactMapObject";
import { createHeroMapObject } from "./HeroMapObject";
import { createMap, placeObject } from "./Map";
import { MapObjectData } from "./MapObject";

describe("isArtifactMapObjectData", () => {
  it("should return true when artifact object data", () => {
    const objectData: ArtifactMapObjectData = {
      artifact: "artifact",
      id: "dataId",
    };

    const result = isArtifactMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not artifact object data", () => {
    const objectData: MapObjectData = {
      id: "dataId",
    };

    const result = isArtifactMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("handleArtifactMapObject", () => {
  it("should add artifact to hero", () => {
    const objectData: ArtifactMapObjectData = {
      artifact: "artifact",
      id: "dataId",
    };

    const hero: Hero = {
      army: [],
      artifacts: [],
      experience: 0,
      heroClass: "heroClass",
      id: "hero",
      luck: 0,
      mobility: 0,
      morale: 0,
      skills: {},
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {
          id: objectData,
        },
        resources: {},
        spells: {},
      },
      heroes: [
        hero,
      ],
      map: placeObject(
        createMap(2, 2, "terrain"),
        { x: 0, y: 0 },
        createHeroMapObject("hero", { id: "hero", ownable: true }, hero),
      ),
      puzzle: {
        totalPieces: 0,
        uncoveredPieces: 0,
      },
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    const result = handleArtifactMapObject(game, objectData, hero);

    const expected: Hero = {
      ...hero,
      artifacts: [
        {
          data: {},
          id: "artifact",
        },
      ],
    };

    expect(getGameHero(result, "hero")).toEqual(expected);
  });
});
