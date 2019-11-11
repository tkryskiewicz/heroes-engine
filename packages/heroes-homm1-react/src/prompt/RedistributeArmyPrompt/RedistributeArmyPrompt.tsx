import React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { TroopSelectionType } from "heroes-core";
import { noop } from "heroes-helpers";

import { GameInputNumber, GameModal } from "../../base";
import { GameParagraph } from "../../core";
import { getCreatureNameMessage } from "../../messages";
import { PromptProps } from "../prompt";
import { messages } from "./messages";

interface Props extends InjectedIntlProps, PromptProps {
  readonly creature: string;
  readonly armyType: TroopSelectionType;
  readonly targetArmyType: TroopSelectionType;
  readonly max: number;
  readonly count: number;
  readonly onCountChange: (value: number) => void;
}

type DefaultProp =
  "onCountChange";

class RedistributeArmyPrompt extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onCountChange: noop,
  };

  public render() {
    const { creature, armyType, targetArmyType } = this.props;
    const { formatMessage } = this.props.intl;

    const creatureName = formatMessage(getCreatureNameMessage(creature));

    const army = formatMessage(this.getArmyMessage(armyType));
    const targetArmy = formatMessage(this.getArmyMessage(targetArmyType));

    return (
      <GameModal
        type="okayCancel"
        size={2}
        visible={this.props.visible}
        onConfirmClick={this.props.onConfirmClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.content} values={{ creatureName, army, targetArmy }} />
        </GameParagraph>
        <GameInputNumber
          min={0}
          max={this.props.max}
          value={this.props.count}
          onChange={this.props.onCountChange}
        />
      </GameModal>
    );
  }

  private getArmyMessage(type: TroopSelectionType) {
    return type === TroopSelectionType.Hero ?
      messages.heroArmy :
      messages.garrisonArmy;
  }
}

const ComponentWrapped = injectIntl(RedistributeArmyPrompt);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as RedistributeArmyPrompt,
  ComponentWrappedProps as RedistributeArmyPromptProps,
};
