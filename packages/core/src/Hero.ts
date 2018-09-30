export interface HeroSkills {
  [skill: string]: number;
}

export interface Hero {
  id: string;
  alignment: string;
  heroClass: string;
  skills: HeroSkills;
  mobility: number;
}
