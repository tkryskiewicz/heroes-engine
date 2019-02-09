import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameModal } from "../base";
import { GameParagraph } from "../core";
import { getArtifactDescriptionMessage, getArtifactNameMessage } from "../messages";

export interface ArtifactDetailsPromptProps {
  readonly artifact: string;
  readonly visible?: boolean;
  readonly onConfirmClick?: () => void;
}

export class ArtifactDetailsPrompt extends React.Component<ArtifactDetailsPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getArtifactNameMessage(this.props.artifact)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getArtifactDescriptionMessage(this.props.artifact)} />
        </GameParagraph>
      </GameModal>
    );
  }
}
