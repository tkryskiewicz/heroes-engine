import * as React from "react";
import { InjectedIntlProps, injectIntl } from "react-intl";

import { HeroSkills } from "heroes-core";
import { ArtifactLimit, SkillIds } from "heroes-homm1";

import * as styles from "./HeroWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";

interface Hero {
  readonly skills: HeroSkills;
}

interface HeroWindowProps extends InjectedIntlProps, WithGameWindowProps {
  readonly hero: Hero;
  readonly title: string;
  readonly renderHeroPortrait: () => React.ReactNode;
  readonly renderSkill: (skill: string, value: number) => React.ReactNode;
  readonly renderAdditionalStats: () => React.ReactNode;
  readonly renderCrest: () => React.ReactNode;
  readonly renderArmy: () => React.ReactNode;
  readonly renderArtifact: (index: number) => React.ReactNode;

  readonly dismissVisible: boolean;
  readonly onDismissMouseEnter: () => void;
  readonly onDismissMouseLeave: () => void;
  readonly onDismissClick: () => void;

  readonly onExitMouseEnter: () => void;
  readonly onExitMouseLeave: () => void;
  readonly onExitClick: () => void;

  readonly statusText: string;
}

type DefaultProp =
  "title" |
  "renderHeroPortrait" |
  "renderSkill" |
  "renderAdditionalStats" |
  "renderCrest" |
  "renderArmy" |
  "renderArtifact" |
  "dismissVisible" |
  "onDismissMouseEnter" |
  "onDismissMouseLeave" |
  "onDismissClick" |
  "onExitMouseEnter" |
  "onExitMouseLeave" |
  "onExitClick" |
  "statusText";

class HeroWindow extends React.Component<HeroWindowProps> {
  public static readonly defaultProps: Pick<HeroWindowProps, DefaultProp> = {
    dismissVisible: false,
    onDismissClick: () => undefined,
    onDismissMouseEnter: () => undefined,
    onDismissMouseLeave: () => undefined,
    onExitClick: () => undefined,
    onExitMouseEnter: () => undefined,
    onExitMouseLeave: () => undefined,
    renderAdditionalStats: () => undefined,
    renderArmy: () => undefined,
    renderArtifact: () => undefined,
    renderCrest: () => undefined,
    renderHeroPortrait: () => undefined,
    renderSkill: () => undefined,
    statusText: "",
    title: "",
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.title}>
          <GameText size="large">
            {this.props.title}
          </GameText>
        </div>
        <div className={styles.portrait}>
          {this.props.renderHeroPortrait()}
        </div>
        {this.renderSkills(this.props.hero.skills)}
        <div className={styles.additionalStats}>
          {this.props.renderAdditionalStats()}
        </div>
        <div className={styles.crest}>
          {this.props.renderCrest()}
        </div>
        <div className={styles.army}>
          {this.props.renderArmy()}
        </div>
        {this.renderArtifacts()}
        {this.props.dismissVisible && this.renderDismissal()}
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
            onMouseEnter={this.props.onExitMouseEnter}
            onMouseLeave={this.props.onExitMouseLeave}
            onClick={this.props.onExitClick}
          />
        </div>
        <div className={styles.statusText}>
          <GameText size="large">
            {this.props.statusText}
          </GameText>
        </div>
      </div>
    );
  }

  private renderSkills(skills: HeroSkills) {
    const content = SkillIds.map((s) => this.renderSkill(s, skills[s] || 0));

    return (
      <div className={styles.skills}>
        {content}
      </div>
    );
  }

  private renderSkill(skill: string, value: number) {
    return (
      <div
        className={styles.skill}
        key={skill}
      >
        {this.props.renderSkill(skill, value)}
      </div>
    );
  }

  private renderArtifacts() {
    const content = [...new Array(ArtifactLimit).keys()].map((i) => this.renderArtifact(i));

    return (
      <div className={styles.artifacts}>
        {content}
      </div>
    );
  }

  private renderArtifact(index: number) {
    return (
      <div
        className={styles.artifact}
        key={index}
      >
        {this.props.renderArtifact(index)}
      </div>
    );
  }

  private renderDismissal() {
    return (
      <div className={styles.dismiss}>
        <ImageButton
          images={buttonImages.dismiss}
          onMouseEnter={this.props.onDismissMouseEnter}
          onMouseLeave={this.props.onDismissMouseLeave}
          onClick={this.props.onDismissClick}
        />
      </div>
    );
  }
}

const HeroWindowWrapped = injectIntl(
  withGameWindow(640)(HeroWindow),
);

type HeroWindowWrappedProps = ExtractProps<typeof HeroWindowWrapped>;

export {
  HeroWindowWrapped as HeroWindow,
  HeroWindowWrappedProps as HeroWindowProps,
};
