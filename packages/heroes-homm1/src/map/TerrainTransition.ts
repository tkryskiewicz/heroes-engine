import { Map, MapPoint } from "heroes-core";

export enum TerrainTransition {
  None = "none",
}

export const getTerrainTransition = (_map: Map, _point: MapPoint): TerrainTransition => {
  return TerrainTransition.None;
};
