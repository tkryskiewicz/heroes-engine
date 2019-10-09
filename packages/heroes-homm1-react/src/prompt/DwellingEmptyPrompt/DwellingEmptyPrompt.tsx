import React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { GameModal } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { getCreatureNameMessage, getMapObjectNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

interface Props extends ConfirmPromptProps, InjectedIntlProps {
  readonly dwelling: string;
  readonly creature: string;
}

class DwellingEmptyPrompt extends React.Component<Props> {
  public render() {
    const { dwelling, creature } = this.props;
    const { formatMessage } = this.props.intl;

    const creatureName = formatMessage(getCreatureNameMessage(creature));

    return (
      <GameModal
        type="okay"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getMapObjectNameMessage(dwelling)} />
        </GameParagraph>
        <GameText size="large">
          <FormattedMessage {...messages.content} values={{ creatureName }} />
        </GameText>
      </GameModal>
    );
  }
}

const ComponentWrapped = injectIntl(DwellingEmptyPrompt);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as DwellingEmptyPrompt,
  ComponentWrappedProps as DwellingEmptyPromptProps,
};
