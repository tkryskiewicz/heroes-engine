import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { HeroSkills } from "heroes-core";
import { SkillIds } from "heroes-homm1";

import * as styles from "./HeroTradingWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";
import { getSkillNameMessage } from "../messages";

const TroopSlotCount = 5;
const ArtifactSlotCount = 14;

interface Hero {
  readonly id: string;
  readonly skills: HeroSkills;
}

interface HeroTradingWindowProps extends InjectedIntlProps, WithGameWindowProps {
  readonly title: string;
  readonly hero: Hero;
  readonly otherHero: Hero;
  readonly renderHeroPortrait: (hero: string) => React.ReactNode;
  readonly renderTroop: (hero: string, index: number) => React.ReactNode;
  readonly renderArtifact: (hero: string, index: number) => React.ReactNode;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "title" |
  "renderHeroPortrait" |
  "renderTroop" |
  "renderArtifact" |
  "onExitClick";

class HeroTradingWindow extends React.Component<HeroTradingWindowProps> {
  public static readonly defaultProps: Pick<HeroTradingWindowProps, DefaultProp> = {
    onExitClick: () => undefined,
    renderArtifact: () => undefined,
    renderHeroPortrait: () => undefined,
    renderTroop: () => undefined,
    title: "",
  };

  public render() {
    const { hero, otherHero } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.title}>
          <GameText size="large">
            {this.props.title}
          </GameText>
        </div>
        <div className={styles.portrait}>
          {this.props.renderHeroPortrait(hero.id)}
        </div>
        <div className={styles.otherPortrait}>
          {this.props.renderHeroPortrait(otherHero.id)}
        </div>
        <div className={styles.army}>
          {this.renderHeroArmy(hero.id)}
        </div>
        <div className={styles.otherArmy}>
          {this.renderHeroArmy(otherHero.id)}
        </div>
        <div className={styles.skills}>
          {this.renderSkills(hero, otherHero)}
        </div>
        <div className={styles.artifacts}>
          {this.renderArtifacts(hero.id)}
        </div>
        <div className={styles.otherArtifacts}>
          {this.renderArtifacts(otherHero.id)}
        </div>
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
            onClick={this.props.onExitClick}
          />
        </div>
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

  private renderHeroArmy(hero: string) {
    return [...new Array(TroopSlotCount).keys()].map((i) => (
      <div
        key={i}
        className={styles.troop}
      >
        {this.props.renderTroop(hero, i)}
      </div>
    ));
  }

  private renderArtifacts(hero: string) {
    return [...new Array(ArtifactSlotCount).keys()].map((i) => {
      return (
        <div
          key={i}
          className={styles.artifact}
        >
          {this.props.renderArtifact(hero, i)}
        </div>
      );
    });
  }
}

const ComponentWrapped = injectIntl(
  withGameWindow(448)(HeroTradingWindow),
);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as HeroTradingWindow,
  ComponentWrappedProps as HeroTradingWindowProps,
};
