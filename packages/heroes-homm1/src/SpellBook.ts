import { Artifact } from "heroes-core";

import { ArtifactId } from "./artifacts";

export interface SpellBookSpell {
  readonly id: string;
  readonly charges: number;
}

export interface SpellBook extends Artifact<SpellBookSpell[]> {
  readonly id: ArtifactId.Spellbook;
}
