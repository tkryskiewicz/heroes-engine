import * as React from "react";

import { Creature } from "heroes-core";

import { TroopWindow, TroopWindowProps } from "./TroopWindow";

export interface TroopWindowContainerProps extends Pick<TroopWindowProps, Exclude<keyof TroopWindowProps, "creature">> {
  readonly creatures: { readonly [id: string]: Creature; };
  readonly creature: string;
}

export class TroopWindowContainer extends React.Component<TroopWindowContainerProps> {
  public render() {
    const creature = this.props.creatures[this.props.creature];

    return (
      <TroopWindow
        {...this.props}
        creature={creature}
      />
    );
  }
}
