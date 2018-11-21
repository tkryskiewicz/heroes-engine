import * as React from "react";

import { Troop } from "heroes-core";

import "./TroopSlot.scss";

import { CreatureIcon } from "../../CreatureIcon";
import { GameText } from "../../GameText";

export interface TroopSlotProps {
  index: number;
  troop?: Troop;
  selected?: boolean;
  onClick?: (index: number) => void;
}

export class TroopSlot extends React.Component<TroopSlotProps> {
  public render() {
    return (
      <div
        className="troop-slot"
        onClick={this.onClick}
      >
        {this.renderBackground()}
        {this.props.troop && this.renderTroop(this.props.troop)}
        {this.props.troop && this.renderCount(this.props.troop.count)}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderBackground() {
    return (
      <img src="assets/ui/hero-trading-window/troop-background.jpg" />
    );
  }

  private renderTroop(troop: Troop) {
    return (
      <div className="troop-slot-troop">
        <CreatureIcon
          size="small"
          creature={troop.creature}
        />
      </div>
    );
  }

  private renderCount(count: number) {
    return (
      <div className="troop-slot-count">
        <GameText size="small">
          {count}
        </GameText>
      </div>
    );
  }

  private renderSelection() {
    return (
      <img
        className="troop-slot-selection"
        src="assets/ui/hero-trading-window/selection.png"
      />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.index);
  }
}
