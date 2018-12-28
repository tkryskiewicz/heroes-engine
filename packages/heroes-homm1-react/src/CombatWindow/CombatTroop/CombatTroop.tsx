import * as React from "react";

import { CombatSide } from "heroes-core";

import "./CombatTroop.scss";

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
    return (
      <div className={`combat-troop combat-troop-${this.props.side}`}>
        <div className="combat-troop-creature">
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
      <div className="combat-troop-count">
        <GameParagraph textSize="tiny">
          {value}
        </GameParagraph>
      </div>
    );
  }

  private renderSelection(creature: string) {
    return (
      <img
        className="combat-troop-selection"
        src={`assets/creatures/${creature}/selection.png`}
      />
    );
  }
}
