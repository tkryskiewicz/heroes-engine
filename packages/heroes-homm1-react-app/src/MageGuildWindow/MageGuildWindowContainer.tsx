import * as React from "react";

import { Spell } from "heroes-homm1";
import { MageGuildWindow, MageGuildWindowProps } from "heroes-homm1-react";

export interface MageGuildWindowContainerProps extends
  Pick<MageGuildWindowProps, Exclude<keyof MageGuildWindowProps, "spells">> {
  readonly spellById: { readonly [id: string]: Spell; };
  readonly spells: string[];
}

export class MageGuildWindowContainer extends React.Component<MageGuildWindowContainerProps> {
  public render() {
    const { spellById, spells, ...rest } = this.props;

    return (
      <MageGuildWindow
        {...rest}
        spells={spells.map((s) => spellById[s])}
      />
    );
  }
}
