import * as React from "react";

import { Spell, SpellBookSpell } from "heroes-homm1";
import { SpellBookWindow, SpellBookWindowProps } from "heroes-homm1-react";

export interface SpellBookWindowContainerProps extends
  Pick<SpellBookWindowProps, Exclude<keyof SpellBookWindowProps, "spells">> {
  readonly spellById: { readonly [id: string]: Spell; };
  readonly spells: SpellBookSpell[];
}

export class SpellBookWindowContainer extends React.Component<SpellBookWindowContainerProps> {
  public render() {
    const { spellById, spells, ...rest } = this.props;

    return (
      <SpellBookWindow
        {...rest}
        spells={spells.map((s) => ({ ...spellById[s.id], ...s }))}
      />
    );
  }
}
