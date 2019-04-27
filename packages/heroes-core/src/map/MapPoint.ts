export interface MapPoint {
  readonly x: number;
  readonly y: number;
}

export const isSamePoint = (pointA: MapPoint, pointB: MapPoint): boolean =>
  pointA.x === pointB.x && pointA.y === pointB.y;
