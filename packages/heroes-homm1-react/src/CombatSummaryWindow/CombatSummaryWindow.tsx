import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army, Troop } from "heroes-core";

import "./CombatSummaryWindow.scss";

import { GameText } from "../core";
import { CreatureIcon } from "../CreatureIcon";
import { messages } from "./messages";

export interface CombatSummaryWindowProps {
  attackerCasualties: Army;
  defenderCasualties: Army;
  actions: React.ReactNode;
}

export class CombatSummaryWindow extends React.Component<CombatSummaryWindowProps> {
  public render() {
    return (
      <div className="combat-summary-window">
        {this.props.children}
        <div className="combat-summary-window-summary">
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.casualtiesTitle} />
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.attacker} />
            </GameText>
            {this.renderCasualties(this.props.attackerCasualties)}
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.defender} />
            </GameText>
            {this.renderCasualties(this.props.defenderCasualties)}
          </Row>
          <Row>
            {this.props.actions}
          </Row>
        </div>
      </div>
    );
  }

  private renderCasualties(casualties: Army) {
    if (casualties.length === 0) {
      return (
        <div className="combat-summary-window-casualties">
          <GameText size="normal">
            <FormattedMessage {...messages.noCasualties} />
          </GameText>
        </div>
      );
    }

    return (
      <div>
        {casualties.map((t, i) => t && this.renderCasualty(i, t))}
      </div>
    );
  }

  private renderCasualty(index: number, troop: Troop) {
    return (
      <div
        className="combat-summary-window-casualty"
        key={index}
      >
        <CreatureIcon
          size="small"
          creature={troop.creature}
        />
        <div>
          <GameText size="small">
            {troop.count}
          </GameText>
        </div>
      </div>
    );
  }
}
