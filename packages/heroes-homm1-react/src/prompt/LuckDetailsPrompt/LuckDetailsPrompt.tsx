import * as React from "react";
import { FormattedMessage } from "react-intl";

import { LuckType } from "heroes-homm1";

import { GameModal } from "../../base";
import { GameParagraph } from "../../core";
import { getLuckDescriptionMessage, getLuckNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

export interface LuckDetailsPromptProps extends ConfirmPromptProps {
  readonly type: LuckType;
}

export class LuckDetailsPrompt extends React.Component<LuckDetailsPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={4}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getLuckNameMessage(this.props.type)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getLuckDescriptionMessage(this.props.type)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.modifiers} />:
            <br />
          <FormattedMessage {...messages.noModifiers} />
        </GameParagraph>
      </GameModal>
    );
  }
}
