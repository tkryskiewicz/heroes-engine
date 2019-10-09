import { Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { HeroClass } from "heroes-homm1";

import * as styles from "./RecruitHero.module.scss";

import { buttonImages } from "./assets";

import { Frame, HeroPortrait, ImageButton } from "../../base";
import { GameText } from "../../core";
import { getHeroClassNameMessage } from "../../messages";

export interface RecruitHeroProps {
  readonly heroId: string;
  readonly heroClass: HeroClass;
  readonly disabled: boolean;
  readonly onPortraitClick: (id: string) => void;
  readonly onRecruitClick: (id: string) => void;
}

export class RecruitHero extends React.Component<RecruitHeroProps> {
  public static readonly defaultProps: Pick<RecruitHeroProps, "disabled" | "onPortraitClick" | "onRecruitClick"> = {
    disabled: false,
    onPortraitClick: () => undefined,
    onRecruitClick: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <Row>
          <Frame>
            <HeroPortrait
              hero={this.props.heroId}
              onClick={this.onPortraitClick}
            />
          </Frame>
        </Row>
        <Row className={styles.heroName}>
          <GameText size="normal">
            <FormattedMessage {...getHeroClassNameMessage(this.props.heroClass)} />
          </GameText>
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.recruit}
            disabled={this.props.disabled}
            onClick={this.onRecruitClick}
          />
        </Row>
      </div>
    );
  }

  private readonly onPortraitClick = () => {
    this.props.onPortraitClick(this.props.heroId);
  }

  private readonly onRecruitClick = () => {
    this.props.onRecruitClick(this.props.heroId);
  }
}
