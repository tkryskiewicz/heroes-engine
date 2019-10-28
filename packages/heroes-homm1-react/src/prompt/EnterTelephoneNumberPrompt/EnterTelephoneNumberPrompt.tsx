import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

export class EnterTelephoneNumberPrompt extends React.Component<ConfirmPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameText size="normal">
          <FormattedMessage {...messages.message} />
        </GameText>
        <br/>
        <br/>
        INPUT
      </GameModal>
    );
  }
}
