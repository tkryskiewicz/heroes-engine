import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";

import { noop } from "heroes-helpers";

import * as styles from "./OwnerDetails.module.scss";

import { GameCheckbox } from "../../base";
import { GameText } from "../../core";
import { messages } from "./messages";

export interface OwnerDetailsProps {
  readonly playerColors: string[];
  readonly allowNeutral: boolean;
  readonly value?: string;
  readonly onValueChange: (value?: string) => void;
}

type DefaultProp =
  "allowNeutral" |
  "onValueChange";

export class OwnerDetails extends React.Component<OwnerDetailsProps> {
  public static readonly defaultProps: Pick<OwnerDetailsProps, DefaultProp> = {
    allowNeutral: false,
    onValueChange: noop,
  };

  public render() {
    const { playerColors, value } = this.props;

    return (
      <Row className={styles.title}>
        <Col span={10}>
          <GameText size="large">
            <FormattedMessage {...messages.title} />:
            </GameText>
        </Col>
        <Col
          className={styles.values}
          span={14}
        >
          {this.props.allowNeutral && this.renderNeutral(value)}
          {playerColors.map((v, i) => this.renderValue(i, v, value))}
        </Col>
      </Row>
    );
  }

  private renderNeutral(value?: string) {
    return (
      <div className={styles.value}>
        <GameText size="large">
          <FormattedMessage {...messages.neutral} />
        </GameText>
        {" "}
        <GameCheckbox
          checked={value === undefined}
          onClick={this.onNeutralClick}
        />
      </div>
    );
  }

  private readonly onNeutralClick = () => {
    this.props.onValueChange();
  }

  private renderValue(index: number, value: string, selectedValue?: string) {
    const onClick = () => this.onValueChange(index);

    return (
      <div
        key={index}
        className={styles.value}
      >
        <GameText size="large">
          {index + 1}
        </GameText>
        {" "}
        <GameCheckbox
          checked={selectedValue === value}
          onClick={onClick}
        />
      </div>
    );
  }

  private readonly onValueChange = (index: number) => {
    const value = this.props.playerColors[index];

    this.props.onValueChange(value);
  }
}
