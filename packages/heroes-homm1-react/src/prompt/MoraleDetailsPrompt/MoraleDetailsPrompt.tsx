import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { MoraleModifier, MoraleModifierType, MoraleType } from "heroes-homm1";

import { GameModal } from "../../base";
import { GameParagraph } from "../../core";
import {
  getArtifactNameMessage,
  getHeroClassNameMessage,
  getMapObjectNameMessage,
  getMoraleModifierTypeMessage,
  getMoraleTypeDescriptionMessage,
  getMoraleTypeNameMessage,
  getOriginNameMessage,
} from "../../messages";
import { ConfirmPromptProps } from "../prompt";
import { messages } from "./messages";

export interface MoraleDetailsPromptProps extends InjectedIntlProps, ConfirmPromptProps {
  readonly value: MoraleType;
  readonly modifiers: MoraleModifier[];
}

type DefaultProp =
  "modifiers";

class MoraleDetailsPrompt extends React.Component<MoraleDetailsPromptProps> {
  public static readonly defaultProps: Pick<MoraleDetailsPromptProps, DefaultProp> = {
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
          <FormattedMessage {...getMoraleTypeNameMessage(this.props.value)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...getMoraleTypeDescriptionMessage(this.props.value)} />
        </GameParagraph>
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.modifiers} />:
          <br />
          {this.renderModifiers(this.props.modifiers)}
        </GameParagraph>
      </GameModal>
    );
  }

  private renderModifiers(modifiers: MoraleModifier[]) {
    return modifiers.length !== 0 ?
      modifiers.map((m) => this.renderModifier(m)) :
      this.props.intl.formatMessage(messages.noModifiers);
  }

  private renderModifier(modifier: MoraleModifier) {
    const { formatMessage } = this.props.intl;

    let name = "unknown";
    let count = 0;

    switch (modifier.type) {
      case MoraleModifierType.HeroClass:
        name = formatMessage(getHeroClassNameMessage(modifier.heroClass));
        break;
      case MoraleModifierType.SameOriginTroops:
        name = formatMessage(getOriginNameMessage(modifier.town));
        break;
      case MoraleModifierType.DifferentOriginTroops:
        count = modifier.count;
        break;
      case MoraleModifierType.Artifact:
        name = formatMessage(getArtifactNameMessage(modifier.artifact));
        break;
      case MoraleModifierType.StructureVisited:
      case MoraleModifierType.StructureRobber:
        name = formatMessage(getMapObjectNameMessage(modifier.structure));
        break;
    }

    const message = formatMessage(getMoraleModifierTypeMessage(modifier.type), {
      count,
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

const MoraleDetailsPromptWrapped = injectIntl(MoraleDetailsPrompt);

export {
  MoraleDetailsPromptWrapped as MoraleDetailsPrompt,
};
