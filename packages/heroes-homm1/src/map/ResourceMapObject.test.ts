import { GameData } from "heroes-core";

import { isResourceMapObject, ResourceMapObject } from "./ResourceMapObject";

describe("isResourceMapObject", () => {
  it("should return true when there is a resource with same id", () => {
    const object: ResourceMapObject = {
      dataId: "resource",
      id: "id",
      treasure: {},
    };

    const data: GameData = {
      alignments: [],
      armySize: 0,
      creatures: {},
      editor: {
        heroArtifactCount: 0,
        maxCreatureCount: 0,
        maxHeroExperience: 0,
      },
      heroClasses: {},
      heroes: {},
      items: {},
      mapObjects: {},
      resources: {
        resource: {
          id: "resource",
          mine: "mine",
        },
      },
      spells: {},
      terrains: [],
    };

    const result = isResourceMapObject(object, data);

    expect(result).toBe(true);
  });
});
