import { MapPoint, translatePoint } from "./MapPoint";

export enum MapObjectOrientation {
  North = "north",
  NorthEast = "north-east",
  East = "east",
  SouthEast = "south-east",
  South = "south",
  SouthWest = "south-west",
  West = "west",
  NorthWest = "north-west",
}

export const translatePointDirection = (point: MapPoint, direction: MapObjectOrientation) => {
  switch (direction) {
    case MapObjectOrientation.North:
      return translatePoint(point, 0, -1);
    case MapObjectOrientation.NorthEast:
      return translatePoint(point, 1, -1);
    case MapObjectOrientation.East:
      return translatePoint(point, 1, 0);
    case MapObjectOrientation.SouthEast:
      return translatePoint(point, 1, 1);
    case MapObjectOrientation.South:
      return translatePoint(point, 0, 1);
    case MapObjectOrientation.SouthWest:
      return translatePoint(point, -1, 1);
    case MapObjectOrientation.West:
      return translatePoint(point, -1, 0);
    case MapObjectOrientation.NorthWest:
      return translatePoint(point, -1, -1);
  }
};

export const isDiagonalDirection = (direction: MapObjectOrientation): boolean =>
  [
    MapObjectOrientation.NorthEast,
    MapObjectOrientation.SouthEast,
    MapObjectOrientation.SouthWest,
    MapObjectOrientation.NorthWest,
  ].includes(direction);
