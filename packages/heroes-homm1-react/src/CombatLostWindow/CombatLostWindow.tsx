import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army } from "heroes-core";

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
    const style: React.CSSProperties = {
      background: "url('assets/ui/combat-lost-window/animation-background.jpg')",
      display: "inline-block",
      height: 125,
      position: "relative",
      width: 223,
    };

    const animationStyle: React.CSSProperties = {
      left: 50,
      position: "absolute",
      top: 60,
    };

    return (
      <div style={style}>
        <img
          style={animationStyle}
          src="assets/ui/combat-lost-window/animation.png"
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
