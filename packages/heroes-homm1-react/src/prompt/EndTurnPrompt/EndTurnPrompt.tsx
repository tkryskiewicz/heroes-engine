import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { PromptProps } from "../prompt";
import { messages } from "./messages";

export class EndTurnPrompt extends React.Component<PromptProps> {
  public render() {
    return (
      <GameModal
        type="yesNo"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.endTurnWarning} />
        </GameText>
      </GameModal>
    );
  }
}

export {
  PromptProps as EndTurnPromptProps,
};
