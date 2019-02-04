import { Col, InputNumber, Row } from "antd";
import { InputNumberProps } from "antd/lib/input-number";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { divideResources, multiplyResources, Resources } from "heroes-core";
import { GameText, withGameWindow } from "heroes-homm1-react-components";

import * as styles from "./RecruitTroopWindow.module.scss";

import { buttonImages } from "./assets";

import { CreatureIcon, ImageButton, ResourceCost } from "../base";
import { getCreatureNameMessage } from "../messages";
import { messages } from "./messages";

export interface RecruitTroopWindowProps {
  readonly resources: Resources;
  readonly creature: string;
  readonly cost: Resources;
  readonly availableCount: number;
  readonly count: number;
  readonly onCountChange: (value: number) => void;
  readonly onOkayClick: (count: number) => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onCountChange" |
  "onOkayClick" |
  "onCancelClick";

class RecruitTroopWindow extends React.Component<RecruitTroopWindowProps> {
  public static readonly defaultProps: Pick<RecruitTroopWindowProps, DefaultProp> = {
    onCancelClick: () => undefined,
    onCountChange: () => undefined,
    onOkayClick: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <Row>
          <GameText size="large">
            <FormattedMessage {...getCreatureNameMessage(this.props.creature)}>
              {(creature) => (<FormattedMessage {...messages.title} values={{ creature }} />)}
            </FormattedMessage>
          </GameText>
        </Row>
        <Row>
          <Col span={8}>
            <CreatureIcon
              size="medium"
              creature={this.props.creature}
            />
            <GameText size="normal">
              <FormattedMessage {...messages.available} />: {this.props.availableCount}
            </GameText>
          </Col>
          <Col span={16}>
            {this.renderCostPerTroop()}
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <GameText size="normal">
              <FormattedMessage {...messages.count} />:
          </GameText>
          </Col>
          <Col span={16}>
            <InputNumber
              precision={0}
              min={0}
              max={this.props.availableCount}
              disabled={!this.props.availableCount}
              value={this.props.count}
              onChange={this.onCountChange}
            />
            <ImageButton
              images={buttonImages.max}
              onClick={this.onMaxClick}
            />
          </Col>
        </Row>
        <Row>
          <GameText size="large">
            <FormattedMessage {...messages.totalCost} />:
          </GameText>
          <ResourceCost
            cost={multiplyResources(this.props.cost, this.props.count)}
          />
        </Row>
        <Row>
          <Col span={12}>
            <ImageButton
              images={buttonImages.okay}
              disabled={this.props.availableCount === 0}
              onClick={this.onOkayClick}
            />
          </Col>
          <Col span={12}>
            <ImageButton
              images={buttonImages.cancel}
              onClick={this.onCancelClick}
            />
          </Col>
        </Row>
      </div>
    );
  }

  private renderCostPerTroop() {
    return (
      <div>
        <GameText size="normal">
          <FormattedMessage {...messages.costPerTroop} />:
        </GameText>
        <div>
          <ResourceCost
            cost={this.props.cost}
          />
        </div>
      </div>
    );
  }

  private readonly onCountChange: InputNumberProps["onChange"] = (v) => {
    if (v === undefined) {
      return;
    }

    const value = parseInt(v.toString(), 10);

    this.props.onCountChange(value);
  }

  private readonly onMaxClick = () => {
    const count = Math.min(divideResources(this.props.resources, this.props.cost), this.props.availableCount);

    this.props.onCountChange(count);
  }

  private readonly onOkayClick = () => {
    // FIXME: should this be handled here?
    if (this.props.count === 0) {
      this.onCancelClick();

      return;
    }

    this.props.onOkayClick(this.props.count);
  }

  private readonly onCancelClick = () => {
    this.props.onCancelClick();
  }
}

const RecruitTroopWindowWrapped = withGameWindow(320)(RecruitTroopWindow);

export {
  RecruitTroopWindowWrapped as RecruitTroopWindow,
};
