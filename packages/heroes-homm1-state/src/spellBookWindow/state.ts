import { SpellType } from "heroes-homm1";

export interface SpellBookWindowState {
  readonly spellType: SpellType;
  readonly page: number;
}
