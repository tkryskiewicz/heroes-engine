import { GameData, getCellIndex, isPointValid, Map, MapCell, MapPoint, translatePoint } from "heroes-core";

export enum TerrainTransition {
  None = "none",
  North = "north",
  NorthEastIn = "north-east-in",
  NorthEastOut = "north-east-out",
  East = "east",
  SouthEastIn = "south-east-in",
  SouthEastOut = "south-east-out",
  South = "south",
  SouthWestIn = "south-west-in",
  SouthWestOut = "south-west-out",
  West = "west",
  NorthWestIn = "north-west-in",
  NorthWestOut = "north-west-out",
}

const getMapCell = (map: Map, point: MapPoint): MapCell | undefined => {
  if (!isPointValid(map, point)) {
    return undefined;
  }

  return map.cells[getCellIndex(map.width, point)];
};

const isDifferentTerrain = (cellA: MapCell | undefined, cellB: MapCell | undefined): boolean =>
  cellA !== undefined && cellB !== undefined && cellA.terrain !== cellB.terrain;

export const getTerrainTransition = (
  map: Map,
  point: MapPoint,
  data: Pick<GameData, "terrains">,
): TerrainTransition => {
  const cell = getMapCell(map, point)!;

  const terrainData = data.terrains[cell.terrain];

  if (!terrainData.hasTransitions) {
    return TerrainTransition.None;
  }

  const northTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, 0, -1)), cell);
  const eastTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, 1, 0)), cell);
  const southTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, 0, 1)), cell);
  const westTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, -1, 0)), cell);

  // out
  if (northTerrainDifferent && westTerrainDifferent) {
    return TerrainTransition.NorthWestOut;
  }

  if (northTerrainDifferent && eastTerrainDifferent) {
    return TerrainTransition.NorthEastOut;
  }

  if (southTerrainDifferent && westTerrainDifferent) {
    return TerrainTransition.SouthWestOut;
  }

  if (southTerrainDifferent && eastTerrainDifferent) {
    return TerrainTransition.SouthEastOut;
  }

  // vertical / horizontal
  if (!northTerrainDifferent && !southTerrainDifferent && westTerrainDifferent) {
    return TerrainTransition.West;
  }

  if (!northTerrainDifferent && !southTerrainDifferent && eastTerrainDifferent) {
    return TerrainTransition.East;
  }

  if (northTerrainDifferent && !eastTerrainDifferent && !westTerrainDifferent) {
    return TerrainTransition.North;
  }

  if (southTerrainDifferent && !eastTerrainDifferent && !westTerrainDifferent) {
    return TerrainTransition.South;
  }

  // in
  const northWestTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, -1, -1)), cell);

  if (northWestTerrainDifferent) {
    return TerrainTransition.NorthWestIn;
  }

  const southEastTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, 1, 1)), cell);

  if (southEastTerrainDifferent) {
    return TerrainTransition.SouthEastIn;
  }

  const southWestTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, -1, 1)), cell);

  if (southWestTerrainDifferent) {
    return TerrainTransition.SouthWestIn;
  }

  const northEastTerrainDifferent = isDifferentTerrain(getMapCell(map, translatePoint(point, 1, -1)), cell);

  if (northEastTerrainDifferent) {
    return TerrainTransition.NorthEastIn;
  }

  return TerrainTransition.None;
};
