import { SpellType } from "./SpellType";

export interface Spell {
  readonly id: string;
  readonly type: SpellType;
  readonly level: number;
  readonly charges: number;
}
