import { GameData, getTileIndex, isPointValid, Map, MapPoint, MapTile, translatePoint } from "heroes-core";

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

const getMapTile = (map: Map, point: MapPoint): MapTile | undefined => {
  if (!isPointValid(map, point)) {
    return undefined;
  }

  return map.tiles[getTileIndex(map.width, point)];
};

const isDifferentTerrain = (tileA: MapTile | undefined, tileB: MapTile | undefined): boolean =>
  tileA !== undefined && tileB !== undefined && tileA.terrain !== tileB.terrain;

export const getTerrainTransition = (
  map: Map,
  point: MapPoint,
  data: Pick<GameData, "terrains">,
): TerrainTransition => {
  const tile = getMapTile(map, point)!;

  const terrainData = data.terrains[tile.terrain];

  if (!terrainData.hasTransitions) {
    return TerrainTransition.None;
  }

  const northTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, 0, -1)), tile);
  const eastTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, 1, 0)), tile);
  const southTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, 0, 1)), tile);
  const westTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, -1, 0)), tile);

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
  const northWestTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, -1, -1)), tile);

  if (northWestTerrainDifferent) {
    return TerrainTransition.NorthWestIn;
  }

  const southEastTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, 1, 1)), tile);

  if (southEastTerrainDifferent) {
    return TerrainTransition.SouthEastIn;
  }

  const southWestTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, -1, 1)), tile);

  if (southWestTerrainDifferent) {
    return TerrainTransition.SouthWestIn;
  }

  const northEastTerrainDifferent = isDifferentTerrain(getMapTile(map, translatePoint(point, 1, -1)), tile);

  if (northEastTerrainDifferent) {
    return TerrainTransition.NorthEastIn;
  }

  return TerrainTransition.None;
};
