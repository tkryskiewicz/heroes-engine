import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { GameModal } from "../../base";
import { GameParagraph } from "../../core";
import { getArtifactDescriptionMessage, getArtifactNameMessage, getArtifactShortNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";

interface ArtifactDetailsPromptProps extends ConfirmPromptProps, InjectedIntlProps {
  readonly artifact: string;
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

const ComponentWrapped = injectIntl(ArtifactDetailsPrompt);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as ArtifactDetailsPrompt,
  ComponentWrappedProps as ArtifactDetailsPromptProps,
};
