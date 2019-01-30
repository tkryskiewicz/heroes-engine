import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { HeroSkills } from "heroes-core";
import { SkillIds } from "heroes-homm1";

import * as styles from "./HeroCombatOptions.module.scss";

import { buttonImages } from "./assets";

import { HeroPortrait, ImageButton } from "../base";
import { GameParagraph, GameText, withGameWindow, WithGameWindowProps } from "../core";
import {
  getHeroClassTitleMessage,
  getHeroNameMessage,
  getLuckValueMessage,
  getMoraleValueMessage,
  getSkillNameMessage,
  luckMessages,
  moraleMessages,
} from "../messages";

interface Hero {
  readonly id: string;
  readonly alignment: string;
  readonly heroClass: string;
  readonly skills: HeroSkills;
  readonly morale: number;
  readonly luck: number;
}

export interface HeroCombatOptionsProps extends WithGameWindowProps {
  readonly hero: Hero;
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

class HeroCombatOptions extends React.Component<HeroCombatOptionsProps & InjectedIntlProps> {
  public static readonly defaultProps: Pick<HeroCombatOptionsProps, DefaultProp> = {
    onCancelClick: () => undefined,
    onCancelMouseEnter: () => undefined,
    onCancelMouseLeave: () => undefined,
    onCastSpellClick: () => undefined,
    onCastSpellMouseEnter: () => undefined,
    onCastSpellMouseLeave: () => undefined,
    onRetreatClick: () => undefined,
    onRetreatMouseEnter: () => undefined,
    onRetreatMouseLeave: () => undefined,
    onSurrenderClick: () => undefined,
    onSurrenderMouseEnter: () => undefined,
    onSurrenderMouseLeave: () => undefined,
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
          <HeroPortrait
            hero={hero.id}
          />
        </div>
        {this.renderCharacteristics(hero.alignment, hero.skills, hero.morale, hero.luck)}
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

    const heroTitle = formatMessage(getHeroClassTitleMessage(this.props.hero.heroClass), { heroName });

    return heroTitle;
  }

  private renderCharacteristics(alignment: string, skills: HeroSkills, morale: number, luck: number) {
    const content = SkillIds.map((s) => (
      <span key={s}>
        <FormattedMessage {...getSkillNameMessage(s)} />
        : {skills[s] || 0}
        <br />
      </span>
    ));

    return (
      <div className={styles.characteristics}>
        <img src={`assets/alignments/${alignment}/combat-options-background.jpg`} />
        <GameParagraph textSize="small">
          {content}
          <FormattedMessage {...moraleMessages.title} />
          : <FormattedMessage {...getMoraleValueMessage(morale)} />
          <br />
          <FormattedMessage {...luckMessages.title} />
          : <FormattedMessage {...getLuckValueMessage(luck)} />
          <br />
        </GameParagraph>
      </div>
    );
  }
}

const HeroCombatOptionsWrapped = injectIntl(
  withGameWindow(250)(HeroCombatOptions),
);

export {
  HeroCombatOptionsWrapped as HeroCombatOptions,
};
