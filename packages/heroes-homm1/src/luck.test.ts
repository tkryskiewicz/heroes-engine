import { getLuckType, LuckType } from "./luck";

describe("getLuckType", () => {
  it("should return good when positive", () => {
    const result = getLuckType(1);

    expect(result).toBe(LuckType.Good);
  });

  it("should return neutral when zero", () => {
    const result = getLuckType(0);

    expect(result).toBe(LuckType.Neutral);
  });

  it("should return bad when negative", () => {
    const result = getLuckType(-1);

    expect(result).toBe(LuckType.Bad);
  });
});
