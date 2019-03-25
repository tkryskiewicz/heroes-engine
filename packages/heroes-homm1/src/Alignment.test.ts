import { Alignment, changeAlignment } from "./Alignment";

describe("changeAlignment", () => {
  it("should return green when blue", () => {
    const result = changeAlignment(Alignment.Blue);

    expect(result).toEqual(Alignment.Green);
  });

  it("should return red when green", () => {
    const result = changeAlignment(Alignment.Green);

    expect(result).toEqual(Alignment.Red);
  });

  it("should return yellow when red", () => {
    const result = changeAlignment(Alignment.Red);

    expect(result).toEqual(Alignment.Yellow);
  });

  it("should return blue when yellow", () => {
    const result = changeAlignment(Alignment.Yellow);

    expect(result).toEqual(Alignment.Blue);
  });
});
