export interface MapPoint {
  readonly x: number;
  readonly y: number;
}

export const createPoint = (x: number, y: number): MapPoint => ({
  x,
  y,
});

export const isSamePoint = (pointA: MapPoint, pointB: MapPoint): boolean =>
  pointA.x === pointB.x && pointA.y === pointB.y;

export const translatePoint = (point: MapPoint, x: number, y: number): MapPoint => ({
  x: point.x + x,
  y: point.y + y,
});
