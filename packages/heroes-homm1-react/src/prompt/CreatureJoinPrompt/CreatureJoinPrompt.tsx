import React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { GameModal } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { getCreaturePluralNameMessage, getMapObjectNameMessage } from "../../messages";
import { PromptProps } from "../prompt";
import { messages } from "./messages";

interface Props extends PromptProps, InjectedIntlProps {
  readonly dwelling?: string;
  readonly creature: string;
}

class CreatureJoinPrompt extends React.Component<Props> {
  public render() {
    const { dwelling, creature } = this.props;
    const { formatMessage } = this.props.intl;

    const creatureName = formatMessage(getCreaturePluralNameMessage(creature));

    return (
      <GameModal
        type="yesNo"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...dwelling ? getMapObjectNameMessage(dwelling) : messages.title} />
        </GameParagraph>
        <GameText size="large">
          <FormattedMessage {...messages.content} values={{ creatureName }} />
        </GameText>
      </GameModal>
    );
  }
}

const ComponentWrapped = injectIntl(CreatureJoinPrompt);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as CreatureJoinPrompt,
  ComponentWrappedProps as CreatureJoinPromptProps,
};
