import { Row } from "antd";
import * as React from "react";

import { LuckIcon } from "../LuckIcon";
import { MoraleIcon } from "../MoraleIcon";

export interface MiscInfoProps {
  morale: number;
  luck: number;
  experience: number;
}

export class MiscInfo extends React.Component<MiscInfoProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
      height: 93,
      position: "relative",
      width: 82,
    };

    return (
      <div style={style}>
        {this.renderBackground()}
        {this.renderMorale(this.props.morale)}
        {this.renderLuck(this.props.luck)}
        {this.renderExperience(this.props.experience)}
      </div>
    );
  }

  private renderBackground() {
    const style: React.CSSProperties = {
      position: "absolute",
      top: 0,
    };

    return (
      <img
        style={style}
        src="assets/ui/hero-window/stats-background.jpg"
      />
    );
  }

  private renderMorale(morale: number) {
    const style: React.CSSProperties = {
      left: 3,
      position: "absolute",
      top: 5,
    };

    const content = morale === 0 ? (
      <MoraleIcon
        type="neutral"
      />
    ) : [...new Array(Math.abs(morale)).keys()].map(() => (
      <MoraleIcon
        type={morale > 0 ? "good" : "bad"}
      />
    ));

    return (
      <div style={style}>
        {content}
      </div>
    );
  }

  private renderLuck(luck: number) {
    const style: React.CSSProperties = {
      position: "absolute",
      top: 30,
    };

    const content = luck === 0 ? (
      <LuckIcon
        type="neutral"
      />
    ) : [...new Array(Math.abs(luck)).keys()].map(() => (
      <LuckIcon
        type={luck > 0 ? "good" : "bad"}
      />
    ));

    return (
      <div style={style} >
        {content}
      </div>
    );
  }

  private renderExperience(experience: number) {
    const style: React.CSSProperties = {
      height: 32,
      position: "absolute",
      top: 55,
      width: "100%",
    };

    const textStyle: React.CSSProperties = {
      color: "#fff",
      float: "right",
      fontSize: "10px",
      lineHeight: "32px",
      paddingRight: 5,
    };

    return (
      <Row style={style}>
        <img src="assets/ui/hero-window/experience.png" />
        <span style={textStyle}>
          {experience}
        </span>
      </Row>
    );
  }
}
