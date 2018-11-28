import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Skill } from "heroes-homm1";

import "./SkillInfo.scss";

import AttackSkillImage = require("./attack-skill.jpg");
import DefenseSkillImage = require("./defense-skill.jpg");
import KnowledgeImage = require("./knowledge.jpg");
import SpellPowerImage = require("./spell-power.jpg");

import { GameText } from "../../GameText";
import { getSkillNameMessage } from "../../messages";

export interface SkillInfoProps {
  skill: string;
  value: number;
  onMouseEnter: (skill: string) => void;
  onMouseLeave: (skill: string) => void;
  onClick: (skill: string) => void;
}

export class SkillInfo extends React.Component<SkillInfoProps> {
  public static defaultProps: Pick<SkillInfoProps, "onMouseEnter" | "onMouseLeave" | "onClick"> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

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
    const images: { [index: string]: string } = {
      [Skill.AttackSkill]: AttackSkillImage,
      [Skill.DefenseSkill]: DefenseSkillImage,
      [Skill.Knowledge]: KnowledgeImage,
      [Skill.SpellPower]: SpellPowerImage,
    };

    return (
      <img
        src={images[skill]}
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
    this.props.onMouseEnter(this.props.skill);
  }

  private onMouseLeave = () => {
    this.props.onMouseLeave(this.props.skill);
  }

  private onClick = () => {
    this.props.onClick(this.props.skill);
  }
}
