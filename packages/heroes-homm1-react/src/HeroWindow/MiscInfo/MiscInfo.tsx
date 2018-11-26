import { Row } from "antd";
import * as React from "react";

import "./MiscInfo.scss";

import { GameText } from "../../GameText";
import { LuckIcon } from "../LuckIcon";
import { MoraleIcon } from "../MoraleIcon";

export interface MiscInfoProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  morale: number;
  onMoraleMouseEnter: () => void;
  onMoraleMouseLeave: () => void;
  luck: number;
  onLuckMouseEnter: () => void;
  onLuckMouseLeave: () => void;
  experience: number;
  onExperienceMouseEnter: () => void;
  onExperienceMouseLeave: () => void;
}

type DefaultProp =
  "onMouseEnter" |
  "onMouseLeave" |
  "onMoraleMouseEnter" |
  "onMoraleMouseLeave" |
  "onLuckMouseEnter" |
  "onLuckMouseLeave" |
  "onExperienceMouseEnter" |
  "onExperienceMouseLeave";

export class MiscInfo extends React.Component<MiscInfoProps> {
  public static defaultProps: Pick<MiscInfoProps, DefaultProp> = {
    onExperienceMouseEnter: () => undefined,
    onExperienceMouseLeave: () => undefined,
    onLuckMouseEnter: () => undefined,
    onLuckMouseLeave: () => undefined,
    onMoraleMouseEnter: () => undefined,
    onMoraleMouseLeave: () => undefined,
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
        {this.renderMorale(this.props.morale)}
        {this.renderLuck(this.props.luck)}
        {this.renderExperience(this.props.experience)}
      </div>
    );
  }

  private renderBackground() {
    return (
      <img
        className="misc-info-background"
        src="assets/ui/hero-window/stats-background.jpg"
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
        onMouseEnter={this.props.onMoraleMouseEnter}
        onMouseLeave={this.props.onMoraleMouseLeave}
      >
        {content}
      </div>
    );
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
        onMouseEnter={this.props.onLuckMouseEnter}
        onMouseLeave={this.props.onLuckMouseLeave}
      >
        {content}
      </div>
    );
  }

  private renderExperience(experience: number) {
    return (
      <Row
        className="misc-info-experience"
        onMouseEnter={this.props.onExperienceMouseEnter}
        onMouseLeave={this.props.onExperienceMouseLeave}
      >
        <img src="assets/ui/hero-window/experience.png" />
        <div className="misc-info-experience-value">
          <GameText size="small">
            {experience}
          </GameText>
        </div>
      </Row>
    );
  }
}
