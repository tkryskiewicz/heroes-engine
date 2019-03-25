import { getMoraleType, MoraleType } from "./morale";

describe("getMoraleType", () => {
  it("should return good when positive", () => {
    const result = getMoraleType(1);

    expect(result).toBe(MoraleType.Good);
  });

  it("should return neutral when zero", () => {
    const result = getMoraleType(0);

    expect(result).toBe(MoraleType.Neutral);
  });

  it("should return bad when negative", () => {
    const result = getMoraleType(-1);

    expect(result).toBe(MoraleType.Bad);
  });
});
