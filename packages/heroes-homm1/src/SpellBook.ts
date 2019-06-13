import { Artifact } from "./Artifact";
import { ArtifactId } from "./ArtifactId";

export interface SpellBookSpell {
  readonly id: string;
  readonly charges: number;
}

export interface SpellBookData {
  readonly spells: SpellBookSpell[];
}

export interface SpellBook extends Artifact<SpellBookData> {
  readonly id: ArtifactId.Spellbook;
}

export const constructSpellBook = (spells: SpellBookSpell[]): SpellBook => ({
  data: {
    spells,
  },
  id: ArtifactId.Spellbook,
});
