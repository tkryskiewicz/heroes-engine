import { Col, InputNumber, Row } from "antd";
import { InputNumberProps } from "antd/lib/input-number";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { enoughResources, multiplyResources, Resources } from "heroes-core";

import "./RecruitTroopWindow.scss";

import { CreatureIcon } from "../CreatureIcon";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
import { getCreatureNameMessage } from "../messages";
import { ResourceCost } from "../ResourceCost";
import { messages } from "./messages";

export interface RecruitTroopWindowProps {
  resources: Resources;
  creature: string;
  cost: Resources;
  availableCount: number;
  count: number;
  onCountChange: (value: number) => void;
  onOkayClick: (count: number) => void;
  onCancelClick: () => void;
}

export class RecruitTroopWindow extends React.Component<RecruitTroopWindowProps> {
  public static defaultProps: Pick<RecruitTroopWindowProps, "onCountChange" | "onOkayClick" | "onCancelClick"> = {
    onCancelClick: () => undefined,
    onCountChange: () => undefined,
    onOkayClick: () => undefined,
  };

  public render() {
    return (
      <div className="recruit-troop-window">
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
            <GameButton
              group="recruit-troop-window"
              type="max"
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
            <GameButton
              group="recruit-troop-window"
              type="okay"
              disabled={this.props.availableCount === 0}
              onClick={this.onOkayClick}
            />
          </Col>
          <Col span={12}>
            <GameButton
              group="recruit-troop-window"
              type="cancel"
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

  private onCountChange: InputNumberProps["onChange"] = (v) => {
    if (v === undefined) {
      return;
    }

    const value = parseInt(v.toString(), 10);

    this.props.onCountChange(value);
  }

  private onMaxClick = () => {
    let count = 0;

    while (
      count < this.props.availableCount &&
      enoughResources(this.props.resources, multiplyResources(this.props.cost, count + 1))
    ) {
      count += 1;
    }

    this.props.onCountChange(count);
  }

  private onOkayClick = () => {
    // FIXME: should this be handled here?
    if (this.props.count === 0) {
      this.onCancelClick();

      return;
    }

    this.props.onOkayClick(this.props.count);
  }

  private onCancelClick = () => {
    this.props.onCancelClick();
  }
}
