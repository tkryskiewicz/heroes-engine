import React from "react";

import * as styles from "./HeroWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, ScreenWidth, withGameWindow, WithGameWindowProps } from "../core";

const SkillSlotCount = 4;
const TroopSlotCount = 5;
const ArtifactSlotCount = 14;

interface HeroWindowProps extends WithGameWindowProps {
  readonly title: string;
  readonly renderHeroPortrait: () => React.ReactNode;
  readonly renderSkill: (index: number) => React.ReactNode;
  readonly renderAdditionalStats: () => React.ReactNode;
  readonly renderCrest: () => React.ReactNode;
  readonly renderTroop: (index: number) => React.ReactNode;
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
  "renderTroop" |
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
    renderArtifact: () => undefined,
    renderCrest: () => undefined,
    renderHeroPortrait: () => undefined,
    renderSkill: () => undefined,
    renderTroop: () => undefined,
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
        {this.renderSkills()}
        <div className={styles.additionalStats}>
          {this.props.renderAdditionalStats()}
        </div>
        <div className={styles.crest}>
          {this.props.renderCrest()}
        </div>
        {this.renderArmy()}
        {this.renderArtifacts()}
        {this.props.dismissVisible && this.renderDismiss()}
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

  private renderSkills() {
    const content = [...new Array(SkillSlotCount).keys()]
      .map((i) => this.renderSkill(i));

    return (
      <div className={styles.skills}>
        {content}
      </div>
    );
  }

  private renderSkill(index: number) {
    return (
      <div
        key={index}
        className={styles.skill}
      >
        {this.props.renderSkill(index)}
      </div>
    );
  }

  private renderArmy() {
    const content = [...new Array(TroopSlotCount).keys()]
      .map((i) => this.renderTroop(i));

    return (
      <div className={styles.army}>
        {content}
      </div>
    );
  }

  private renderTroop(index: number) {
    return (
      <div
        key={index}
        className={styles.troop}
      >
        {this.props.renderTroop(index)}
      </div>
    );
  }

  private renderArtifacts() {
    const content = [...new Array(ArtifactSlotCount).keys()]
      .map((i) => this.renderArtifact(i));

    return (
      <div className={styles.artifacts}>
        {content}
      </div>
    );
  }

  private renderArtifact(index: number) {
    return (
      <div
        key={index}
        className={styles.artifact}
      >
        {this.props.renderArtifact(index)}
      </div>
    );
  }

  private renderDismiss() {
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

const ComponentWrapped = withGameWindow(ScreenWidth)(HeroWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as HeroWindow,
  ComponentWrappedProps as HeroWindowProps,
};
