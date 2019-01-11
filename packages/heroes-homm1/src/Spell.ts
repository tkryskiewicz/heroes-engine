import { SpellType } from "./SpellType";

export interface Spell {
  id: string;
  type: SpellType;
  level: number;
  charges: number;
}
