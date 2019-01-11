import { Artifact } from "heroes-core";

import { ArtifactId } from "./artifacts";
import { Spell } from "./Spell";

export interface SpellBook extends Artifact<Spell[]> {
  id: ArtifactId.Spellbook;
}
