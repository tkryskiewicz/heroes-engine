import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { HeroSkills } from "heroes-core";

import { Frame, GameModal, HeroPortrait } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { getHeroNameMessage, getSkillNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

export interface HeroLevelUpPromptProps extends ConfirmPromptProps {
  readonly hero: string;
  readonly skillBonuses: HeroSkills;
}

export class HeroLevelUpPrompt extends React.Component<HeroLevelUpPromptProps> {
  public render() {
    const { hero, skillBonuses, ...rest } = this.props;

    return (
      <GameModal
        type="okay"
        size={4}
        {...rest}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getHeroNameMessage(hero)}>
            {(name) => <FormattedMessage {...messages.title} values={{ name }} />}
          </FormattedMessage>
        </GameParagraph>
        <GameParagraph textSize="large">
          {this.renderSkillBonuses(skillBonuses)}
        </GameParagraph>
        <Frame>
          <HeroPortrait
            hero={hero}
          />
        </Frame>
      </GameModal>
    );
  }

  private renderSkillBonuses(bonuses: HeroSkills) {
    return Object.keys(bonuses)
      .map((s) => this.renderSkillBonus(s, bonuses[s]));
  }

  private renderSkillBonus(skill: string, value: number) {
    return (
      <div key={skill}>
        <GameText
          size="large"
        >
          <FormattedMessage {...getSkillNameMessage(skill)} />
          {" "}
          {value > 0 && "+"}<FormattedNumber value={value} />
        </GameText>
      </div>
    );
  }
}
