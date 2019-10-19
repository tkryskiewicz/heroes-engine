import { Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { HeroClass } from "heroes-homm1";

import * as styles from "./RecruitHero.module.scss";

import { buttonImages } from "./assets";

import { Frame, HeroPortrait, ImageButton } from "../../base";
import { GameText } from "../../core";
import { getHeroClassNameMessage } from "../../messages";

interface Props {
  readonly heroId: string;
  readonly heroClass: HeroClass;
  readonly disabled: boolean;
  readonly onPortraitClick: (id: string) => void;
  readonly onRecruitClick: (id: string) => void;
}

type DefaultProp =
  "disabled" |
  "onPortraitClick" |
  "onRecruitClick";

export class RecruitHero extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
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
              data-test-id="portrait"
              hero={this.props.heroId}
              onClick={this.onPortraitClick}
            />
          </Frame>
        </Row>
        <Row className={styles.heroName}>
          <GameText
            data-test-id="hero-class"
            size="normal"
          >
            <FormattedMessage {...getHeroClassNameMessage(this.props.heroClass)} />
          </GameText>
        </Row>
        <Row>
          <ImageButton
            data-test-id="recruit"
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

export type RecruitHeroProps = ExtractPublicProps<typeof RecruitHero>;
