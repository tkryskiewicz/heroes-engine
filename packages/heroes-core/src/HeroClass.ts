import { HeroSkills } from "./Hero";

interface InitialArmy {
  readonly creature: string;
  readonly min: number;
  readonly max: number;
}

export interface HeroClassData {
  readonly id: string;
  readonly army: InitialArmy[];
  readonly skills: HeroSkills;
}
