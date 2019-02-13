import { Row } from "antd";
import * as React from "react";

import * as styles from "./MiscInfo.module.scss";

import { BackgroundImage, ExperienceImage } from "./assets";

import { LuckIcon, MoraleIcon } from "../../base";
import { GameText } from "../../core";

export enum MiscInfoType {
  Morale = "morale",
  Luck = "luck",
  Experience = "experience",
}

interface MiscInfoValues {
  readonly [MiscInfoType.Morale]: number;
  readonly [MiscInfoType.Luck]: number;
  readonly [MiscInfoType.Experience]: number;
}

export interface MiscInfoProps {
  readonly values: MiscInfoValues;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onInfoMouseEnter: (type: MiscInfoType) => void;
  readonly onInfoMouseLeave: (type: MiscInfoType) => void;
  readonly onInfoClick: (type: MiscInfoType) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onInfoMouseEnter" |
  "onInfoMouseLeave" |
  "onInfoClick";

export class MiscInfo extends React.Component<MiscInfoProps> {
  public static readonly defaultProps: Pick<MiscInfoProps, DefaultProp> = {
    onInfoClick: () => undefined,
    onInfoMouseEnter: () => undefined,
    onInfoMouseLeave: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        {this.renderBackground()}
        {this.renderMorale(this.props.values[MiscInfoType.Morale || 0])}
        {this.renderLuck(this.props.values[MiscInfoType.Luck] || 0)}
        {this.renderExperience(this.props.values[MiscInfoType.Experience] || 0)}
      </div>
    );
  }

  private renderBackground() {
    return (
      <img
        className={styles.background}
        src={BackgroundImage}
      />
    );
  }

  private renderMorale(morale: number) {
    const content = morale === 0 ? (
      <MoraleIcon
        type="neutral"
      />
    ) : [...new Array(Math.abs(morale)).keys()].map((i) => (
      <MoraleIcon
        key={i}
        type={morale > 0 ? "good" : "bad"}
      />
    ));

    return (
      <div
        className={styles.morale}
        onMouseEnter={this.onMoraleMouseEnter}
        onMouseLeave={this.onMoraleMouseLeave}
        onClick={this.onMoraleClick}
      >
        {content}
      </div>
    );
  }

  private readonly onMoraleMouseEnter = () => {
    this.props.onInfoMouseEnter(MiscInfoType.Morale);
  }

  private readonly onMoraleMouseLeave = () => {
    this.props.onInfoMouseLeave(MiscInfoType.Morale);
  }

  private readonly onMoraleClick = () => {
    this.props.onInfoClick(MiscInfoType.Morale);
  }

  private renderLuck(luck: number) {
    const content = luck === 0 ? (
      <LuckIcon
        type="neutral"
      />
    ) : [...new Array(Math.abs(luck)).keys()].map((i) => (
      <LuckIcon
        key={i}
        type={luck > 0 ? "good" : "bad"}
      />
    ));

    return (
      <div
        className={styles.luck}
        onMouseEnter={this.onLuckMouseEnter}
        onMouseLeave={this.onLuckMouseLeave}
        onClick={this.onLuckClick}
      >
        {content}
      </div>
    );
  }

  private readonly onLuckMouseEnter = () => {
    this.props.onInfoMouseEnter(MiscInfoType.Luck);
  }

  private readonly onLuckMouseLeave = () => {
    this.props.onInfoMouseLeave(MiscInfoType.Luck);
  }

  private readonly onLuckClick = () => {
    this.props.onInfoClick(MiscInfoType.Luck);
  }

  private renderExperience(experience: number) {
    return (
      <Row
        className={styles.experience}
        onMouseEnter={this.onExperienceMouseEnter}
        onMouseLeave={this.onExperienceMouseLeave}
        onClick={this.onExperienceClick}
      >
        <img src={ExperienceImage} />
        <div className={styles.experienceValue}>
          <GameText size="small">
            {experience}
          </GameText>
        </div>
      </Row>
    );
  }

  private readonly onExperienceMouseEnter = () => {
    this.props.onInfoMouseEnter(MiscInfoType.Experience);
  }

  private readonly onExperienceMouseLeave = () => {
    this.props.onInfoMouseLeave(MiscInfoType.Experience);
  }

  private readonly onExperienceClick = () => {
    this.props.onInfoClick(MiscInfoType.Experience);
  }
}
