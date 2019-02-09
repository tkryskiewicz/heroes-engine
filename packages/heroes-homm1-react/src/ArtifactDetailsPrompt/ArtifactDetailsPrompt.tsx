import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { GameModal } from "../base";
import { GameParagraph } from "../core";
import { getArtifactDescriptionMessage, getArtifactNameMessage, getArtifactShortNameMessage } from "../messages";

interface ArtifactDetailsPromptProps extends InjectedIntlProps {
  readonly artifact: string;
  readonly visible?: boolean;
  readonly onConfirmClick?: () => void;
}

// TODO: display bonus
class ArtifactDetailsPrompt extends React.Component<ArtifactDetailsPromptProps> {
  public render() {
    const artifactName = this.props.intl.formatMessage(getArtifactNameMessage(this.props.artifact));

    return (
      <GameModal
        type="okay"
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getArtifactShortNameMessage(this.props.artifact)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage
            {...getArtifactDescriptionMessage(this.props.artifact)}
            values={{ name: artifactName }}
          />
        </GameParagraph>
      </GameModal>
    );
  }
}

const ArtifactDetailsPromptWrapped = injectIntl(ArtifactDetailsPrompt);

type ArtifactDetailsPromptWrappedProps = ExtractProps<typeof ArtifactDetailsPromptWrapped>;

export {
  ArtifactDetailsPromptWrapped as ArtifactDetailsPrompt,
  ArtifactDetailsPromptWrappedProps as ArtifactDetailsPromptProps,
};
