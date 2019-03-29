import * as React from "react";
import { FormattedMessage } from "react-intl";

import { MapObjectId } from "heroes-homm1";

import { GameModal } from "../../base";
import { GameParagraph, GameText } from "../../core";
import { getMapObjectNameMessage } from "../../messages";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

export class ObeliskAlreadyVisitedPrompt extends React.Component<ConfirmPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getMapObjectNameMessage(MapObjectId.Obelisk)} />
        </GameParagraph>
        <GameText size="large">
          <FormattedMessage {...messages.content} />
        </GameText>
      </GameModal>
    );
  }
}

export {
  ConfirmPromptProps as ObeliskAlreadyVisitedPromptProps,
};
