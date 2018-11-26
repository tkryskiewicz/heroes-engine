import { Modal } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import "./SkillInfo.scss";

import { GameText } from "../../GameText";
import { getSkillDescriptionMessage, getSkillNameMessage } from "../../messages";

export interface SkillInfoProps {
  skill: string;
  value: number;
  onMouseEnter?: (skill: string) => void;
  onMouseLeave?: (skill: string) => void;
}

export class SkillInfo extends React.Component<SkillInfoProps> {
  public render() {
    return (
      <div
        className="skill-info"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
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

  private onMouseEnter = () => {
    if (!this.props.onMouseEnter) {
      return;
    }

    this.props.onMouseEnter(this.props.skill);
  }

  private onMouseLeave = () => {
    if (!this.props.onMouseLeave) {
      return;
    }

    this.props.onMouseLeave(this.props.skill);
  }

  // TODO: extract?
  private onClick = () => {
    Modal.info({
      content: <FormattedMessage {...getSkillDescriptionMessage(this.props.skill)} />,
      title: <FormattedMessage {...getSkillNameMessage(this.props.skill)} />,
    });
  }
}
