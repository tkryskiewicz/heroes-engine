import { GameData } from "heroes-core";

import { isMineMapObject, isMineMapObjectData, MineMapObject, MineMapObjectData } from "./MineMapObject";

describe("isMineMapObjectData", () => {
  it("should return true when a mine for a resource", () => {
    const objectData: MineMapObjectData = {
      id: "dataId",
      ownable: true,
      resourceGenerator: {
        amount: 1,
        resource: "resource",
      },
    };

    const data: GameData = {
      artifacts: {},
      creatures: {},
      mapObjects: {},
      resources: {
        resource: {
          id: "resource",
          mine: "dataId",
        },
      },
      spells: {},
    };

    const result = isMineMapObjectData(objectData, data);

    expect(result).toBe(true);
  });
});

describe("isMineMapObject", () => {
  it("should return true when a mine for a resource", () => {
    const object: MineMapObject = {
      dataId: "dataId",
      id: "id",
    };

    const data: GameData = {
      artifacts: {},
      creatures: {},
      mapObjects: {},
      resources: {
        resource: {
          id: "resource",
          mine: "dataId",
        },
      },
      spells: {},
    };

    const result = isMineMapObject(object, data);

    expect(result).toBe(true);
  });
});
