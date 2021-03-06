import { Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Army } from "heroes-core";

import { AnimationImage, buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { GameText } from "../../core";
import { getHeroNameMessage } from "../../messages";
import { CombatSummaryWindow } from "../CombatSummaryWindow";
import { messages } from "./messages";

export interface CombatWonWindowProps {
  readonly hero: string;
  readonly rewardedExperience: number;
  readonly attackerCasualties: Army;
  readonly defenderCasualties: Army;
  readonly onOkayClick?: () => void;
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
              {(heroName: string) => this.renderRewards(heroName, this.props.rewardedExperience)}
            </FormattedMessage>
          </GameText>
        </Row>
      </CombatSummaryWindow>
    );
  }

  private renderAnimation() {
    return (
      <img src={AnimationImage} />
    );
  }

  private renderRewards(heroName: string, experience: number) {
    return (
      <FormattedMessage {...messages.rewardsMessage} values={{ heroName, experience }} />
    );
  }

  private renderActions(onOkayClick?: () => void) {
    return (
      <ImageButton
        images={buttonImages.okay}
        onClick={onOkayClick}
      />
    );
  }
}
