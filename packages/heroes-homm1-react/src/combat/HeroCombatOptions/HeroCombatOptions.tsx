import React from "react";
import { FormattedMessage, FormattedNumber, InjectedIntlProps, injectIntl } from "react-intl";

import { HeroSkills } from "heroes-core";
import { noop } from "heroes-helpers";
import { LuckType, MoraleType, SkillIds } from "heroes-homm1";

import * as styles from "./HeroCombatOptions.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { GameParagraph, GameText, withGameWindow, WithGameWindowProps } from "../../core";
import {
  getHeroClassTitleMessage,
  getHeroNameMessage,
  getLuckValueMessage,
  getMoraleTypeValueMessage,
  getSkillNameMessage,
  luckMessages,
  moraleMessages,
} from "../../messages";

interface Hero {
  readonly id: string;
  readonly playerColor: string;
  readonly heroClass: string;
  readonly skills: HeroSkills;
  readonly morale: MoraleType;
  readonly luck: LuckType;
}

interface HeroCombatOptionsProps extends InjectedIntlProps, WithGameWindowProps {
  readonly hero: Hero;
  readonly renderHeroPortrait: () => React.ReactNode;
  readonly canCastSpell: boolean;
  readonly onCastSpellMouseEnter: () => void;
  readonly onCastSpellMouseLeave: () => void;
  readonly onCastSpellClick: () => void;
  readonly canRetreat: boolean;
  readonly onRetreatMouseEnter: () => void;
  readonly onRetreatMouseLeave: () => void;
  readonly onRetreatClick: () => void;
  readonly canSurrender: boolean;
  readonly onSurrenderMouseEnter: () => void;
  readonly onSurrenderMouseLeave: () => void;
  readonly onSurrenderClick: () => void;
  readonly onCancelMouseEnter: () => void;
  readonly onCancelMouseLeave: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "renderHeroPortrait" |
  "onCastSpellMouseEnter" |
  "onCastSpellMouseLeave" |
  "onCastSpellClick" |
  "onRetreatMouseEnter" |
  "onRetreatMouseLeave" |
  "onRetreatClick" |
  "onSurrenderMouseEnter" |
  "onSurrenderMouseLeave" |
  "onSurrenderClick" |
  "onCancelMouseEnter" |
  "onCancelMouseLeave" |
  "onCancelClick";

class HeroCombatOptions extends React.Component<HeroCombatOptionsProps> {
  public static readonly defaultProps: Pick<HeroCombatOptionsProps, DefaultProp> = {
    onCancelClick: noop,
    onCancelMouseEnter: noop,
    onCancelMouseLeave: noop,
    onCastSpellClick: noop,
    onCastSpellMouseEnter: noop,
    onCastSpellMouseLeave: noop,
    onRetreatClick: noop,
    onRetreatMouseEnter: noop,
    onRetreatMouseLeave: noop,
    onSurrenderClick: noop,
    onSurrenderMouseEnter: noop,
    onSurrenderMouseLeave: noop,
    renderHeroPortrait: noop,
  };

  public render() {
    const { hero } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.name}>
          <GameText size="large">
            {this.getHeroTitle()}
          </GameText>
        </div>
        <div className={styles.portrait}>
          {this.props.renderHeroPortrait()}
        </div>
        {this.renderCharacteristics(hero.playerColor, hero.skills, hero.morale, hero.luck)}
        <div className={styles.castSpell}>
          <ImageButton
            images={buttonImages.castSpell}
            disabled={!this.props.canCastSpell}
            onMouseEnter={this.props.onCastSpellMouseEnter}
            onMouseLeave={this.props.onCastSpellMouseLeave}
            onClick={this.props.onCastSpellClick}
          />
        </div>
        <div className={styles.retreat}>
          <ImageButton
            images={buttonImages.retreat}
            disabled={!this.props.canRetreat}
            onMouseEnter={this.props.onRetreatMouseEnter}
            onMouseLeave={this.props.onRetreatMouseLeave}
            onClick={this.props.onRetreatClick}
          />
        </div>
        <div className={styles.surrender}>
          <ImageButton
            images={buttonImages.surrender}
            disabled={!this.props.canSurrender}
            onMouseEnter={this.props.onSurrenderMouseEnter}
            onMouseLeave={this.props.onSurrenderMouseLeave}
            onClick={this.props.onSurrenderClick}
          />
        </div>
        <div className={styles.cancel}>
          <ImageButton
            images={buttonImages.cancel}
            onMouseEnter={this.props.onCancelMouseEnter}
            onMouseLeave={this.props.onCancelMouseLeave}
            onClick={this.props.onCancelClick}
          />
        </div>
      </div>
    );
  }

  private getHeroTitle() {
    const { formatMessage } = this.props.intl;

    const heroName = formatMessage(getHeroNameMessage(this.props.hero.id));

    return formatMessage(getHeroClassTitleMessage(this.props.hero.heroClass), { heroName });
  }

  private renderCharacteristics(playerColor: string, skills: HeroSkills, morale: MoraleType, luck: LuckType) {
    const content = SkillIds.map((s) => (
      <span key={s}>
        <FormattedMessage {...getSkillNameMessage(s)} />:
        {" "}
        <FormattedNumber value={skills[s] || 0} />
        <br />
      </span>
    ));

    return (
      <div className={styles.characteristics}>
        <img src={`assets/playerColors/${playerColor}/combat-options-background.jpg`} />
        <GameParagraph textSize="small">
          {content}
          <FormattedMessage {...moraleMessages.title} />
          : <FormattedMessage {...getMoraleTypeValueMessage(morale)} />
          <br />
          <FormattedMessage {...luckMessages.title} />
          : <FormattedMessage {...getLuckValueMessage(luck)} />
          <br />
        </GameParagraph>
      </div>
    );
  }
}

const ComponentWrapped = injectIntl(
  withGameWindow(250)(HeroCombatOptions),
);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as HeroCombatOptions,
  ComponentWrappedProps as HeroCombatOptionsProps,
};
