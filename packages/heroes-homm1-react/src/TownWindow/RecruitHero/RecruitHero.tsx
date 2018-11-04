import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { HeroClass } from "heroes-homm1";

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
    const style: React.CSSProperties = {
      display: "inline-block",
    };

    const portraitStyle: React.CSSProperties = {
      background: "url('assets/ui/recruit-hero-window/portrait-border.png')",
      height: 105,
      padding: "6px 5px 6px 5px",
      textAlign: "center",
      width: 111,
    };

    return (
      <div style={style}>
        <Row>
          <div style={portraitStyle}>
            <HeroPortrait
              hero={this.props.heroId}
              onClick={this.onPortraitClick}
            />
          </div>
        </Row>
        <Row style={{ textAlign: "center" }}>
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
