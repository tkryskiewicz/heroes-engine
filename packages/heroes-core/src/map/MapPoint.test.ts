import { isSamePoint, MapPoint } from "./MapPoint";

describe("isSamePoint", () => {
  it("should return true when same point", () => {
    const pointA: MapPoint = {
      x: 0,
      y: 0,
    };

    const pointB: MapPoint = {
      x: 0,
      y: 0,
    };

    const result = isSamePoint(pointA, pointB);

    expect(result).toBe(true);
  });

  it("should return false when different x", () => {
    const pointA: MapPoint = {
      x: 0,
      y: 0,
    };

    const pointB: MapPoint = {
      x: 1,
      y: 0,
    };

    const result = isSamePoint(pointA, pointB);

    expect(result).toBe(false);
  });

  it("should return false when different y", () => {
    const pointA: MapPoint = {
      x: 0,
      y: 0,
    };

    const pointB: MapPoint = {
      x: 0,
      y: 1,
    };

    const result = isSamePoint(pointA, pointB);

    expect(result).toBe(false);
  });
});
