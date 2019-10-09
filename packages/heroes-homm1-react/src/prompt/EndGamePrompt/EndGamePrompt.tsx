import React from "react";
import { FormattedMessage } from "react-intl";

import { GameOption } from "heroes-homm1";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { PromptProps } from "../prompt";
import { getTextMessage } from "./messages";

export interface EndGamePromptProps extends PromptProps {
  readonly option: GameOption;
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
