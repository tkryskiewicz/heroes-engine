import React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { CancelPromptProps } from "../prompt";
import { messages } from "./messages";

interface Props extends CancelPromptProps {
  readonly number: string;
}

export class DialingPrompt extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, "number"> = {
    number: "",
  };

  public render() {
    return (
      <GameModal
        type="cancel"
        visible={this.props.visible}
        onCancelClick={this.props.onCancelClick}
      >
        <GameText size="normal">
          <FormattedMessage {...messages.message} values={{ number: this.props.number }} />
        </GameText>
      </GameModal>
    );
  }
}

export type DialingPromptProps = ExtractPublicProps<typeof DialingPrompt>;
