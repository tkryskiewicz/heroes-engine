import { Artifact } from "heroes-core";

import { ArtifactId } from "./artifacts";

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
