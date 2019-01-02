import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { Army, Hero, HeroSkills } from "heroes-core";
import { ArmySize, ArtifactLimit, SkillIds } from "heroes-homm1";

import "./HeroTradingWindow.scss";

import { GameButton, HeroPortrait } from "../base";
import { GameText, GameWindow } from "../core";
import { getHeroNameMessage, getSkillNameMessage } from "../messages";
import { ArtifactSlot } from "./ArtifactSlot";
import { messages } from "./messages";
import { TroopSlot } from "./TroopSlot";

export interface HeroTradingWindowProps {
  hero: Hero;
  otherHero: Hero;
  visible?: boolean;
  onExitClick: () => void;
}

class HeroTradingWindow extends React.Component<HeroTradingWindowProps & InjectedIntlProps> {
  public static defaultProps: Pick<HeroTradingWindowProps, "onExitClick"> = {
    onExitClick: () => undefined,
  };

  public render() {
    const { hero, otherHero } = this.props;

    return (
      <GameWindow
        width={448}
        visible={this.props.visible}
      >
        <div className="hero-trading-window">
          <div className="hero-trading-window-title">
            <GameText size="large">
              {this.getTitle(hero.id, otherHero.id)}
            </GameText>
          </div>
          <div className="hero-trading-window-portrait">
            <HeroPortrait
              hero={this.props.hero.id}
            />
          </div>
          <div className="hero-trading-window-other-portrait">
            <HeroPortrait
              hero={this.props.otherHero.id}
            />
          </div>
          <div className="hero-trading-window-army">
            {this.renderHeroArmy(this.props.hero.army)}
          </div>
          <div className="hero-trading-window-other-army">
            {this.renderHeroArmy(this.props.otherHero.army)}
          </div>
          <div className="hero-trading-window-skills">
            <div className="hero-trading-window-skills-container">
              {this.renderSkills(this.props.hero, this.props.otherHero)}
            </div>
          </div>
          <div className="hero-trading-window-artifacts">
            {this.renderArtifacts()}
          </div>
          <div className="hero-trading-window-other-artifacts">
            {this.renderArtifacts()}
          </div>
          <div className="hero-trading-window-exit">
            <GameButton
              group="hero-trading-window"
              type="exit"
              onClick={this.props.onExitClick}
            />
          </div>
        </div>
      </GameWindow>
    );
  }

  private getTitle(hero: string, otherHero: string) {
    const { formatMessage } = this.props.intl;

    const heroName = formatMessage(getHeroNameMessage(hero));
    const otherHeroName = formatMessage(getHeroNameMessage(otherHero));

    const title = formatMessage(messages.title, { heroName, otherHeroName });

    return title;
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
      <div
        key={i}
        className="hero-trading-window-troop"
      >
        <TroopSlot
          index={i}
          troop={army[i]}
        />
      </div>
    ));
  }

  private renderArtifacts() {
    return [...new Array(ArtifactLimit).keys()].map((i) => (
      <div
        key={i}
        className="hero-trading-window-artifact"
      >
        <ArtifactSlot
          index={i}
        />
      </div>
    ));
  }
}

const HeroTradingWindowWrapped = injectIntl<typeof HeroTradingWindow, HeroTradingWindowProps>(HeroTradingWindow);

export { HeroTradingWindowWrapped as HeroTradingWindow };
