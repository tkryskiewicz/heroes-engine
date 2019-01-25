import { CombatSide } from "./CombatSide";
import { Troop } from "./Troop";

export enum BattlefieldObjectType {
  Obstacle = "obstacle",
  Troop = "troop",
}

export interface BattlefieldObstacleObject {
  readonly type: BattlefieldObjectType.Obstacle;
  readonly variant: number;
}

export interface BattlefieldTroopObject {
  readonly type: BattlefieldObjectType.Troop;
  readonly side: CombatSide;
  readonly troop: Troop;
}

export type BattlefieldObject =
  BattlefieldObstacleObject |
  BattlefieldTroopObject;

export interface BattlefieldCell {
  readonly terrainVariant: number;
  readonly object?: BattlefieldObject;
}

export interface Battlefield {
  readonly width: number;
  readonly height: number;
  readonly terrainType: string;
  readonly woodyTerrain?: boolean;
  readonly cells: BattlefieldCell[];
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
