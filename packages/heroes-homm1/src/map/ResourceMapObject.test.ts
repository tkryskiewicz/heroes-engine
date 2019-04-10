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
      artifacts: {},
      creatures: {},
      mapObjects: {},
      resources: {
        resource: {
          id: "resource",
          mine: "mine",
        },
      },
      spells: {},
    };

    const result = isResourceMapObject(object, data);

    expect(result).toBe(true);
  });
});
