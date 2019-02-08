import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../base";
import { GameText, WithGameWindowProps } from "../core";
import { messages } from "./messages";

export interface EndTurnPromptProps extends WithGameWindowProps {
  readonly onConfirmClick?: () => void;
  readonly onCancelClick?: () => void;
}

export class EndTurnPrompt extends React.Component<EndTurnPromptProps> {
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
