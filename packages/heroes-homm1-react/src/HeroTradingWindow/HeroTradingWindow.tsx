import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Army, Hero, HeroSkills } from "heroes-core";
import { ArmySize, ArtifactLimit, SkillIds } from "heroes-homm1";

import "./HeroTradingWindow.scss";

import { Frame, GameButton, HeroPortrait } from "../base";
import { GameText } from "../core";
import { getSkillNameMessage } from "../messages";
import { ArtifactSlot } from "./ArtifactSlot";
import { TroopSlot } from "./TroopSlot";

export interface HeroTradingWindowProps {
  hero: Hero;
  otherHero: Hero;
  onExitClick?: () => void;
}

export class HeroTradingWindow extends React.Component<HeroTradingWindowProps> {
  public render() {
    return (
      <div className="hero-trading-window">
        <Row>
          <Col span={6}>
            <Frame>
              <HeroPortrait
                hero={this.props.hero.id}
              />
            </Frame>
          </Col>
          <Col span={12}>
            {this.renderSkills(this.props.hero, this.props.otherHero)}
          </Col>
          <Col span={6}>
            <Frame>
              <HeroPortrait
                hero={this.props.otherHero.id}
              />
            </Frame>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            {this.renderHeroArmy(this.props.hero.army)}
          </Col>
          <Col span={4} />
          <Col span={10}>
            {this.renderHeroArmy(this.props.otherHero.army)}
          </Col>
        </Row>
        <Row>
          <Col
            push={4}
            span={2}
          >
            {this.renderArtifacts()}
          </Col>
          <Col
            push={14}
            span={2}
          >
            {this.renderArtifacts()}
          </Col>
        </Row>
        <Row className="hero-trading-window-exit">
          <GameButton
            group="hero-trading-window"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </Row>
      </div>
    );
  }

  private renderSkills(hero: Hero, otherHero: Hero) {
    return (
      <Row>
        <Col span={4}>
          {this.renderHeroSkills(hero.skills)}
        </Col>
        <Col span={16}>
          {this.renderSkillNames()}
        </Col>
        <Col span={4}>
          {this.renderHeroSkills(otherHero.skills)}
        </Col>
      </Row>
    );
  }

  private renderSkillNames() {
    return SkillIds.map((s) => (
      <Row key={s}>
        <GameText size="normal">
          <FormattedMessage {...getSkillNameMessage(s)} />
        </GameText>
      </Row>
    ));
  }

  private renderHeroSkills(skills: HeroSkills) {
    return SkillIds.map((s) => (
      <Row key={s}>
        <GameText size="normal">
          {skills[s] || 0}
        </GameText>
      </Row>
    ));
  }

  private renderHeroArmy(army: Army) {
    return [...new Array(ArmySize).keys()].map((i) => (
      <Col
        key={i}
        span={4}
      >
        <TroopSlot
          index={i}
          troop={army[i]}
        />
      </Col>
    ));
  }

  private renderArtifacts() {
    return [...new Array(ArtifactLimit).keys()].map((i) => (
      <Col
        key={i}
        span={12}
      >
        <ArtifactSlot
          index={i}
        />
      </Col>
    ));
  }
}
