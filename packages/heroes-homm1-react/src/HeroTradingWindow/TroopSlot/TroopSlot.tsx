import * as React from "react";

import { Troop } from "heroes-core";

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
    const style: React.CSSProperties = {
      display: "inline-block",
      position: "relative",
    };

    return (
      <div
        style={style}
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
    const style: React.CSSProperties = {
      left: 1,
      position: "absolute",
      top: 1,
    };

    return (
      <div style={style}>
        <CreatureIcon
          size="small"
          creature={troop.creature}
        />
      </div>
    );
  }

  private renderCount(count: number) {
    const style: React.CSSProperties = {
      textAlign: "center",
    };

    return (
      <div style={style}>
        <GameText size="small">
          {count}
        </GameText>
      </div>
    );
  }

  private renderSelection() {
    const style: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    return (
      <img
        style={style}
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
