import { Row } from "antd";
import * as React from "react";

import "./MiscInfo.scss";

import { BackgroundImage, ExperienceImage } from "./assets";

import { GameText } from "../../GameText";
import { LuckIcon } from "../LuckIcon";
import { MoraleIcon } from "../MoraleIcon";

export enum MiscInfoType {
  Morale = "morale",
  Luck = "luck",
  Experience = "experience",
}

export interface MiscInfoProps {
  values: {
    [MiscInfoType.Morale]: number;
    [MiscInfoType.Luck]: number;
    [MiscInfoType.Experience]: number;
  };
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onInfoMouseEnter: (type: MiscInfoType) => void;
  onInfoMouseLeave: (type: MiscInfoType) => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onInfoMouseEnter" |
  "onInfoMouseLeave";

export class MiscInfo extends React.Component<MiscInfoProps> {
  public static defaultProps: Pick<MiscInfoProps, DefaultProp> = {
    onInfoMouseEnter: () => undefined,
    onInfoMouseLeave: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className="misc-info"
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
        className="misc-info-background"
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
        className="misc-info-morale"
        onMouseEnter={this.onMoraleMouseEnter}
        onMouseLeave={this.onMoraleMouseLeave}
      >
        {content}
      </div>
    );
  }

  private onMoraleMouseEnter = () => {
    this.props.onInfoMouseEnter(MiscInfoType.Morale);
  }

  private onMoraleMouseLeave = () => {
    this.props.onInfoMouseLeave(MiscInfoType.Morale);
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
        className="misc-info-luck"
        onMouseEnter={this.onLuckMouseEnter}
        onMouseLeave={this.onLuckMouseLeave}
      >
        {content}
      </div>
    );
  }

  private onLuckMouseEnter = () => {
    this.props.onInfoMouseEnter(MiscInfoType.Luck);
  }

  private onLuckMouseLeave = () => {
    this.props.onInfoMouseLeave(MiscInfoType.Luck);
  }

  private renderExperience(experience: number) {
    return (
      <Row
        className="misc-info-experience"
        onMouseEnter={this.onExperienceMouseEnter}
        onMouseLeave={this.onExperienceMouseLeave}
      >
        <img src={ExperienceImage} />
        <div className="misc-info-experience-value">
          <GameText size="small">
            {experience}
          </GameText>
        </div>
      </Row>
    );
  }

  private onExperienceMouseEnter = () => {
    this.props.onInfoMouseEnter(MiscInfoType.Experience);
  }

  private onExperienceMouseLeave = () => {
    this.props.onInfoMouseLeave(MiscInfoType.Experience);
  }
}
