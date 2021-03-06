import { HeroSkills } from "./Hero";
import { Modifier } from "./Modifier";

interface InitialArmy {
  readonly creature: string;
  readonly min: number;
  readonly max: number;
}

export interface HeroClassData {
  readonly id: string;
  readonly army: InitialArmy[];
  readonly skills: HeroSkills;
  readonly terrainMobilityModifier?: Modifier;
  readonly terrainMovementCostModifier?: Modifier;
}
