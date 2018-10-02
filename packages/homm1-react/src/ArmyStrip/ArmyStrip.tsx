import * as React from "react";

import { Army } from "heroes-core";
import { ArmySize } from "heroes-homm1";

import { TroopSlot } from "../TroopSlot";

export interface ArmyStripProps {
  army: Army;
  selectedTroopIndex?: number;
  onSelectTroop?: (index: number) => void;
}

export class ArmyStrip extends React.Component<ArmyStripProps> {
  public render() {
    return [...new Array(ArmySize).keys()].map((i) => (
      <TroopSlot
        index={i}
        troop={this.props.army[i]}
        selected={i === this.props.selectedTroopIndex}
        onClick={this.onTroopClick}
      />
    ));
  }

  private onTroopClick = (index: number) => {
    if (!this.props.onSelectTroop) {
      return;
    }

    if (index !== this.props.selectedTroopIndex && this.props.army[index]) {
      this.props.onSelectTroop(index);
    }
  }
}
