import { SpellType } from "./data";

export interface Spell {
  readonly id: string;
  readonly type: SpellType;
  readonly level: number;
}
