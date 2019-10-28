import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { CancelPromptProps } from "../prompt";
import { messages } from "./messages";

export class WaitingForRingPrompt extends React.Component<CancelPromptProps> {
  public render() {
    return (
      <GameModal
        type="cancel"
        visible={this.props.visible}
        onCancelClick={this.props.onCancelClick}
      >
        <GameText size="normal">
          <FormattedMessage {...messages.message} />
        </GameText>
      </GameModal>
    );
  }
}
