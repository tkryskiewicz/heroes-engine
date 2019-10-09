import { Row } from "antd";
import React from "react";
import { FormattedNumber } from "react-intl";

import { LuckType, MoraleType } from "heroes-homm1";

import * as styles from "./AdditionalStatsInfo.module.scss";

import { BackgroundImage } from "./assets";

import { GameText } from "../../core";
import { ExperienceIcon } from "../ExperienceIcon";
import { LuckIcon } from "../LuckIcon";
import { MoraleIcon } from "../MoraleIcon";

export enum AdditionalStatType {
  Morale = "morale",
  Luck = "luck",
  Experience = "experience",
}

interface AdditionalStatValues {
  readonly [AdditionalStatType.Morale]: number;
  readonly [AdditionalStatType.Luck]: number;
  readonly [AdditionalStatType.Experience]: number;
}

export interface AdditionalStatsInfoProps {
  readonly values: AdditionalStatValues;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onInfoMouseEnter: (type: AdditionalStatType) => void;
  readonly onInfoMouseLeave: (type: AdditionalStatType) => void;
  readonly onInfoClick: (type: AdditionalStatType) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onInfoMouseEnter" |
  "onInfoMouseLeave" |
  "onInfoClick";

export class AdditionalStatsInfo extends React.Component<AdditionalStatsInfoProps> {
  public static readonly defaultProps: Pick<AdditionalStatsInfoProps, DefaultProp> = {
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
        {this.renderMorale(this.props.values[AdditionalStatType.Morale || 0])}
        {this.renderLuck(this.props.values[AdditionalStatType.Luck] || 0)}
        {this.renderExperience(this.props.values[AdditionalStatType.Experience] || 0)}
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
        type={MoraleType.Neutral}
      />
    ) : [...new Array(Math.abs(morale)).keys()].map((i) => (
      <MoraleIcon
        key={i}
        type={morale > 0 ? MoraleType.Good : MoraleType.Bad}
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
    this.props.onInfoMouseEnter(AdditionalStatType.Morale);
  }

  private readonly onMoraleMouseLeave = () => {
    this.props.onInfoMouseLeave(AdditionalStatType.Morale);
  }

  private readonly onMoraleClick = () => {
    this.props.onInfoClick(AdditionalStatType.Morale);
  }

  private renderLuck(luck: number) {
    const content = luck === 0 ? (
      <LuckIcon
        type={LuckType.Neutral}
      />
    ) : [...new Array(Math.abs(luck)).keys()].map((i) => (
      <LuckIcon
        key={i}
        type={luck > 0 ? LuckType.Good : LuckType.Bad}
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
    this.props.onInfoMouseEnter(AdditionalStatType.Luck);
  }

  private readonly onLuckMouseLeave = () => {
    this.props.onInfoMouseLeave(AdditionalStatType.Luck);
  }

  private readonly onLuckClick = () => {
    this.props.onInfoClick(AdditionalStatType.Luck);
  }

  private renderExperience(experience: number) {
    return (
      <Row
        className={styles.experience}
        onMouseEnter={this.onExperienceMouseEnter}
        onMouseLeave={this.onExperienceMouseLeave}
        onClick={this.onExperienceClick}
      >
        <ExperienceIcon
          size="small"
        />
        <div className={styles.experienceValue}>
          <GameText size="small">
            <FormattedNumber value={experience} />
          </GameText>
        </div>
      </Row>
    );
  }

  private readonly onExperienceMouseEnter = () => {
    this.props.onInfoMouseEnter(AdditionalStatType.Experience);
  }

  private readonly onExperienceMouseLeave = () => {
    this.props.onInfoMouseLeave(AdditionalStatType.Experience);
  }

  private readonly onExperienceClick = () => {
    this.props.onInfoClick(AdditionalStatType.Experience);
  }
}
