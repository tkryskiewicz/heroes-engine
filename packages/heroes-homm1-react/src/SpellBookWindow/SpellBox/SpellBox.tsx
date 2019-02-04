import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameText } from "heroes-homm1-react-components";

import * as styles from "./SpellBox.module.scss";

import { SpellIcon } from "../../base";
import { getSpellNameMessage } from "../../messages";

export interface SpellBoxProps {
  readonly spell: string;
  readonly charges: number;
  readonly onClick: (spell: string) => void;
}

export class SpellBox extends React.Component<SpellBoxProps> {
  public static readonly defaultProps: Pick<SpellBoxProps, "onClick"> = {
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
