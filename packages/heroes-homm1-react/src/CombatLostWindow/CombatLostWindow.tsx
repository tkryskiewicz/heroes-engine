import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army } from "heroes-core";

import "./CombatLostWindow.scss";

import AnimationImage = require("./animation.png");

import { CombatSummaryWindow } from "../CombatSummaryWindow";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { getHeroNameMessage } from "../messages";
import { messages } from "./messages";

export interface CombatLostWindowProps {
  hero: string;
  attackerCasualties: Army;
  defenderCasualties: Army;
  onOkayClick?: () => void;
}

export class CombatLostWindow extends React.Component<CombatLostWindowProps> {
  public render() {
    return (
      <CombatSummaryWindow
        attackerCasualties={this.props.attackerCasualties}
        defenderCasualties={this.props.defenderCasualties}
        actions={this.renderActions(this.props.onOkayClick)}
      >
        <Row>
          {this.renderAnimation()}
        </Row>
        <Row>
          <GameText size="large">
            <FormattedMessage {...getHeroNameMessage(this.props.hero)}>
              {(heroName) => <FormattedMessage {...messages.title} values={{ heroName }} />}
            </FormattedMessage>
          </GameText>
        </Row>
      </CombatSummaryWindow>
    );
  }

  private renderAnimation() {
    return (
      <div className="combat-lost-window-animation-background">
        <img
          className="combat-lost-window-animation"
          src={AnimationImage}
        />
      </div>
    );
  }

  private renderActions(onOkayClick?: () => void) {
    return (
      <GameButton
        group="combat-lost-window"
        type="okay"
        onClick={onOkayClick}
      />
    );
  }
}
