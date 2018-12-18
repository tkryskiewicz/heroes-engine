import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Damage, Troop } from "heroes-core";
import { creaturesById } from "heroes-homm1";

import "./TroopWindow.scss";

import { CreatureIcon } from "../CreatureIcon";
import { GameButton } from "../GameButton";
import { GameModal } from "../GameModal";
import { GameParagraph } from "../GameParagraph";
import { GameText } from "../GameText";
import { getCreatureNameMessage } from "../messages";
import { Modal } from "../Modal";
import { getSpeedMessage, messages } from "./messages";

export interface TroopWindowProps {
  troop: Troop;
  dismissible: boolean;
  dismissPromptVisible: boolean;
  onDismissClick: (troop: Troop) => void;
  onConfirmDismissClick: (troop: Troop) => void;
  onCancelDismissClick: (troop: Troop) => void;
  onExitClick: () => void;
}

type DefaultProp =
  "dismissible" |
  "dismissPromptVisible" |
  "onDismissClick" |
  "onConfirmDismissClick" |
  "onCancelDismissClick" |
  "onExitClick";

export class TroopWindow extends React.Component<TroopWindowProps> {
  public static defaultProps: Pick<TroopWindowProps, DefaultProp> = {
    dismissPromptVisible: false,
    dismissible: false,
    onCancelDismissClick: () => undefined,
    onConfirmDismissClick: () => undefined,
    onDismissClick: () => undefined,
    onExitClick: () => undefined,
  };

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
              {this.props.dismissible && this.renderDismissal(this.props.dismissPromptVisible)}
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

  private onDismissClick = () => {
    this.props.onDismissClick(this.props.troop);
  }

  private renderDismissal(visible: boolean) {
    return (
      <>
        <GameButton
          group="troop-window"
          type="dismiss"
          onClick={this.onDismissClick}
        />
        {visible && this.renderDismissPrompt()}
      </>
    );
  }

  private renderDismissPrompt() {
    return (
      <Modal
        width={286}
        visible={true}
      >
        <GameModal>
          <GameParagraph textSize="large">
            <FormattedMessage {...messages.dismissMessage} />
          </GameParagraph>
          <Row>
            <Col
              className="troop-window-dismiss-yes"
              span={12}
            >
              <GameButton
                group="system"
                type="yes"
                onClick={this.onConfirmDismiss}
              />
            </Col>
            <Col
              className="troop-window-dismiss-no"
              span={12}
            >
              <GameButton
                group="system"
                type="no"
                onClick={this.onCancelDismiss}
              />
            </Col>
          </Row>
        </GameModal>
      </Modal>
    );
  }

  private onConfirmDismiss = () => {
    this.props.onConfirmDismissClick(this.props.troop);
  }

  private onCancelDismiss = () => {
    this.props.onCancelDismissClick(this.props.troop);
  }
}
