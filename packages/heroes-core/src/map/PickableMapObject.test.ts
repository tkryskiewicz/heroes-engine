import { Game } from "../Game";
import { createMap, placeObject } from "./Map";
import { MapObject } from "./MapObject";
import { handlePickableMapObject, PickableMapObjectData } from "./PickableMapObject";

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
        artifactById: {},
        creatureById: {},
        mapObjects: {
          id: objectData,
        },
        spellById: {},
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
