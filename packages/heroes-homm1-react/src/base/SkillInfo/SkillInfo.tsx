import * as React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import * as styles from "./SkillInfo.module.scss";

import { skillImages } from "./assets";

import { GameText } from "../../core";
import { getSkillNameMessage } from "../../messages";

export interface SkillInfoProps {
  readonly skill: string;
  readonly value: number;
  readonly onMouseEnter: (skill: string) => void;
  readonly onMouseLeave: (skill: string) => void;
  readonly onClick: (skill: string) => void;
}

export class SkillInfo extends React.Component<SkillInfoProps> {
  public static readonly defaultProps: Pick<SkillInfoProps, "onMouseEnter" | "onMouseLeave" | "onClick"> = {
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public render() {
    return (
      <div
        className={styles.root}
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
        src={skillImages[skill]}
      />
    );
  }

  private renderName(skill: string) {
    return (
      <div className={styles.name}>
        <GameText size="normal">
          <FormattedMessage {...getSkillNameMessage(skill)} />
        </GameText>
      </div>
    );
  }

  private renderValue(value: number) {
    return (
      <div className={styles.value}>
        <GameText size="normal">
          <FormattedNumber value={value} />
        </GameText>
      </div>
    );
  }

  private readonly onMouseEnter = () => {
    this.props.onMouseEnter(this.props.skill);
  }

  private readonly onMouseLeave = () => {
    this.props.onMouseLeave(this.props.skill);
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.skill);
  }
}
