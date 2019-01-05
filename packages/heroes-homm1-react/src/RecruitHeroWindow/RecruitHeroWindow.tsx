import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { enoughResources, Resources } from "heroes-core";
import { HeroClass } from "heroes-homm1";

import { GameModal, ResourceCost } from "../base";
import { GameText } from "../core";
import { messages } from "./messages";
import { RecruitHero } from "./RecruitHero";

export interface Hero {
  id: string;
  heroClass: HeroClass;
}

export interface RecruitHeroWindowProps {
  heroes: Hero[];
  resources: Resources;
  cost: Resources;
  visible?: boolean;
  onHeroPortraitClick?: (id: string) => void;
  onRecruitHeroClick?: (id: string) => void;
  onCancelClick?: () => void;
}

export class RecruitHeroWindow extends React.Component<RecruitHeroWindowProps> {
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
          {this.props.heroes.map((h) => this.renderHero(h, this.props.resources, this.props.cost))}
        </Row>
        <Row className="recruit-hero-window-cost">
          <ResourceCost
            cost={this.props.cost}
          />
        </Row>
      </GameModal>
    );
  }

  private renderHero(hero: Hero, resources: Resources, cost: Resources) {
    return (
      <Col
        className="recruit-hero-window-hero"
        key={hero.id}
        span={12}
      >
        <RecruitHero
          heroId={hero.id}
          heroClass={hero.heroClass}
          disabled={!enoughResources(resources, cost)}
          onPortraitClick={this.props.onHeroPortraitClick}
          onRecruitClick={this.props.onRecruitHeroClick}
        />
      </Col>
    );
  }
}
