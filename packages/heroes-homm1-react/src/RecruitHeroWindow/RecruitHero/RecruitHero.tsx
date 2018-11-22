import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { HeroClass } from "heroes-homm1";

import "./RecruitHero.scss";

import { Frame } from "../../Frame";
import { GameButton } from "../../GameButton";
import { GameText } from "../../GameText";
import { HeroPortrait } from "../../HeroPortrait";
import { getHeroClassNameMessage } from "../../messages";

export interface RecruitHeroProps {
  heroId: string;
  heroClass: HeroClass;
  disabled?: boolean;
  onPortraitClick?: (id: string) => void;
  onRecruitClick?: (id: string) => void;
}

export class RecruitHero extends React.Component<RecruitHeroProps> {
  public render() {
    return (
      <div className="recruit-hero">
        <Row>
          <Frame>
            <HeroPortrait
              hero={this.props.heroId}
              onClick={this.onPortraitClick}
            />
          </Frame>
        </Row>
        <Row className="recruit-hero-hero-name">
          <GameText size="normal">
            <FormattedMessage {...getHeroClassNameMessage(this.props.heroClass)} />
          </GameText>
        </Row>
        <Row>
          <GameButton
            group="recruit-hero-window"
            type="recruit"
            disabled={this.props.disabled}
            onClick={this.onRecruitClick}
          />
        </Row>
      </div>
    );
  }

  private onPortraitClick = () => {
    if (!this.props.onPortraitClick) {
      return;
    }

    this.props.onPortraitClick(this.props.heroId);
  }

  private onRecruitClick = () => {
    if (!this.props.onRecruitClick) {
      return;
    }

    this.props.onRecruitClick(this.props.heroId);
  }
}