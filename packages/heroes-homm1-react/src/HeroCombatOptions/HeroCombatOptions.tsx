import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { HeroSkills } from "heroes-core";
import { SkillIds } from "heroes-homm1";

import * as styles from "./HeroCombatOptions.module.scss";

import { buttonImages } from "./assets";

import { HeroPortrait, ImageButton } from "../base";
import { GameParagraph, GameText, GameWindow } from "../core";
import {
  getHeroClassTitleMessage,
  getHeroNameMessage,
  getLuckValueMessage,
  getMoraleValueMessage,
  getSkillNameMessage,
  luckMessages,
  moraleMessages,
} from "../messages";

export interface HeroCombatOptionsProps {
  visible?: boolean;
  hero: {
    id: string;
    alignment: string;
    heroClass: string;
    skills: HeroSkills;
    morale: number;
    luck: number;
  };
  canCastSpell: boolean;
  onCastSpellMouseEnter: () => void;
  onCastSpellMouseLeave: () => void;
  onCastSpellClick: () => void;
  canRetreat: boolean;
  onRetreatMouseEnter: () => void;
  onRetreatMouseLeave: () => void;
  onRetreatClick: () => void;
  canSurrender: boolean;
  onSurrenderMouseEnter: () => void;
  onSurrenderMouseLeave: () => void;
  onSurrenderClick: () => void;
  onCancelMouseEnter: () => void;
  onCancelMouseLeave: () => void;
  onCancelClick: () => void;
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
  public static defaultProps: Pick<HeroCombatOptionsProps, DefaultProp> = {
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
      <GameWindow
        width={250}
        visible={this.props.visible}
      >
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
      </GameWindow>
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

const HeroCombatOptionsWrapped = injectIntl(HeroCombatOptions);

export {
  HeroCombatOptionsWrapped as HeroCombatOptions,
};
