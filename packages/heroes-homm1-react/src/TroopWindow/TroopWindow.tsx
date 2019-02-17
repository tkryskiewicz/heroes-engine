import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Creature, Damage, HeroSkills } from "heroes-core";
import { LuckType, MoraleType, Skill } from "heroes-homm1";

import * as styles from "./TroopWindow.module.scss";

import { buttonImages } from "./assets";

import { CreatureIcon, ImageButton } from "../base";
import { GameText, withGameWindow, WithGameWindowProps } from "../core";
import {
  getCreatureNameMessage,
  getLuckValueMessage,
  getMoraleTypeValueMessage,
  luckMessages,
  moraleMessages,
} from "../messages";
import { DismissTroopPrompt } from "../prompt";
import { getSpeedMessage, messages } from "./messages";

interface TroopWindowProps extends WithGameWindowProps {
  readonly index: number;
  readonly creature: Creature;
  // FIXME: not really connected to hero skills
  readonly skillEnhancements: HeroSkills;
  readonly morale: MoraleType;
  readonly luck: LuckType;
  readonly count: number;
  readonly dismissible: boolean;
  readonly dismissPromptVisible: boolean;
  readonly onDismissClick: (index: number) => void;
  readonly onConfirmDismissClick: (index: number) => void;
  readonly onCancelDismissClick: () => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "skillEnhancements" |
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
    skillEnhancements: {},
  };

  public render() {
    const { creature, skillEnhancements } = this.props;

    return (
      <Row className={styles.root}>
        <Col
          className={styles.creature}
          span={12}
        >
          <CreatureIcon
            size="large"
            creature={this.props.creature.id}
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
              <FormattedMessage {...messages.attack} />: {creature.attack}
              {this.renderEnhancedValue(creature.attack, skillEnhancements[Skill.AttackSkill])}
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...messages.defense} />: {creature.defense}
              {this.renderEnhancedValue(creature.defense, skillEnhancements[Skill.DefenseSkill])}
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
              <FormattedMessage {...moraleMessages.title} />
              : <FormattedMessage {...getMoraleTypeValueMessage(this.props.morale)} />
            </GameText>
          </Row>
          <Row>
            <GameText size="normal">
              <FormattedMessage {...luckMessages.title} />
              : <FormattedMessage {...getLuckValueMessage(this.props.luck)} />
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
        {this.renderCount(this.props.count)}
      </Row>
    );
  }

  private renderEnhancedValue(baseValue: number, bonus: number) {
    return bonus ?
      ` (${baseValue + bonus})` :
      undefined;
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
    this.props.onDismissClick(this.props.index);
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
      <DismissTroopPrompt
        visible={visible}
        onConfirmClick={this.onConfirmDismiss}
        onCancelClick={this.props.onCancelDismissClick}
      />
    );
  }

  private readonly onConfirmDismiss = () => {
    this.props.onConfirmDismissClick(this.props.index);
  }
}

const TroopWindowWrapped = withGameWindow(402)(TroopWindow);

type TroopWindowWrappedProps = ExtractProps<typeof TroopWindowWrapped>;

export {
  TroopWindowWrapped as TroopWindow,
  TroopWindowWrappedProps as TroopWindowProps,
};
