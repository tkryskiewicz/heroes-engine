export interface Damage {
  readonly min: number;
  readonly max: number;
}

export interface CreatureData {
  readonly id: string;
  readonly town?: string;
  readonly attack: number;
  readonly defense: number;
  readonly shots?: number;
  readonly damage: Damage;
  readonly hitPoints: number;
  readonly speed: number;
}
