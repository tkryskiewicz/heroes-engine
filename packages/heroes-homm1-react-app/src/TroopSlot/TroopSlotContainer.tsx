import * as React from "react";

import { GameData } from "heroes-core";

import { TroopSlot, TroopSlotProps } from "heroes-homm1-react";

interface Troop {
  readonly creature: string;
  readonly count: number;
}

export interface TroopSlotContainerProps extends Pick<TroopSlotProps, Exclude<keyof TroopSlotProps, "troop">> {
  readonly data: Pick<GameData, "creatures">;
  readonly troop?: Troop;
}

export class TroopSlotContainer extends React.Component<TroopSlotContainerProps> {
  public render() {
    const { data, troop, ...rest } = this.props;

    return (
      <TroopSlot
        {...rest}
        troop={troop ? { ...troop, town: data.creatures[troop.creature].town } : undefined}
      />
    );
  }
}
