import { GameDate, getDate } from "./GameDate";

describe("getDate", () => {
  it("should return correct date for first turn", () => {
    const result = getDate(0);

    const expected: GameDate = {
      day: 1,
      month: 1,
      week: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should return correct date after a week", () => {
    const result = getDate(7);

    const expected: GameDate = {
      day: 1,
      month: 1,
      week: 2,
    };

    expect(result).toEqual(expected);
  });

  it("should return correct date after a mont", () => {
    const result = getDate(28);

    const expected: GameDate = {
      day: 1,
      month: 2,
      week: 1,
    };

    expect(result).toEqual(expected);
  });
});
