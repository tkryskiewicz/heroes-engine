import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

export class NoSpellsPrompt extends React.Component<ConfirmPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.noSpells} />
        </GameText>
      </GameModal>
    );
  }
}

export {
  ConfirmPromptProps as NoSpellsPromptProps,
};
