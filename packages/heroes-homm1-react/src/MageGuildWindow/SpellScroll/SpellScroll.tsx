import React from "react";
import { FormattedMessage } from "react-intl";

import { noop } from "heroes-helpers";

import * as styles from "./SpellScroll.module.scss";

import { SpellIcon } from "../../base";
import { GameText } from "../../core";
import { getSpellNameMessage } from "../../messages";

export interface SpellScrollProps {
  readonly spell: string;
  readonly unfolded: boolean;
  readonly onClick: (spell: string) => void;
}

export class SpellScroll extends React.Component<SpellScrollProps> {
  public static readonly defaultProps: Pick<SpellScrollProps, "onClick"> = {
    onClick: noop,
  };

  public render() {
    return (
      <div
        className={`${styles.root} ${this.props.unfolded ? styles.unfolded : styles.folded}`}
        onClick={this.onClick}
      >
        {this.props.unfolded && this.renderUnfolded()}
      </div>
    );
  }

  private renderUnfolded() {
    return (
      <div className={styles.spell}>
        <SpellIcon spell={this.props.spell} />
        <div>
          <GameText size="normal">
            <FormattedMessage {...getSpellNameMessage(this.props.spell)} />
          </GameText>
        </div>
      </div>
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.spell);
  }
}
