import * as React from "react";

import { Army, Troop } from "heroes-core";
import { ArmySize } from "heroes-homm1";

import * as styles from "./ArmyStrip.module.scss";

import { TroopSlot } from "./TroopSlot";

export interface ArmyStripProps {
  readonly army: Army;
  readonly onTroopMouseEnter: (index: number) => void;
  readonly onTroopMouseLeave: (index: number) => void;
  readonly selectedTroopIndex?: number;
  readonly onSelectTroop: (index: number) => void;
  readonly onSelectedTroopClick: (index: number) => void;
  readonly onSwapTroops: (index: number, withIndex: number) => void;
}

type DefaultProp =
  "onTroopMouseEnter" |
  "onTroopMouseLeave" |
  "onSelectTroop" |
  "onSelectedTroopClick" |
  "onSwapTroops";

export class ArmyStrip extends React.Component<ArmyStripProps> {
  public static readonly defaultProps: Pick<ArmyStripProps, DefaultProp> = {
    onSelectTroop: () => undefined,
    onSelectedTroopClick: () => undefined,
    onSwapTroops: () => undefined,
    onTroopMouseEnter: () => undefined,
    onTroopMouseLeave: () => undefined,
  };

  public render() {
    const troops = [...new Array(ArmySize).keys()]
      .map((i) => this.renderTroop(i, this.props.army[i], this.props.selectedTroopIndex === i));

    return (
      <div className={styles.root}>
        {troops}
      </div>
    );
  }

  private renderTroop(index: number, troop: Troop | undefined, selected: boolean) {
    return (
      <div
        className={styles.troop}
        key={index}
      >
        <TroopSlot
          index={index}
          troop={troop}
          selected={selected}
          onMouseEnter={this.props.onTroopMouseEnter}
          onMouseLeave={this.props.onTroopMouseLeave}
          onClick={this.onTroopClick}
        />
      </div>
    );
  }

  private readonly onTroopClick = (index: number) => {
    const { selectedTroopIndex } = this.props;

    if (selectedTroopIndex === undefined && this.props.army[index]) {
      this.props.onSelectTroop(index);
    } else if (index === selectedTroopIndex) {
      this.props.onSelectedTroopClick(index);
    } else if (selectedTroopIndex !== undefined && index !== selectedTroopIndex) {
      this.props.onSwapTroops(selectedTroopIndex, index);
    }
  }
}
