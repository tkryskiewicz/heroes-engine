import { SimpleModifier } from "./Modifier";

export interface TerrainData {
  readonly id: string;
  readonly hasTransitions: boolean;
  readonly movementCostModifier?: SimpleModifier;
}
