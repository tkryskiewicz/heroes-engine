import { InputNumber } from "antd";
import { InputNumberProps } from "antd/lib/input-number";
import * as React from "react";
import { FormattedMessage, InjectedIntlProps, injectIntl } from "react-intl";

import { TroopSelectionType } from "heroes-core";

import { GameModal } from "../../base";
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
    onCountChange: () => undefined,
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
        <InputNumber
          precision={0}
          min={0}
          max={this.props.max}
          value={this.props.count}
          onChange={this.onCountChange}
        />
      </GameModal>
    );
  }

  private getArmyMessage(type: TroopSelectionType) {
    return type === TroopSelectionType.Hero ?
      messages.heroArmy :
      messages.garrisonArmy;
  }

  private readonly onCountChange: InputNumberProps["onChange"] = (v) => {
    const value = v !== undefined ? parseInt(v.toString(), 10) : undefined;

    if (!value || isNaN(value)) {
      return;
    }

    this.props.onCountChange(value);
  }
}

const ComponentWrapped = injectIntl(RedistributeArmyPrompt);

type ComponentWrappedProps = ExtractProps<typeof ComponentWrapped>;

export {
  ComponentWrapped as RedistributeArmyPrompt,
  ComponentWrappedProps as RedistributeArmyPromptProps,
};
