import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Damage, Troop } from "heroes-core";
import { creaturesById } from "heroes-homm1";

import { CreatureIcon } from "../CreatureIcon";
import { GameButton } from "../GameButton";
import { getCreatureNameMessage } from "../messages";
import { getSpeedMessage, messages } from "./messages";

export interface TroopWindowProps {
  troop: Troop;
  dismissPromptVisible?: boolean;
  onDismissClick?: () => void;
  onDismiss?: () => void;
  onCancelDismiss?: () => void;
  onExitClick?: () => void;
}

export class TroopWindow extends React.Component<TroopWindowProps> {
  public render() {
    const creature = creaturesById[this.props.troop.creature];

    return (
      <Row>
        <Col span={12}>
          <CreatureIcon
            size="large"
            creature={this.props.troop.creature}
          />
          {this.renderCount(this.props.troop.count)}
        </Col>
        <Col span={12}>
          <Row>
            <FormattedMessage {...getCreatureNameMessage(creature.id)} />
          </Row>
          <Row>
            <FormattedMessage {...messages.attack} />
            :
            {creature.attack} (?)
          </Row>
          <Row>
            <FormattedMessage {...messages.defense} />
            :
            {creature.defense} (?)
          </Row>
          {creature.shots && this.renderShots(creature.shots)}
          <Row>
            <FormattedMessage {...messages.damage} />
            :
            {this.renderDamage(creature.damage)}
          </Row>
          <Row>
            <FormattedMessage {...messages.hitPoints} />
            :
             {creature.hitPoints}
          </Row>
          <Row>
            <FormattedMessage {...messages.speed} />
            :
            <FormattedMessage {...getSpeedMessage(creature.speed)} />
          </Row>
          <Row>
            <FormattedMessage {...messages.morale} />
            :
            ?
          </Row>
          <Row>
            <FormattedMessage {...messages.luck} />
            :
            ?
          </Row>
          <Row>
            <Col span={12}>
              <GameButton
                group="troop-window"
                type="dismiss"
                onClick={this.props.onDismissClick}
              />
              {this.props.dismissPromptVisible && this.renderDismissPrompt()}
            </Col>
            <Col span={12}>
              <GameButton
                group="troop-window"
                type="exit"
                onClick={this.props.onExitClick}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  private renderCount(value: number) {
    return (
      <div>
        {value}
      </div>
    );
  }

  private renderShots(value: number) {
    return (
      <Row>
        <FormattedMessage {...messages.shots} />
        :
        {value}
      </Row>
    );
  }

  private renderDamage(damage: Damage) {
    return damage.min !== damage.max ?
      `${damage.min}-${damage.max}` :
      damage.min;
  }

  private renderDismissPrompt() {
    return (
      <Modal
        footer={null}
        closable={false}
        visible={true}
      >
        <Row>
          <FormattedMessage {...messages.dismissMessage} />
        </Row>
        <Row>
          <Col
            style={{ textAlign: "left" }}
            span={12}
          >
            <GameButton
              type="yes"
              onClick={this.props.onDismiss}
            />
          </Col>
          <Col
            style={{ textAlign: "right" }}
            span={12}
          >
            <GameButton
              type="no"
              onClick={this.props.onCancelDismiss}
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}
