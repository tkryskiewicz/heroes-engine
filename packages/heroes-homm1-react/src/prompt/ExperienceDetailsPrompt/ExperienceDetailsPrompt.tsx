import React from "react";
import { FormattedMessage } from "react-intl";

import { getCurrentLevel, getNextLevelExperience } from "heroes-homm1";

import { GameModal } from "../../base";
import { GameParagraph } from "../../core";
import { experienceMessages } from "../../messages";
import { ConfirmPromptProps } from "../prompt";

export interface ExperienceDetailsPromptProps extends ConfirmPromptProps {
  readonly value: number;
}

export class ExperienceDetailsPrompt extends React.Component<ExperienceDetailsPromptProps> {
  public render() {
    // TODO: extract to props
    const currentLevel = getCurrentLevel(this.props.value);
    const nextLevelExperience = getNextLevelExperience(this.props.value);

    return (
      <GameModal
        type="okay"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...experienceMessages.level} values={{ value: currentLevel }} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...experienceMessages.value} values={{ value: this.props.value }} />
          <br />
          <FormattedMessage {...experienceMessages.nextLevel} values={{ value: nextLevelExperience }} />
        </GameParagraph>
      </GameModal>
    );
  }
}
