import { Game } from "../Game";
import { createMap, placeObject } from "./Map";
import { MapObject, MapObjectData } from "./MapObject";
import { handlePickableMapObject, isPickableMapObjectData, PickableMapObjectData } from "./PickableMapObject";

describe("isPickableMapObjectData", () => {
  it("should return true when pickable map object data", () => {
    const objectData: PickableMapObjectData = {
      id: "id",
      pickable: true,
    };

    const result = isPickableMapObjectData(objectData);

    expect(result).toBe(true);
  });

  it("should return false when not pickable map object data", () => {
    const objectData: MapObjectData = {
      id: "id",
    };

    const result = isPickableMapObjectData(objectData);

    expect(result).toBe(false);
  });
});

describe("handlePickableMapObject", () => {
  it("should remove object", () => {
    const objectData: PickableMapObjectData = {
      id: "id",
      pickable: true,
    };

    const object: MapObject = {
      id: "id",
      type: "type",
    };

    const game: Game = {
      alignment: "alignment",
      data: {
        artifacts: {},
        creatures: {},
        mapObjects: {
          id: objectData,
        },
        spells: {},
      },
      discoveredPuzzlePieces: 0,
      heroes: [],
      map: placeObject(createMap(1, 1, "terrain"), { x: 0, y: 0 }, object),
      resources: {},
      scenario: {
        description: "Description",
        name: "Name",
      },
      towns: [],
    };

    const result = handlePickableMapObject(game, object);

    const expected: Game = {
      ...game,
      map: {
        ...game.map,
        tiles: [
          {
            terrain: "terrain",
          },
        ],
      },
    };

    expect(result).toEqual(expected);
  });
});
