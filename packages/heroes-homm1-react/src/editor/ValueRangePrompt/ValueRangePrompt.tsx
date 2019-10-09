import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { ConfirmPromptProps } from "../../prompt/prompt";
import { messages } from "./messages";

export interface ValueRangePromptProps extends ConfirmPromptProps {
  readonly min: number;
  readonly max: number;
  readonly minIsRandom?: boolean;
}

export class ValueRangePrompt extends React.Component<ValueRangePromptProps> {
  public render() {
    const { min, max, minIsRandom } = this.props;

    return (
      <GameModal
        type="okay"
        size={1}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameText size="large">
          <FormattedMessage {...minIsRandom ? messages.contentRandom : messages.content} values={{ min, max }} />
        </GameText>
      </GameModal>
    );
  }
}
