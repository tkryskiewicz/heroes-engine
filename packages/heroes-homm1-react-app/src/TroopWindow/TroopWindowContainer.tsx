import * as React from "react";

import { Creature } from "heroes-core";
import { TroopWindow, TroopWindowProps } from "heroes-homm1-react";

export interface TroopWindowContainerProps extends Pick<TroopWindowProps, Exclude<keyof TroopWindowProps, "creature">> {
  readonly creatureById: { readonly [id: string]: Creature; };
  readonly creature: string;
}

export class TroopWindowContainer extends React.Component<TroopWindowContainerProps> {
  public render() {
    const { creatureById, creature, ...rest } = this.props;

    return (
      <TroopWindow
        {...rest}
        creature={creatureById[creature]}
      />
    );
  }
}
