import { MapObjectId, RandomTownMapObject } from "../map";
import { getTownMapObjectDetails, setTownMapObjectDetails, TownMapObjectDetails } from "./TownMapObjectDetails";

describe("getTownMapObjectDetails", () => {
  it("should return object details", () => {
    const object: RandomTownMapObject = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: false,
      dataId: MapObjectId.RandomTown,
      id: "dataId",
      owner: "player",
    };

    const result = getTownMapObjectDetails(object);

    const expected: TownMapObjectDetails = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: false,
      owner: "player",
    };

    expect(result).toEqual(expected);
  });
});

describe("setTownMapObjectDetails", () => {
  it("should set object details", () => {
    const object: RandomTownMapObject = {
      army: [],
      customized: false,
      dataId: MapObjectId.RandomTown,
      id: "id",
    };

    const value: TownMapObjectDetails = {
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: true,
      owner: "player",
    };

    const result = setTownMapObjectDetails(object, value);

    const expected: RandomTownMapObject = {
      ...object,
      army: [
        {
          count: 1,
          creature: "creature",
        },
      ],
      customized: true,
      owner: "player",
    };

    expect(result).toEqual(expected);
  });
});
