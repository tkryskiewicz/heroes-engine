import { createDwellingMapObject, DwellingMapObject, DwellingMapObjectType } from "./DwellingMapObject";

describe("createDwellingMapObject", () => {
  it("should create object", () => {
    const result = createDwellingMapObject("id", "creature", 1);

    const expected: DwellingMapObject = {
      availableCount: 1,
      creature: "creature",
      id: "id",
      type: DwellingMapObjectType,
    };

    expect(result).toEqual(expected);
  });
});
