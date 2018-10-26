import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army, Troop } from "heroes-core";

import { CreatureIcon } from "../CreatureIcon";
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
    const style: React.CSSProperties = {
      background: "url('assets/ui/combat-summary-window/background.jpg')",
      height: 459,
      padding: "38px 14px 20px 10px",
      width: 324,
    };

    const mainRowStyle: React.CSSProperties = {
      marginBottom: 10,
      textAlign: "center",
    };

    const detailRowStyle: React.CSSProperties = {
      marginBottom: 5,
      textAlign: "center",
    };

    return (
      <div style={style}>
        <Row style={mainRowStyle}>
          {this.renderAnimation()}
        </Row>
        <Row style={mainRowStyle}>
          <GameText size="large">
            <FormattedMessage {...messages.title} />
          </GameText>
        </Row>
        <Row style={mainRowStyle}>
          <GameText size="large">
            <FormattedMessage {...getHeroNameMessage(this.props.hero)}>
              {(heroName) => this.renderRewards(heroName.toString(), this.props.rewardedExperience)}
            </FormattedMessage>
          </GameText>
        </Row>
        <Row style={detailRowStyle}>
          <GameText size="normal">
            <FormattedMessage {...messages.casualtiesTitle} />
          </GameText>
        </Row>
        <Row style={detailRowStyle}>
          <GameText size="normal">
            Attacker
          </GameText>
          {this.renderCasualties(this.props.attackerCasualties)}
        </Row>
        <Row style={detailRowStyle}>
          <GameText size="normal">
            Defender
          </GameText>
          {this.renderCasualties(this.props.defenderCasualties)}
        </Row>
        <Row style={detailRowStyle}>
          <GameButton
            group="combat-won-window"
            type="okay"
            onClick={this.props.onOkayClick}
          />
        </Row>
      </div>
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

  private renderCasualties(casualties: Army) {
    if (casualties.length === 0) {
      return (
        <div>
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
    return (
      <div style={{ textAlign: "center" }}>
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
