import * as React from "react";

import { Troop } from "heroes-core";

import * as styles from "./TradingTroopSlot.module.scss";

import { BackgroundImage } from "./assets";

import { CreatureIcon } from "../../base";
import { GameText } from "../../core";
import { TradingSlot } from "../TradingSlot";

export interface TradingTroopSlotProps {
  readonly index: number;
  readonly hero: string;
  readonly troop?: Troop;
  readonly selected: boolean;
  readonly onClick: (hero: string, index: number) => void;
}

export class TradingTroopSlot extends React.Component<TradingTroopSlotProps> {
  public static readonly defaultProps: Pick<TradingTroopSlotProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <TradingSlot
        index={this.props.index}
        selected={this.props.selected}
        onClick={this.onClick}
      >
        <div className={styles.root}>
          {this.renderBackground()}
          {this.props.troop && this.renderTroop(this.props.troop)}
          {this.props.troop && this.renderCount(this.props.troop.count)}
        </div>
      </TradingSlot>
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

  private readonly onClick = () => {
    this.props.onClick(this.props.hero, this.props.index);
  }
}
