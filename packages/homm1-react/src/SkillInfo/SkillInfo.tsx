import { Modal } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { getSkillDescriptionMessage, getSkillNameMessage } from "./messages";

export interface SkillInfoProps {
  skill: string;
  value: number;
}

export class SkillInfo extends React.Component<SkillInfoProps> {
  public render() {
    const style: React.CSSProperties = {
      position: "relative",
      width: "82px",
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.renderBackground(this.props.skill)}
        {this.renderName(this.props.skill)}
        {this.renderValue(this.props.value)}
      </div>
    );
  }

  private renderBackground(skill: string) {
    return (
      <img
        src={`assets/ui/hero-window/${skill}.jpg`}
      />
    );
  }

  private renderName(skill: string) {
    const style: React.CSSProperties = {
      color: "#fff",
      position: "absolute",
      textAlign: "center",
      top: 2,
      width: "100%",
    };

    return (
      <div style={style}>
        <FormattedMessage {...getSkillNameMessage(skill)} />
      </div>
    );
  }

  private renderValue(value: number) {
    const style: React.CSSProperties = {
      bottom: 2,
      color: "#fff",
      position: "absolute",
      textAlign: "center",
      width: "100%",
    };

    return (
      <div style={style}>
        {value}
      </div>
    );
  }

  // TODO: extract?
  private onClick = () => {
    Modal.info({
      content: <FormattedMessage {...getSkillDescriptionMessage(this.props.skill)} />,
      title: <FormattedMessage {...getSkillNameMessage(this.props.skill)} />,
    });
  }
}
