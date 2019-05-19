import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import * as styles from "./AlignmentDetails.module.scss";

import { GameCheckbox } from "../../base";
import { GameText } from "../../core";
import { messages } from "./messages";

export interface AlignmentDetailsProps {
  readonly alignments: string[];
  readonly allowNeutral: boolean;
  readonly value?: string;
  readonly onValueChange: (value?: string) => void;
}

type DefaultProp =
  "allowNeutral" |
  "onValueChange";

export class AlignmentDetails extends React.Component<AlignmentDetailsProps> {
  public static readonly defaultProps: Pick<AlignmentDetailsProps, DefaultProp> = {
    allowNeutral: false,
    onValueChange: () => undefined,
  };

  public render() {
    const { alignments, value } = this.props;

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
          {alignments.map((a, i) => this.renderValue(i, a, value))}
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
    const value = this.props.alignments[index];

    this.props.onValueChange(value);
  }
}
