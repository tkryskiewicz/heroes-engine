import * as React from "react";

import { GameData } from "heroes-core";

import { TroopSlot, TroopSlotProps } from "heroes-homm1-react";

interface Troop {
  readonly creature: string;
  readonly count: number;
}

export interface TroopSlotContainerProps extends Pick<TroopSlotProps, Exclude<keyof TroopSlotProps, "troop">> {
  readonly creatureById: GameData["creatures"];
  readonly troop?: Troop;
}

export class TroopSlotContainer extends React.Component<TroopSlotContainerProps> {
  public render() {
    const { creatureById, troop, ...rest } = this.props;

    return (
      <TroopSlot
        {...rest}
        troop={troop ? { ...troop, town: creatureById[troop.creature].town } : undefined}
      />
    );
  }
}
