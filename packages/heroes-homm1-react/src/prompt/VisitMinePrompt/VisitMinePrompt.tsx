import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { MapObjectId, Resource } from "heroes-homm1";

import { GameModal, ResourceIcon } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { getMapObjectNameMessage, getResourceNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

interface Props extends ConfirmPromptProps, InjectedIntlProps {
  readonly resource: string;
  readonly mine: string;
  readonly amount: number;
}

class VisitMinePrompt extends React.Component<Props> {
  public render() {
    const { resource, mine } = this.props;
    const { formatMessage } = this.props.intl;

    const resourceName = formatMessage(getResourceNameMessage(resource));

    const mineName = formatMessage(getMapObjectNameMessage(mine));

    const amount = formatMessage(resource !== Resource.Gold ? messages.amountUnits : messages.amount, {
      amount: this.props.amount,
      resource: resource !== Resource.Mercury ? resourceName.toLowerCase() : resourceName,
    });

    return (
      <GameModal
        type="okay"
        size={3}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          {mineName}
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage
            {...mine !== MapObjectId.Alchemist ? messages.content : messages.contentAlchemist}
            values={{ mine: mine !== MapObjectId.Alchemist ? mineName.toLowerCase() : mineName, amount }}
          />
        </GameParagraph>
        <div>
          <ResourceIcon
            size="large"
            resource={resource}
          />
        </div>
        <GameText size="large">
          <FormattedMessage {...messages.amountPerDay} values={{ amount: this.props.amount }} />
        </GameText>
      </GameModal>
    );
  }
}

const ComponentWrapped = injectIntl(VisitMinePrompt);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as VisitMinePrompt,
  ComponentWrappedProps as VisitMinePromptProps,
};
