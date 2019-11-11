import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";

import { noop } from "heroes-helpers";

import * as styles from "./SpellBox.module.scss";

import { SpellIcon } from "../../base";
import { GameText } from "../../core";
import { getSpellNameMessage } from "../../messages";

export interface SpellBoxProps {
  readonly spell: string;
  readonly charges: number;
  readonly onClick: (spell: string) => void;
}

export class SpellBox extends React.Component<SpellBoxProps> {
  public static readonly defaultProps: Pick<SpellBoxProps, "onClick"> = {
    onClick: noop,
  };

  public render() {
    return (
      <div className={styles.root}>
        <SpellIcon
          spell={this.props.spell}
          onClick={this.props.onClick}
        />
        <div>
          <GameText size="normal">
            <FormattedMessage {...getSpellNameMessage(this.props.spell)} />
            [<FormattedNumber value={this.props.charges} />]
          </GameText>
        </div>
      </div>
    );
  }
}
