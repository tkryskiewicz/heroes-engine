import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../base";
import { GameText, WithGameWindowProps } from "../core";
import { messages } from "./messages";

export interface NoSpellsPromptProps extends WithGameWindowProps {
  readonly onOkayClick?: () => void;
}

export class NoSpellsPrompt extends React.Component<NoSpellsPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        visible={this.props.visible}
        onConfirmClick={this.props.onOkayClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.noSpells} />
        </GameText>
      </GameModal>
    );
  }
}
