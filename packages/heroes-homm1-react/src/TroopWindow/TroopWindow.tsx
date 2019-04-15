import * as React from "react";
import { FormattedMessage } from "react-intl";

import { CreatureData, Damage, HeroSkills } from "heroes-core";
import { LuckType, MoraleType, Skill } from "heroes-homm1";

import * as styles from "./TroopWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../base";
import { GameParagraph, GameText, withGameWindow, WithGameWindowProps } from "../core";
import {
  getCreatureNameMessage,
  getLuckValueMessage,
  getMoraleTypeValueMessage,
  luckMessages,
  moraleMessages,
} from "../messages";
import { getSpeedMessage, messages } from "./messages";

interface TroopWindowProps extends WithGameWindowProps {
  readonly index: number;
  readonly creature: CreatureData;
  // FIXME: not really connected to hero skills
  readonly skillEnhancements: HeroSkills;
  readonly morale: MoraleType;
  readonly luck: LuckType;
  readonly count: number;
  readonly renderCreature: () => React.ReactNode;
  readonly dismissVisible: boolean;
  readonly onDismissClick: (index: number) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "skillEnhancements" |
  "renderCreature" |
  "dismissVisible" |
  "onDismissClick" |
  "onExitClick";

class TroopWindow extends React.Component<TroopWindowProps> {
  public static readonly defaultProps: Pick<TroopWindowProps, DefaultProp> = {
    dismissVisible: false,
    onDismissClick: () => undefined,
    onExitClick: () => undefined,
    renderCreature: () => undefined,
    skillEnhancements: {},
  };

  public render() {
    const { creature, skillEnhancements } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.leftPanel}>
          <div className={styles.creature}>
            <div className={styles.creatureInner}>
              {this.props.renderCreature()}
            </div>
          </div>
        </div>
        {this.renderCount(this.props.count)}
        <div className={styles.rightPanel}>
          {this.renderSkills(creature, skillEnhancements)}
          <div className={styles.actions}>
            {this.props.dismissVisible && this.renderDismissal()}
            <div className={styles.exit}>
              <ImageButton
                images={buttonImages.exit}
                onClick={this.props.onExitClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderSkills(creature: CreatureData, skillEnhancements: HeroSkills) {
    return (
      <>
        <div className={styles.creatureName}>
          <GameText size="normal">
            <FormattedMessage {...getCreatureNameMessage(creature.id)} />
          </GameText>
        </div>
        <GameParagraph textSize="normal">
          <FormattedMessage {...messages.attack} />: {creature.attack}
          {this.renderEnhancedValue(creature.attack, skillEnhancements[Skill.Attack])}
          <br />
          <FormattedMessage {...messages.defense} />: {creature.defense}
          {this.renderEnhancedValue(creature.defense, skillEnhancements[Skill.Defense])}
          <br />
          {creature.shots && this.renderShots(creature.shots)}
          <FormattedMessage {...messages.damage} />: {this.renderDamage(creature.damage)}
          <br />
          <FormattedMessage {...messages.hitPoints} />: {creature.hitPoints}
          <br />
          <FormattedMessage {...messages.speed} />: <FormattedMessage {...getSpeedMessage(creature.speed)} />
          <br />
          <FormattedMessage {...moraleMessages.title} />
          : <FormattedMessage {...getMoraleTypeValueMessage(this.props.morale)} />
          <br />
          <FormattedMessage {...luckMessages.title} />
          : <FormattedMessage {...getLuckValueMessage(this.props.luck)} />
        </GameParagraph>
      </>
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
      <>
        <GameText size="normal">
          <FormattedMessage {...messages.shots} />
          :
          {value}
        </GameText>
        <br />
      </>
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

  private renderDismissal() {
    return (
      <div className={styles.dismiss}>
        <ImageButton
          images={buttonImages.dismiss}
          onClick={this.onDismissClick}
        />
      </div>
    );
  }
}

const ComponentWrapped = withGameWindow(402)(TroopWindow);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as TroopWindow,
  ComponentWrappedProps as TroopWindowProps,
};
