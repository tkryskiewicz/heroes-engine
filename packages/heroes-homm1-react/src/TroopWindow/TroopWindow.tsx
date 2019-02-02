import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Creature, Damage, Troop } from "heroes-core";

import * as styles from "./TroopWindow.module.scss";

import { buttonImages } from "./assets";

import { CreatureIcon, GameModal, ImageButton } from "../base";
import { GameParagraph, GameText, withGameWindow } from "../core";
import { getCreatureNameMessage } from "../messages";
import { getSpeedMessage, messages } from "./messages";

export interface TroopWindowProps {
  readonly troop: Troop;
  readonly creature: Creature;
  readonly dismissible: boolean;
  readonly dismissPromptVisible: boolean;
  readonly onDismissClick: (troop: Troop) => void;
  readonly onConfirmDismissClick: (troop: Troop) => void;
  readonly onCancelDismissClick: (troop: Troop) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "dismissible" |
  "dismissPromptVisible" |
  "onDismissClick" |
  "onConfirmDismissClick" |
  "onCancelDismissClick" |
  "onExitClick";

class TroopWindow extends React.Component<TroopWindowProps> {
  public static readonly defaultProps: Pick<TroopWindowProps, DefaultProp> = {
    dismissPromptVisible: false,
    dismissible: false,
    onCancelDismissClick: () => undefined,
    onConfirmDismissClick: () => undefined,
    onDismissClick: () => undefined,
    onExitClick: () => undefined,
  };

  public render() {
    const { creature } = this.props;

    return (
      <Row className={styles.root}>
        <Col
          className={styles.creature}
          span={12}
        >
          <CreatureIcon
            size="large"
            creature={this.props.troop.creature}
          />
        </Col>
        <Col span={12}>
          <Row className={styles.creatureName}>
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
              className={styles.dismiss}
              span={12}
            >
              {this.props.dismissible && this.renderDismissal(this.props.dismissPromptVisible)}
            </Col>
            <Col
              className={styles.exit}
              span={12}
            >
              <ImageButton
                images={buttonImages.exit}
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
      <div className={styles.count}>
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

  private readonly onDismissClick = () => {
    this.props.onDismissClick(this.props.troop);
  }

  private renderDismissal(visible: boolean) {
    return (
      <>
        <ImageButton
          images={buttonImages.dismiss}
          onClick={this.onDismissClick}
        />
        {this.renderDismissPrompt(visible)}
      </>
    );
  }

  private renderDismissPrompt(visible: boolean) {
    return (
      <GameModal
        type="yesNo"
        visible={visible}
        onConfirmClick={this.onConfirmDismiss}
        onCancelClick={this.onCancelDismiss}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.dismissMessage} />
        </GameParagraph>
      </GameModal>
    );
  }

  private readonly onConfirmDismiss = () => {
    this.props.onConfirmDismissClick(this.props.troop);
  }

  private readonly onCancelDismiss = () => {
    this.props.onCancelDismissClick(this.props.troop);
  }
}

const TroopWindowWrapped = withGameWindow(402)(TroopWindow);

export {
  TroopWindowWrapped as TroopWindow,
};
