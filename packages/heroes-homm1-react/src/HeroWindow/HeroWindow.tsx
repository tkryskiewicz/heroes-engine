import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./HeroWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { GameText, ScreenWidth, withGameWindow, WithGameWindowProps } from "../core";

const SkillSlotCount = 4;
const TroopSlotCount = 5;
const ArtifactSlotCount = 14;

interface Props extends WithGameWindowProps {
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

class HeroWindow extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    dismissVisible: false,
    onDismissClick: noop,
    onDismissMouseEnter: noop,
    onDismissMouseLeave: noop,
    onExitClick: noop,
    onExitMouseEnter: noop,
    onExitMouseLeave: noop,
    renderAdditionalStats: noop,
    renderArtifact: noop,
    renderCrest: noop,
    renderHeroPortrait: noop,
    renderSkill: noop,
    renderTroop: noop,
    statusText: "",
    title: "",
  };

  public render() {
    return (
      <div className={styles.root}>
        <GameText
          data-test-id="title"
          className={styles.title}
          size="large"
        >
          {this.props.title}
        </GameText>
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
        <ImageButton
          data-test-id="exit"
          className={styles.exit}
          images={buttonImages.exit}
          onMouseEnter={this.props.onExitMouseEnter}
          onMouseLeave={this.props.onExitMouseLeave}
          onClick={this.props.onExitClick}
        />
        <GameText
          data-test-id="status-text"
          className={styles.statusText}
          size="large"
        >
          {this.props.statusText}
        </GameText>
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
      <ImageButton
        data-test-id="dismiss"
        className={styles.dismiss}
        images={buttonImages.dismiss}
        onMouseEnter={this.props.onDismissMouseEnter}
        onMouseLeave={this.props.onDismissMouseLeave}
        onClick={this.props.onDismissClick}
      />
    );
  }
}

const ComponentWrapped = withGameWindow(ScreenWidth)(HeroWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as HeroWindow,
  ComponentWrappedProps as HeroWindowProps,
};
