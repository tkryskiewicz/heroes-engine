import * as React from "react";

import { CombatSide } from "heroes-core";

import "./CombatTroop.scss";

import { CreatureIcon } from "../../base";
import { GameParagraph } from "../../core";

export interface CombatTroopProps {
  side: CombatSide;
  creature: string;
  count: number;
}

export class CombatTroop extends React.Component<CombatTroopProps> {
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
}
