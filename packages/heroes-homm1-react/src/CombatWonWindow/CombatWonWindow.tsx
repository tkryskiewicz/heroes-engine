import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army } from "heroes-core";

import { CombatSummaryWindow } from "../CombatSummaryWindow";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { getHeroNameMessage } from "../messages";
import { messages } from "./messages";

export interface CombatWonWindowProps {
  hero: string;
  rewardedExperience: number;
  attackerCasualties: Army;
  defenderCasualties: Army;
  onOkayClick?: () => void;
}

export class CombatWonWindow extends React.Component<CombatWonWindowProps> {
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
            <FormattedMessage {...messages.title} />
          </GameText>
        </Row>
        <Row>
          <GameText size="large">
            <FormattedMessage {...getHeroNameMessage(this.props.hero)}>
              {(heroName) => this.renderRewards(heroName.toString(), this.props.rewardedExperience)}
            </FormattedMessage>
          </GameText>
        </Row>
      </CombatSummaryWindow>
    );
  }

  private renderAnimation() {
    return (
      <img src="assets/ui/combat-won-window/animation.jpg" />
    );
  }

  private renderRewards(heroName: string, experience: number) {
    return (
      <FormattedMessage {...messages.rewardsMessage} values={{ heroName, experience }} />
    );
  }

  private renderActions(onOkayClick?: () => void) {
    return (
      <GameButton
        group="combat-won-window"
        type="okay"
        onClick={onOkayClick}
      />
    );
  }
}
