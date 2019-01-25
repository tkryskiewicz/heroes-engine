import * as React from "react";

import { CombatSide } from "heroes-core";

import * as styles from "./CombatTroop.module.scss";

import { CreatureIcon } from "../../base";
import { GameParagraph } from "../../core";

export interface CombatTroopProps {
  readonly side: CombatSide;
  readonly creature: string;
  readonly count: number;
  readonly selected: boolean;
}

export class CombatTroop extends React.Component<CombatTroopProps> {
  public static readonly defaultProps: Pick<CombatTroopProps, "selected"> = {
    selected: false,
  };

  public render() {
    const { side } = this.props;

    return (
      <div className={`${styles.root} ${side === CombatSide.Attacker ? styles.attacker : styles.defender}`}>
        <div className={styles.creature}>
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
    return (
      <div className={styles.count}>
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
