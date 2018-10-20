export interface Damage {
  min: number;
  max: number;
}

export interface Creature {
  id: string;
  town?: string;
  attack: number;
  defense: number;
  shots?: number;
  damage: Damage;
  hitPoints: number;
  speed: number;
}
