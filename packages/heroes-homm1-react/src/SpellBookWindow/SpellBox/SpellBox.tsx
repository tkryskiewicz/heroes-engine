import * as React from "react";
import { FormattedMessage } from "react-intl";

import * as styles from "./SpellBox.module.scss";

import { SpellIcon } from "../../base";
import { GameText } from "../../core";
import { getSpellNameMessage } from "../../messages";

export interface SpellBoxProps {
  spell: string;
  charges: number;
  onClick: (spell: string) => void;
}

export class SpellBox extends React.Component<SpellBoxProps> {
  public static defaultProps: Pick<SpellBoxProps, "onClick"> = {
    onClick: () => undefined,
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
            [{this.props.charges}]
          </GameText>
        </div>
      </div>
    );
  }
}
