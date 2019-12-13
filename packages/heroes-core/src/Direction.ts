import { MapPoint, translatePoint } from "./map";

export enum Direction {
  North = "north",
  NorthEast = "north-east",
  East = "east",
  SouthEast = "south-east",
  South = "south",
  SouthWest = "south-west",
  West = "west",
  NorthWest = "north-west",
}

export const translatePointDirection = (point: MapPoint, direction: Direction) => {
  switch (direction) {
    case Direction.North:
      return translatePoint(point, 0, -1);
    case Direction.NorthEast:
      return translatePoint(point, 1, -1);
    case Direction.East:
      return translatePoint(point, 1, 0);
    case Direction.SouthEast:
      return translatePoint(point, 1, 1);
    case Direction.South:
      return translatePoint(point, 0, 1);
    case Direction.SouthWest:
      return translatePoint(point, -1, 1);
    case Direction.West:
      return translatePoint(point, -1, 0);
    case Direction.NorthWest:
      return translatePoint(point, -1, -1);
  }
};

export const isDiagonalDirection = (direction: Direction): boolean =>
  [
    Direction.NorthEast,
    Direction.SouthEast,
    Direction.SouthWest,
    Direction.NorthWest,
  ].includes(direction);
