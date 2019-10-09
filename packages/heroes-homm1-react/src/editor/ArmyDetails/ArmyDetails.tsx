import React from "react";
import { FormattedMessage } from "react-intl";

import { Troop } from "heroes-core";

import * as styles from "./ArmyDetails.module.scss";

import { GameInputNumber } from "../../base";
import { GameText } from "../../core";
import { getCreatureNameMessage } from "../../messages";
import { messages } from "./messages";

// TODO: move
const MaxTroopCount = 999;

export interface ArmyDetailsProps {
  readonly creatures: string[];
  readonly value: Troop[];
  readonly onValueChange: (value: Troop[]) => void;
  // FIXME: should it be here? extract to parent component?
  readonly onOpenCreatureValueRangePrompt: () => void;
}

type DefaultProp =
  "onValueChange" |
  "onOpenCreatureValueRangePrompt";

export class ArmyDetails extends React.Component<ArmyDetailsProps> {
  public static readonly defaultProps: Pick<ArmyDetailsProps, DefaultProp> = {
    onOpenCreatureValueRangePrompt: () => undefined,
    onValueChange: () => undefined,
  };

  public render() {
    return (
      <table className={styles.root}>
        <thead>
          <tr>
            <th className={styles.title} />
            <th className={styles.creature}>
              <GameText size="large">
                <FormattedMessage {...messages.creatureId} />
              </GameText>
            </th>
            <th className={styles.creatureName}>
              <GameText size="large">
                <FormattedMessage {...messages.creatureName} />
              </GameText>
            </th>
            <th className={styles.count}>
              <GameText size="large">
                <FormattedMessage {...messages.creatureCount} />
              </GameText>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.value.map((t, i) => this.renderTroop(i, t))}
        </tbody>
      </table>
    );
  }

  private renderTroop(index: number, troop: Troop) {
    const { creatures } = this.props;

    const onCreatureChange = (value: number) => this.onTroopCreatureChange(index, value);
    const onCountChange = (value: number) => this.onTroopCountChange(index, value);

    return (
      <tr key={index}>
        <td className={styles.title}>
          <GameText size="large">
            <FormattedMessage {...messages.creature} values={{ index: index + 1 }} />
          </GameText>
        </td>
        <td className={styles.creature}>
          <GameInputNumber
            min={0}
            max={creatures.length - 1}
            value={creatures.indexOf(troop.creature)}
            onChange={onCreatureChange}
          />
        </td>
        <td className={styles.creatureName}>
          <GameText size="large">
            <FormattedMessage {...getCreatureNameMessage(troop.creature)} />
          </GameText>
        </td>
        <td className={styles.count}>
          <GameInputNumber
            min={0}
            max={MaxTroopCount}
            value={troop.count}
            onChange={onCountChange}
          />
        </td>
      </tr>
    );
  }

  private readonly onTroopCreatureChange = (index: number, v: number) => {
    const { creatures } = this.props;

    let creature = creatures[v];

    if (!creature) {
      this.props.onOpenCreatureValueRangePrompt();

      creature = creatures[0];
    }

    const newValue: Troop[] = this.props.value.map((t, i) => i === index ?
      { ...t, creature } :
      t,
    );

    this.props.onValueChange(newValue);
  }

  private readonly onTroopCountChange = (index: number, v: number) => {
    const newValue: Troop[] = this.props.value.map((t, i) => i === index ?
      { ...t, count: v } :
      t,
    );

    this.props.onValueChange(newValue);
  }
}
