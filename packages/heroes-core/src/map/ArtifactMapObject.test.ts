import { Game, getGameHero } from "../Game";
import { Hero } from "../Hero";
import { ArtifactMapObjectData, handleArtifactMapObject, isArtifactMapObjectData } from "./ArtifactMapObject";
import { createHeroMapObject, HeroMapObject } from "./HeroMapObject";
import { createMap, placeObject } from "./Map";
import { MapObjectData } from "./MapObject";
import { MapObjectOrientation } from "./MapObjectOrientation";

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
      dataId: "hero",
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
      map: placeObject(
        createMap(2, 1, "terrain"),
        { x: 1, y: 0 },
        createHeroMapObject("hero", { id: "hero", ownable: true }, hero, "alignment"),
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
    };

    const result = handleArtifactMapObject(game, objectData, hero);

    const expected: HeroMapObject = {
      ...hero,
      artifacts: [
        {
          data: {},
          id: "artifact",
        },
      ],
      orientation: MapObjectOrientation.North,
      owner: "alignment",
    };

    expect(getGameHero(result, "hero")).toEqual(expected);
  });
});
