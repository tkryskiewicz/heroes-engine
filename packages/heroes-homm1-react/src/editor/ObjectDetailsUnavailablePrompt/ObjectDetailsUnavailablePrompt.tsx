import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { ConfirmPromptProps } from "../../prompt/prompt";
import { messages } from "./messages";

export class ObjectDetailsUnavailablePrompt extends React.Component<ConfirmPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.content} />
        </GameText>
      </GameModal>
    );
  }
}

export {
  ConfirmPromptProps as ObjectDetailsUnavailablePromptProps,
};
