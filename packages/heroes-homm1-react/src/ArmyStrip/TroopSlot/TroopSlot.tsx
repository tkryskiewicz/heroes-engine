import * as React from "react";

import "./TroopSlot.scss";

import { EmptyImage, SelectionImage } from "./assets";

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
  onClick: (index: number) => void;
}

export class TroopSlot extends React.Component<TroopSlotProps> {
  public static defaultProps: Pick<TroopSlotProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        className="troop-slot"
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
    return (
      <div className="troop-slot-creature">
        <CreatureIcon
          size="medium"
          creature={creature}
        />
      </div>
    );
  }

  private renderTroopCount(count: number) {
    return (
      <div className="troop-slot-count">
        <GameText size="normal">
          {count}
        </GameText>
      </div>
    );
  }

  private renderEmpty() {
    return (
      <img src={EmptyImage} />
    );
  }

  private renderSelection() {
    return (
      <img
        className="troop-slot-selection"
        src={SelectionImage}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.index);
  }
}
