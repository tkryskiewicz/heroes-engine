import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../base";
import { GameText } from "../core";
import { messages } from "./messages";

export interface ArtifactNotTradablePromptProps {
  readonly visible?: boolean;
  readonly onConfirmClick?: () => void;
}

export class ArtifactNotTradablePrompt extends React.Component<ArtifactNotTradablePromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        visible={true}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameText size="large">
          <FormattedMessage {...messages.artifactNotTradable} />
        </GameText>
      </GameModal>
    );
  }
}
