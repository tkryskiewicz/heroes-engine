import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { LuckModifier, LuckModifierType, LuckType } from "heroes-homm1";

import { GameModal } from "../../base";
import { GameParagraph } from "../../core";
import {
  getArtifactNameMessage,
  getLuckDescriptionMessage,
  getLuckModifierTypeMessage,
  getLuckNameMessage,
  getMapObjectNameMessage,
} from "../../messages";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

interface LuckDetailsPromptProps extends InjectedIntlProps, ConfirmPromptProps {
  readonly type: LuckType;
  readonly modifiers: LuckModifier[];
}

type DefaultProp =
  "modifiers";

class LuckDetailsPrompt extends React.Component<LuckDetailsPromptProps> {
  public static readonly defaultProps: Pick<LuckDetailsPromptProps, DefaultProp> = {
    modifiers: [],
  };

  public render() {
    const modifiersSize = Math.floor(this.props.modifiers.length / 3);

    return (
      <GameModal
        type="okay"
        size={3 + modifiersSize}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...getLuckNameMessage(this.props.type)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getLuckDescriptionMessage(this.props.type)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.modifiers} />:
            <br />
          {this.renderModifiers(this.props.modifiers)}
        </GameParagraph>
      </GameModal>
    );
  }

  private renderModifiers(modifiers: LuckModifier[]) {
    return modifiers.length !== 0 ?
      modifiers.map((m) => this.renderModifier(m)) :
      this.props.intl.formatMessage(messages.noModifiers);
  }

  private renderModifier(modifier: LuckModifier) {
    const { formatMessage } = this.props.intl;

    let name = "";

    switch (modifier.type) {
      case LuckModifierType.Artifact:
        name = formatMessage(getArtifactNameMessage(modifier.artifact));
        break;
      case LuckModifierType.StructureVisited:
        name = formatMessage(getMapObjectNameMessage(modifier.structure));
        break;
    }

    const message = formatMessage(getLuckModifierTypeMessage(modifier.type), {
      name,
    });

    return (
      <>
        {message} {modifier.value > 0 && "+"}{modifier.value}
        <br />
      </>
    );
  }
}

const ComponentWrapped = injectIntl(LuckDetailsPrompt);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as LuckDetailsPrompt,
  ComponentWrappedProps as LuckDetailsPromptProps,
};
