import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army, Troop } from "heroes-core";

import { CreatureIcon } from "../CreatureIcon";
import { GameText } from "../GameText";
import { messages } from "./messages";

export interface CombatSummaryWindowProps {
  attackerCasualties: Army;
  defenderCasualties: Army;
  actions: React.ReactNode;
}

export class CombatSummaryWindow extends React.Component<CombatSummaryWindowProps> {
  public render() {
    const style: React.CSSProperties = {
      background: "url('assets/ui/combat-summary-window/background.jpg')",
      height: 459,
      padding: "38px 22px 20px 18px",
      position: "relative",
      textAlign: "center",
      width: 324,
    };

    const summaryStyle: React.CSSProperties = {
      bottom: 25,
      position: "absolute",
      width: 324 - (22 + 18),
    };

    return (
      <div style={style}>
        {this.props.children}
        <div style={summaryStyle}>
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
      const style: React.CSSProperties = {
        lineHeight: "50px",
      };

      return (
        <div style={style}>
          <GameText size="normal">
            <FormattedMessage {...messages.noCasualties} />
          </GameText>
        </div>
      );
    }

    return (
      <div>
        {casualties.map((t) => t && this.renderCasualty(t))}
      </div>
    );
  }

  private renderCasualty(troop: Troop) {
    const style: React.CSSProperties = {
      marginRight: 5,
      padding: "0px 5px",
    };

    return (
      <div style={style}>
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
