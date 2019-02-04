import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army } from "heroes-core";
import { GameText } from "heroes-homm1-react-components";

import { AnimationImage, buttonImages } from "./assets";

import { ImageButton } from "../base";
import { CombatSummaryWindow } from "../CombatSummaryWindow";
import { getHeroNameMessage } from "../messages";
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
              {(heroName) => this.renderRewards(heroName.toString(), this.props.rewardedExperience)}
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
