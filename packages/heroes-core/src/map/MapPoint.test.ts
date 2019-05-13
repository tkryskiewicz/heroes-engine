import { createPoint, isSamePoint, MapPoint, translatePoint } from "./MapPoint";

describe("createPoint", () => {
  it("should create point", () => {
    const result = createPoint(0, 1);

    const expected: MapPoint = {
      x: 0,
      y: 1,
    };

    expect(result).toEqual(expected);
  });
});

describe("isSamePoint", () => {
  it("should return true when same point", () => {
    const pointA = createPoint(0, 0);

    const pointB = createPoint(0, 0);

    const result = isSamePoint(pointA, pointB);

    expect(result).toBe(true);
  });

  it("should return false when different x", () => {
    const pointA = createPoint(0, 0);

    const pointB = createPoint(1, 0);

    const result = isSamePoint(pointA, pointB);

    expect(result).toBe(false);
  });

  it("should return false when different y", () => {
    const pointA = createPoint(0, 0);

    const pointB = createPoint(0, 1);

    const result = isSamePoint(pointA, pointB);

    expect(result).toBe(false);
  });
});

describe("translatePoint", () => {
  it("should translate point by x", () => {
    const point = createPoint(0, 0);

    const result = translatePoint(point, 1, 0);

    const expected = createPoint(1, 0);

    expect(result).toEqual(expected);
  });

  it("should translate point by y", () => {
    const point = createPoint(0, 0);

    const result = translatePoint(point, 0, 1);

    const expected = createPoint(0, 1);

    expect(result).toEqual(expected);
  });
});
