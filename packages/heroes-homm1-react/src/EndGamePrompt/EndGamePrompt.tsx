import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../base";
import { GameText } from "../core";
import { getTextMessage } from "./messages";

export type GameOption =
  "new-game" |
  "load-game" |
  "quit";

export interface EndGamePromptProps {
  readonly visible?: boolean;
  readonly option: GameOption;
  readonly onConfirmClick?: () => void;
  readonly onCancelClick?: () => void;
}

export class EndGamePrompt extends React.Component<EndGamePromptProps> {
  public render() {
    return (
      <GameModal
        type="yesNo"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameText size="large">
          <FormattedMessage {...getTextMessage(this.props.option)} />
        </GameText>
      </GameModal>
    );
  }
}
