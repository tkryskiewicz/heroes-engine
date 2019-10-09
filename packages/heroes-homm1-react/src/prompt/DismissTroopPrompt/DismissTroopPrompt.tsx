import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameParagraph } from "../../core";
import { PromptProps } from "../prompt";
import { messages } from "./messages";

export class DismissTroopPrompt extends React.Component<PromptProps> {
  public render() {
    return (
      <GameModal
        type="yesNo"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.dismissMessage} />
        </GameParagraph>
      </GameModal>
    );
  }
}

export {
  PromptProps as DismissTroopPromptProps,
};
