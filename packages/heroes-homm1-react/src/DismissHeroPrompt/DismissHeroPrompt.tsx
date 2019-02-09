import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../base";
import { GameParagraph } from "../core";
import { messages } from "./messages";

export interface DismissHeroPromptProps {
  readonly visible?: boolean;
  readonly onConfirmClick?: () => void;
  readonly onCancelClick?: () => void;
}

export class DismissHeroPrompt extends React.Component<DismissHeroPromptProps> {
  public render() {
    return (
      <GameModal
        type="yesNo"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.dismissHeroMessage} />
        </GameParagraph>
      </GameModal>
    );
  }
}
