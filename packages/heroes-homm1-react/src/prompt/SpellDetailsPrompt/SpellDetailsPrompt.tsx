import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal, SpellIcon } from "../../base";
import { GameParagraph } from "../../core";
import { getSpellDescriptionMessage, getSpellLongNameMessage, getSpellNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";

export interface SpellDetailsPromptProps extends ConfirmPromptProps {
  readonly spell: string;
}

export class SpellDetailsPrompt extends React.Component<SpellDetailsPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={3}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getSpellLongNameMessage(this.props.spell)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getSpellDescriptionMessage(this.props.spell)} />
        </GameParagraph>
        <SpellIcon
          spell={this.props.spell}
        />
        <GameParagraph textSize="normal">
          <FormattedMessage {...getSpellNameMessage(this.props.spell)} />
        </GameParagraph>
      </GameModal>
    );
  }
}
