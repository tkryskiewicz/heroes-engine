import * as React from "react";

import { Troop } from "heroes-core";

import * as styles from "./TroopSlot.module.scss";

import { BackgroundImage } from "./assets";

import { CreatureIcon } from "../../base";
import { GameText } from "../../core";
import { Slot } from "../Slot";

export interface TroopSlotProps {
  index: number;
  troop?: Troop;
  selected: boolean;
  onClick: (index: number) => void;
}

export class TroopSlot extends React.Component<TroopSlotProps> {
  public static defaultProps: Pick<TroopSlotProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <Slot
        index={this.props.index}
        selected={this.props.selected}
        onClick={this.props.onClick}
      >
        <div className={styles.root}>
          {this.renderBackground()}
          {this.props.troop && this.renderTroop(this.props.troop)}
          {this.props.troop && this.renderCount(this.props.troop.count)}
        </div>
      </Slot>
    );
  }

  private renderBackground() {
    return (
      <img src={BackgroundImage} />
    );
  }

  private renderTroop(troop: Troop) {
    return (
      <div className={styles.troop}>
        <CreatureIcon
          size="small"
          creature={troop.creature}
        />
      </div>
    );
  }

  private renderCount(count: number) {
    return (
      <div className={styles.count}>
        <GameText size="small">
          {count}
        </GameText>
      </div>
    );
  }
}
