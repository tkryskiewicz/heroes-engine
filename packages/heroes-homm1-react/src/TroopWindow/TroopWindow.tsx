import { Col, Modal, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Damage, Troop } from "heroes-core";
import { creaturesById } from "heroes-homm1";

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

    const style: React.CSSProperties = {
      background: "url('assets/ui/troop-window/background.png')",
      height: 229,
      padding: "20px 35px",
      position: "relative",
      width: 402,
    };

    return (
      <Row style={style}>
        <Col style={{ textAlign: "center" }} span={12}>
          <CreatureIcon
            size="large"
            creature={this.props.troop.creature}
          />
        </Col>
        <Col span={12}>
          <Row style={{ textAlign: "center" }}>
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
              style={{ textAlign: "left" }}
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
              style={{ textAlign: "right" }}
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
    const style: React.CSSProperties = {
      background: "url('assets/ui/troop-window/count-background.jpg')",
      bottom: 17,
      display: "inline-block",
      height: 38,
      left: 41,
      paddingTop: 5,
      position: "absolute",
      textAlign: "center",
      width: 142,
    };

    return (
      <div style={style}>
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
            style={{ textAlign: "left" }}
            span={12}
          >
            <GameButton
              group="system"
              type="yes"
              onClick={this.props.onDismiss}
            />
          </Col>
          <Col
            style={{ textAlign: "right" }}
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
