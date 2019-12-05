import { isDiagonalDirection, MapObjectOrientation, translatePointDirection } from "./MapObjectOrientation";
import { createPoint, MapPoint } from "./MapPoint";

describe("translatePointDirection", () => {
  it("should translate by (0,-1) when north", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.North);

    const expected: MapPoint = {
      ...point,
      y: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (1,-1) when north-east", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.NorthEast);

    const expected: MapPoint = {
      ...point,
      x: 1,
      y: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (1,0) when east", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.East);

    const expected: MapPoint = {
      ...point,
      x: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (1,1) when south-east", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.SouthEast);

    const expected: MapPoint = {
      ...point,
      x: 1,
      y: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (0,1) when south", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.South);

    const expected: MapPoint = {
      ...point,
      y: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (-1,1) when south-west", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.SouthWest);

    const expected: MapPoint = {
      ...point,
      x: -1,
      y: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (-1,0) when west", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.West);

    const expected: MapPoint = {
      ...point,
      x: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (-1,-1) when north-west", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, MapObjectOrientation.NorthWest);

    const expected: MapPoint = {
      ...point,
      x: -1,
      y: -1,
    };

    expect(result).toEqual(expected);
  });
});

describe("isDiagonalDirection", () => {
  it("should return true when north", () => {
    const result = isDiagonalDirection(MapObjectOrientation.North);

    expect(result).toBe(false);
  });

  it("should return true when north-east", () => {
    const result = isDiagonalDirection(MapObjectOrientation.NorthEast);

    expect(result).toBe(true);
  });

  it("should return true when east", () => {
    const result = isDiagonalDirection(MapObjectOrientation.East);

    expect(result).toBe(false);
  });

  it("should return true when south-east", () => {
    const result = isDiagonalDirection(MapObjectOrientation.SouthEast);

    expect(result).toBe(true);
  });

  it("should return true when south", () => {
    const result = isDiagonalDirection(MapObjectOrientation.South);

    expect(result).toBe(false);
  });

  it("should return true when south-west", () => {
    const result = isDiagonalDirection(MapObjectOrientation.SouthWest);

    expect(result).toBe(true);
  });

  it("should return true when west", () => {
    const result = isDiagonalDirection(MapObjectOrientation.West);

    expect(result).toBe(false);
  });

  it("should return true when north-west", () => {
    const result = isDiagonalDirection(MapObjectOrientation.NorthWest);

    expect(result).toBe(true);
  });
});
