import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Damage, Troop } from "heroes-core";
import { creaturesById } from "heroes-homm1";

import "./TroopWindow.scss";

import { CreatureIcon } from "../CreatureIcon";
import { GameButton } from "../GameButton";
import { GameText } from "../GameText";
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
      <Row className="troop-window">
        <Col
          className="troop-window-creature"
          span={12}
        >
          <CreatureIcon
            size="large"
            creature={this.props.troop.creature}
          />
        </Col>
        <Col span={12}>
          <Row className="troop-window-creature-name">
            <GameText size="normal">
              <FormattedMessage {...getCreatureNameMessage(creature.id)} />
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.attack} />: {creature.attack} (?)
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.defense} />: {creature.defense} (?)
            </GameText>
          </Row>
          {creature.shots && this.renderShots(creature.shots)}
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.damage} />: {this.renderDamage(creature.damage)}
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.hitPoints} />: {creature.hitPoints}
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.speed} />: <FormattedMessage {...getSpeedMessage(creature.speed)} />
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.morale} />: ?
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.luck} />: ?
            </GameText>
          </Row>
          <Row>
            <Col
              className="troop-window-dismiss"
              span={12}
            >
              <GameButton
                group="troop-window"
                type="dismiss"
                onClick={this.props.onDismissClick}
              />
              {this.props.dismissPromptVisible && this.renderDismissPrompt()}
            </Col>
            <Col
              className="troop-window-exit"
              span={12}
            >
              <GameButton
                group="troop-window"
                type="exit"
                onClick={this.props.onExitClick}
              />
            </Col>
          </Row>
        </Col>
        {this.renderCount(this.props.troop.count)}
      </Row>
    );
  }

  private renderCount(value: number) {
    return (
      <div className="troop-window-count">
        <GameText size="normal">
          {value}
        </GameText>
      </div>
    );
  }

  private renderShots(value: number) {
    return (
      <Row>
        <GameText size="normal">
          <FormattedMessage {...messages.shots} />
          :
          {value}
        </GameText>
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
            className="troop-window-dismiss-yes"
            span={12}
          >
            <GameButton
              group="system"
              type="yes"
              onClick={this.props.onDismiss}
            />
          </Col>
          <Col
            className="troop-window-dismiss-no"
            span={12}
          >
            <GameButton
              group="system"
              type="no"
              onClick={this.props.onCancelDismiss}
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}
