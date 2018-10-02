import * as React from "react";

import { Army } from "heroes-core";
import { ArmySize } from "heroes-homm1";

import { TroopSlot } from "../TroopSlot";

export interface ArmyStripProps {
  army: Army;
  selectedTroopIndex?: number;
  onSelectTroop?: (index: number) => void;
  onSelectedTroopClick?: (index: number) => void;
  onSwapTroops?: (index: number, withIndex: number) => void;
}

export class ArmyStrip extends React.Component<ArmyStripProps> {
  public render() {
    return [...new Array(ArmySize).keys()].map((i) => (
      <TroopSlot
        key={i}
        index={i}
        troop={this.props.army[i]}
        selected={i === this.props.selectedTroopIndex}
        onClick={this.onTroopClick}
      />
    ));
  }

  private onTroopClick = (index: number) => {
    const { selectedTroopIndex } = this.props;

    if (index !== selectedTroopIndex && this.props.army[index] && this.props.onSelectTroop) {
      this.props.onSelectTroop(index);
    } else if (index === selectedTroopIndex && this.props.onSelectedTroopClick) {
      this.props.onSelectedTroopClick(index);
    } else if (selectedTroopIndex !== undefined && index !== selectedTroopIndex && this.props.onSwapTroops) {
      this.props.onSwapTroops(selectedTroopIndex, index);
    }
  }
}
