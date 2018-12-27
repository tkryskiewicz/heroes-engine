import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { HeroSkills } from "heroes-core";
import { SkillIds } from "heroes-homm1";

import "./HeroCombatOptions.scss";

import { GameButton, HeroPortrait } from "../base";
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
import { ComponentWithDefaultProps } from "../util";

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
  onCastSpellClick: () => void;
  onRetreatClick: () => void;
  canSurrender: boolean;
  onSurrenderClick: () => void;
  onExitClick: () => void;
}

type DefaultProp =
  "onCastSpellClick" |
  "onRetreatClick" |
  "onSurrenderClick" |
  "onExitClick";

class HeroCombatOptions extends React.Component<HeroCombatOptionsProps & InjectedIntlProps> {
  public static defaultProps: Pick<HeroCombatOptionsProps, DefaultProp> = {
    onCastSpellClick: () => undefined,
    onExitClick: () => undefined,
    onRetreatClick: () => undefined,
    onSurrenderClick: () => undefined,
  };

  public render() {
    const { hero } = this.props;

    return (
      <GameWindow
        width={250}
        visible={this.props.visible}
      >
        <div className="hero-combat-options">
          <div className="hero-combat-options-name">
            <GameText size="large">
              {this.getHeroTitle()}
            </GameText>
          </div>
          <div className="hero-combat-options-portrait">
            <HeroPortrait
              hero={hero.id}
            />
          </div>
          {this.renderCharacteristics(hero.alignment, hero.skills, hero.morale, hero.luck)}
          <div className="hero-combat-options-cast-spell">
            <GameButton
              group="hero-combat-options"
              type="cast-spell"
              disabled={!this.props.canCastSpell}
              onClick={this.props.onCastSpellClick}
            />
          </div>
          <div className="hero-combat-options-retreat">
            <GameButton
              group="hero-combat-options"
              type="retreat"
              disabled={false}
              onClick={this.props.onRetreatClick}
            />
          </div>
          <div className="hero-combat-options-surrender">
            <GameButton
              group="hero-combat-options"
              type="surrender"
              disabled={!this.props.canSurrender}
              onClick={this.props.onSurrenderClick}
            />
          </div>
          <div className="hero-combat-options-exit">
            <GameButton
              group="hero-combat-options"
              type="exit"
              onClick={this.props.onExitClick}
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
      <div className="hero-combat-options-characteristics">
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

const HeroCombatOptionsWrapped:
  ComponentWithDefaultProps<HeroCombatOptionsProps, typeof HeroCombatOptions.defaultProps> =
  injectIntl(HeroCombatOptions) as any;

export {
  HeroCombatOptionsWrapped as HeroCombatOptions,
};
