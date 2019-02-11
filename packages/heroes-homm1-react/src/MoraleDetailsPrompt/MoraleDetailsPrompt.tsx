import * as React from "react";
import { FormattedMessage } from "react-intl";

import { HeroClass } from "heroes-homm1";

import { GameModal } from "../base";
import { GameParagraph } from "../core";
import {
  getHeroClassNameMessage,
  getMoraleDescriptionMessage,
  getMoraleNameMessage,
  moraleMessages,
} from "../messages";

export interface MoraleDetailsPromptProps {
  readonly value: number;
  readonly visible?: boolean;
  readonly onConfirmClick?: () => void;
}

// TODO: implement modifiers
export class MoraleDetailsPrompt extends React.Component<MoraleDetailsPromptProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={3}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getMoraleNameMessage(this.props.value)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getMoraleDescriptionMessage(this.props.value)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...moraleMessages.modifiers} />:
          <br />
          <FormattedMessage {...getHeroClassNameMessage(HeroClass.Knight)}>
            {(className) => (<FormattedMessage {...moraleMessages.heroClassBonus} values={{ className }} />)}
          </FormattedMessage>
          <br />
          <FormattedMessage {...moraleMessages.humanTroopsBonus} />
        </GameParagraph>
      </GameModal>
    );
  }
}
