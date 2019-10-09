import React from "react";

import * as styles from "./TroopSlot.module.scss";

import { EmptyImage, SelectionImage } from "./assets";

import { GameText } from "../../core";
import { CreatureIcon } from "../CreatureIcon";

interface Troop {
  readonly creature: string;
  readonly town?: string;
  readonly count: number;
}

export interface TroopSlotProps {
  readonly index: number;
  readonly troop?: Troop;
  readonly selected?: boolean;
  readonly onMouseEnter: (index: number) => void;
  readonly onMouseLeave: (index: number) => void;
  readonly onClick: (index: number) => void;
}

export class TroopSlot extends React.Component<TroopSlotProps> {
  public static readonly defaultProps: Pick<TroopSlotProps, "onMouseEnter" | "onMouseLeave" | "onClick"> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
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
      <div className={styles.creature}>
        <CreatureIcon
          size="medium"
          creature={creature}
        />
      </div>
    );
  }

  private renderTroopCount(count: number) {
    return (
      <div className={styles.count}>
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
        className={styles.selection}
        src={SelectionImage}
      />
    );
  }

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.index);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.index);
  }
}
