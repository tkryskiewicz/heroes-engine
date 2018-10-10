import * as React from "react";

import { CreatureIcon } from "../../CreatureIcon";
import { GameText } from "../../GameText";

interface Troop {
  creature: string;
  town?: string;
  count: number;
}

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
      height: 93,
      position: "relative",
      width: 82,
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.props.troop ? this.renderTroop(this.props.troop) : this.renderEmpty()}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderTroop(troop: Troop) {
    return (
      <>
        {this.renderTroopBackground(troop.town)}
        {this.renderCreature(troop.creature)}
        {this.renderTroopCount(troop.count)}
      </>
    );
  }

  private renderTroopBackground(town?: string) {
    return (
      <img src={`assets/towns/${town ? `${town}/` : ""}troop-background.jpg`} />
    );
  }

  private renderCreature(creature: string) {
    const style: React.CSSProperties = {
      bottom: 5,
      position: "absolute",
      textAlign: "center",
      width: "100%",
    };

    return (
      <div style={style}>
        <CreatureIcon
          size="medium"
          creature={creature}
        />
      </div>
    );
  }

  private renderTroopCount(count: number) {
    const style: React.CSSProperties = {
      bottom: 2,
      position: "absolute",
      right: 7,
    };

    return (
      <div style={style}>
        <GameText size="normal">
          {count}
        </GameText>
      </div>
    );
  }

  private renderEmpty() {
    return (
      <img src="assets/ui/troop-slot/empty.jpg" />
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
        src="assets/ui/troop-slot/selection.png"
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
