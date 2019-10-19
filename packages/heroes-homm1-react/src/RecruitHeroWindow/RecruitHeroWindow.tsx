import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";
import { HeroClass } from "heroes-homm1";

import { GameModal, ResourceCost } from "../base";
import { GameText } from "../core";
import { messages } from "./messages";
import { RecruitHero } from "./RecruitHero";

export interface Hero {
  readonly id: string;
  readonly heroClass: HeroClass;
}

interface Props {
  readonly heroes: [Hero, Hero];
  readonly cost: Resources;
  readonly disabled: boolean;
  readonly visible?: boolean;
  readonly onHeroPortraitClick: (id: string) => void;
  readonly onRecruitHeroClick: (id: string) => void;
  readonly onCancelClick: () => void;
}

export type DefaultProp =
  "disabled" |
  "onHeroPortraitClick" |
  "onRecruitHeroClick" |
  "onCancelClick";

export class RecruitHeroWindow extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    disabled: false,
    onCancelClick: () => undefined,
    onHeroPortraitClick: () => undefined,
    onRecruitHeroClick: () => undefined,
  };

  public render() {
    return (
      <GameModal
        type="cancel"
        size={4}
        visible={this.props.visible}
        onCancelClick={this.props.onCancelClick}
      >
        <Row className="recruit-hero-window-title">
          <GameText size="large">
            <FormattedMessage {...messages.title} />
          </GameText>
        </Row>
        <Row>
          {this.props.heroes.map((h, i) => this.renderHero(i, h))}
        </Row>
        <Row className="recruit-hero-window-cost">
          <ResourceCost
            cost={this.props.cost}
          />
        </Row>
      </GameModal>
    );
  }

  private renderHero(index: number, hero: Hero) {
    return (
      <Col
        className="recruit-hero-window-hero"
        key={index}
        span={12}
      >
        <RecruitHero
          data-test-id={`hero${index}`}
          heroId={hero.id}
          heroClass={hero.heroClass}
          disabled={this.props.disabled}
          onPortraitClick={this.props.onHeroPortraitClick}
          onRecruitClick={this.props.onRecruitHeroClick}
        />
      </Col>
    );
  }
}

export type RecruitHeroWindowProps = ExtractPublicProps<typeof RecruitHeroWindow>;
