import React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";

import { ExperienceAmount, GameModal, ResourceCost } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { PromptProps } from "../prompt";
import { messages } from "./messages";

export interface TreasureChestPromptProps extends PromptProps {
  readonly resources: Resources;
  readonly experience: number;
}

export class TreasureChestPrompt extends React.Component<TreasureChestPromptProps> {
  public render() {
    return (
      <GameModal
        type="yesNo"
        size={5}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.title} />
        </GameParagraph>
        <GameText size="large">
          <FormattedMessage {...messages.content} />
        </GameText>
        <div>
          <ResourceCost
            cost={this.props.resources}
          />
          <GameText size="large">
            <FormattedMessage {...messages.alertnative} />
          </GameText>
          <ExperienceAmount
            amount={this.props.experience}
          />
        </div>
      </GameModal>
    );
  }
}
