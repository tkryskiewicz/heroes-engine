import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../../base";
import { GameText } from "../../core";
import { PromptProps } from "../prompt";
import { messages } from "./messages";

export class ArtifactNotTradablePrompt extends React.Component<PromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.artifactNotTradable} />
        </GameText>
      </GameModal>
    );
  }
}

export {
  PromptProps as ArtifactNotTradablePromptProps,
};
