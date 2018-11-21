import { Modal } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import "./SkillInfo.scss";

import { GameText } from "../../GameText";
import { getSkillDescriptionMessage, getSkillNameMessage } from "../../messages";

export interface SkillInfoProps {
  skill: string;
  value: number;
}

export class SkillInfo extends React.Component<SkillInfoProps> {
  public render() {
    return (
      <div
        className="skill-info"
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
    return (
      <div className="skill-info-name">
        <GameText size="normal">
          <FormattedMessage {...getSkillNameMessage(skill)} />
        </GameText>
      </div>
    );
  }

  private renderValue(value: number) {
    return (
      <div className="skill-info-value">
        <GameText size="normal">
          {value}
        </GameText>
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
