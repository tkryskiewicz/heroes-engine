export interface Creature {
  id: string;
  attack: number;
  defense: number;
  damage: {
    min: number;
    max: number;
  };
}
