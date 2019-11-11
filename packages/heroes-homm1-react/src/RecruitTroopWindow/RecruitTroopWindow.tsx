import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { divideResources, multiplyResources, Resources } from "heroes-core";
import { noop } from "heroes-helpers";

import * as styles from "./RecruitTroopWindow.module.scss";

import { buttonImages } from "./assets";

import { CreatureIcon, GameInputNumber, ImageButton, ResourceCost } from "../base";
import { GameText, withGameWindow } from "../core";
import { getCreatureNameMessage } from "../messages";
import { messages } from "./messages";

interface RecruitTroopWindowProps {
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
    onCancelClick: noop,
    onCountChange: noop,
    onOkayClick: noop,
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
              <FormattedMessage {...messages.available} />:
              {" "}
              <FormattedNumber value={this.props.availableCount} />
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
            <GameInputNumber
              min={0}
              max={this.props.availableCount}
              disabled={!this.props.availableCount}
              value={this.props.count}
              onChange={this.props.onCountChange}
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

const ComponentWrapped = withGameWindow(320)(RecruitTroopWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as RecruitTroopWindow,
  ComponentWrappedProps as RecruitTroopWindowProps,
};
