import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army, Troop } from "heroes-core";
import { GameText } from "heroes-homm1-react-components";

import * as styles from "./CombatSummaryWindow.module.scss";

import { CreatureIcon } from "../base";
import { messages } from "./messages";

export interface CombatSummaryWindowProps {
  readonly attackerCasualties: Army;
  readonly defenderCasualties: Army;
  readonly actions: React.ReactNode;
}

export class CombatSummaryWindow extends React.Component<CombatSummaryWindowProps> {
  public render() {
    return (
      <div className={styles.root}>
        {this.props.children}
        <div className={styles.summary}>
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
        <div className={styles.casualties}>
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
        className={styles.casualty}
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
