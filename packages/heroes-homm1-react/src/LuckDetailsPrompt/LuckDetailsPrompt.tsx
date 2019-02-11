import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../base";
import { GameParagraph } from "../core";
import { getLuckDescriptionMessage, getLuckNameMessage, luckMessages } from "../messages";
import { messages } from "./messages";

export interface LuckDetailsPromptProps {
  readonly value: number;
  readonly visible?: boolean;
  readonly onConfirmClick?: () => void;
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
          <FormattedMessage {...getLuckNameMessage(this.props.value)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getLuckDescriptionMessage(this.props.value)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...luckMessages.modifiers} />:
            <br />
          <FormattedMessage {...messages.noModifiers} />
        </GameParagraph>
      </GameModal>
    );
  }
}
