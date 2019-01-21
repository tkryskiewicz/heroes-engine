import * as React from "react";

import { CombatSide } from "heroes-core";

import * as styles from "./CombatTroop.module.scss";

import { CreatureIcon } from "../../base";
import { GameParagraph } from "../../core";

export interface CombatTroopProps {
  side: CombatSide;
  creature: string;
  count: number;
  selected: boolean;
}

export class CombatTroop extends React.Component<CombatTroopProps> {
  public static defaultProps: Pick<CombatTroopProps, "selected"> = {
    selected: false,
  };

  public render() {
    const { side } = this.props;

    return (
      <div className={styles.root}>
        <div className={side === CombatSide.Attacker ? undefined : styles.defenderCreature}>
          <CreatureIcon
            size="large"
            creature={this.props.creature}
          />
        </div>
        {this.renderCount(this.props.count)}
        {this.props.selected && this.renderSelection(this.props.creature)}
      </div>
    );
  }

  private renderCount(value: number) {
    const sideStyles = this.props.side === CombatSide.Attacker ? styles.attackerCount : undefined;

    return (
      <div className={`${styles.count} ${sideStyles}`}>
        <GameParagraph textSize="tiny">
          {value}
        </GameParagraph>
      </div>
    );
  }

  private renderSelection(creature: string) {
    return (
      <img
        className={styles.selection}
        src={`assets/creatures/${creature}/selection.png`}
      />
    );
  }
}
