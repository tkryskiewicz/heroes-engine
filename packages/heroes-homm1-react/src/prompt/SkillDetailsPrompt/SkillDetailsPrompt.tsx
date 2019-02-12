import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameParagraph } from "../../core";
import { getSkillDescriptionMessage, getSkillNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";

export interface SkillDetailsPromptProps extends ConfirmPromptProps {
  readonly skill: string;
}

export class SkillDetailsPrompt extends React.Component<SkillDetailsPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getSkillNameMessage(this.props.skill)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getSkillDescriptionMessage(this.props.skill)} />
        </GameParagraph>
      </GameModal>
    );
  }
}
