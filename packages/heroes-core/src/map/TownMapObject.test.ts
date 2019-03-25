import { Town } from "../Town";
import { createTownMapObject, TownMapObject, TownMapObjectType } from "./TownMapObject";

describe("createTownMapObject", () => {
  it("should create object", () => {
    const town: Town = {
      alignment: "alignment",
      canConstructStructures: false,
      garrison: [],
      heroClass: "heroClass",
      id: "townId",
      name: "name",
      structures: [],
    };

    const result = createTownMapObject("id", town);

    const expected: TownMapObject = {
      id: "id",
      town,
      type: TownMapObjectType,
    };

    expect(result).toEqual(expected);
  });
});
