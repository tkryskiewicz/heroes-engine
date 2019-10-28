import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { CancelPromptProps } from "../prompt";
import { messages } from "./messages";

export class DirectConnectDialPrompt extends React.Component<CancelPromptProps> {
  public render() {
    return (
      <GameModal
        type="cancel"
        size={2}
        visible={this.props.visible}
        onCancelClick={this.props.onCancelClick}
      >
        <GameParagraph textSize="normal">
          <FormattedMessage {...messages.message} />
        </GameParagraph>
        <GameText size="normal">
          <FormattedMessage {...messages.abortMessage} />
        </GameText>
      </GameModal>
    );
  }
}
