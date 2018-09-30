export interface Creature {
  id: string;
  town?: string;
  attack: number;
  defense: number;
  damage: {
    min: number;
    max: number;
  };
}
