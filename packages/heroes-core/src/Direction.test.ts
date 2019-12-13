import { Direction, isDiagonalDirection, translatePointDirection } from "./Direction";
import { createPoint, MapPoint } from "./map";

describe("translatePointDirection", () => {
  it("should translate by (0,-1) when north", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.North);

    const expected: MapPoint = {
      ...point,
      y: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (1,-1) when north-east", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.NorthEast);

    const expected: MapPoint = {
      ...point,
      x: 1,
      y: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (1,0) when east", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.East);

    const expected: MapPoint = {
      ...point,
      x: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (1,1) when south-east", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.SouthEast);

    const expected: MapPoint = {
      ...point,
      x: 1,
      y: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (0,1) when south", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.South);

    const expected: MapPoint = {
      ...point,
      y: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (-1,1) when south-west", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.SouthWest);

    const expected: MapPoint = {
      ...point,
      x: -1,
      y: 1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (-1,0) when west", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.West);

    const expected: MapPoint = {
      ...point,
      x: -1,
    };

    expect(result).toEqual(expected);
  });

  it("should translate by (-1,-1) when north-west", () => {
    const point = createPoint(0, 0);

    const result = translatePointDirection(point, Direction.NorthWest);

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
    const result = isDiagonalDirection(Direction.North);

    expect(result).toBe(false);
  });

  it("should return true when north-east", () => {
    const result = isDiagonalDirection(Direction.NorthEast);

    expect(result).toBe(true);
  });

  it("should return true when east", () => {
    const result = isDiagonalDirection(Direction.East);

    expect(result).toBe(false);
  });

  it("should return true when south-east", () => {
    const result = isDiagonalDirection(Direction.SouthEast);

    expect(result).toBe(true);
  });

  it("should return true when south", () => {
    const result = isDiagonalDirection(Direction.South);

    expect(result).toBe(false);
  });

  it("should return true when south-west", () => {
    const result = isDiagonalDirection(Direction.SouthWest);

    expect(result).toBe(true);
  });

  it("should return true when west", () => {
    const result = isDiagonalDirection(Direction.West);

    expect(result).toBe(false);
  });

  it("should return true when north-west", () => {
    const result = isDiagonalDirection(Direction.NorthWest);

    expect(result).toBe(true);
  });
});
