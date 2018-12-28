import { CombatSide } from "./CombatSide";
import { Troop } from "./Troop";

export enum BattlefieldObjectType {
  Obstacle = "obstacle",
  Troop = "troop",
}

export interface BattlefieldObstacleObject {
  type: BattlefieldObjectType.Obstacle;
  variant: number;
}

export interface BattlefieldTroopObject {
  type: BattlefieldObjectType.Troop;
  side: CombatSide;
  troop: Troop;
}

export type BattlefieldObject =
  BattlefieldObstacleObject |
  BattlefieldTroopObject;

export interface BattlefieldCell {
  terrainVariant: number;
  object?: BattlefieldObject;
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
