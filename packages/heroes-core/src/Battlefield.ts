export interface BattlefieldObstacleObject {
  variant: number;
}

export interface BattlefieldCell {
  terrainVariant: number;
  object?: BattlefieldObstacleObject;
}

export interface Battlefield {
  width: number;
  height: number;
  terrainType: string;
  woodyTerrain?: boolean;
  cells: BattlefieldCell[];
}

export const createBattlefield = (
  width: number,
  height: number,
  terrainType: string,
  woodyTerrain: boolean,
  terrainVariants: number,
): Battlefield => ({
  cells: new Array(width * height).fill(undefined).map<BattlefieldCell>(() => ({
    terrainVariant: Math.floor(Math.random() * terrainVariants),
  })),
  height,
  terrainType,
  width,
  woodyTerrain,
});
