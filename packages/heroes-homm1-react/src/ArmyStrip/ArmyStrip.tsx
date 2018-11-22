import * as React from "react";

import { Army, Troop } from "heroes-core";
import { ArmySize } from "heroes-homm1";

import "./ArmyStrip.scss";

import { TroopSlot } from "./TroopSlot";

export interface ArmyStripProps {
  army: Army;
  selectedTroopIndex?: number;
  onSelectTroop?: (index: number) => void;
  onSelectedTroopClick?: (index: number) => void;
  onSwapTroops?: (index: number, withIndex: number) => void;
}

export class ArmyStrip extends React.Component<ArmyStripProps> {
  public render() {
    const troops = [...new Array(ArmySize).keys()]
      .map((i) => this.renderTroop(i, this.props.army[i], this.props.selectedTroopIndex === i));

    return (
      <div className="army-strip" >
        {troops}
      </div>
    );
  }

  private renderTroop(index: number, troop: Troop | undefined, selected: boolean) {
    return (
      <div
        className="army-strip-troop"
        key={index}
      >
        <TroopSlot
          index={index}
          troop={troop}
          selected={selected}
          onClick={this.onTroopClick}
        />
      </div>
    );
  }

  private onTroopClick = (index: number) => {
    const { selectedTroopIndex } = this.props;

    if (selectedTroopIndex === undefined && this.props.army[index] && this.props.onSelectTroop) {
      this.props.onSelectTroop(index);
    } else if (index === selectedTroopIndex && this.props.onSelectedTroopClick) {
      this.props.onSelectedTroopClick(index);
    } else if (selectedTroopIndex !== undefined && index !== selectedTroopIndex && this.props.onSwapTroops) {
      this.props.onSwapTroops(selectedTroopIndex, index);
    }
  }
}
