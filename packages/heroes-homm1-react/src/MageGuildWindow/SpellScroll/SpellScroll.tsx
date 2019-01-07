import * as React from "react";
import { FormattedMessage } from "react-intl";

import "./SpellScroll.scss";

import { SpellIcon } from "../../base";
import { GameText } from "../../core";
import { getSpellNameMessage } from "../../messages";

export interface SpellScrollProps {
  spell: string;
  unfolded: boolean;
  onClick: (spell: string) => void;
}

export class SpellScroll extends React.Component<SpellScrollProps> {
  public static defaultProps: Pick<SpellScrollProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        className={`spell-scroll spell-scroll-${this.props.unfolded ? "unfolded" : "folded"}`}
        onClick={this.onClick}
      >
        {this.props.unfolded && this.renderUnfolded()}
      </div>
    );
  }

  private renderUnfolded() {
    return (
      <div className="spell-scroll-spell">
        <SpellIcon spell={this.props.spell} />
        <div>
          <GameText size="normal">
            <FormattedMessage {...getSpellNameMessage(this.props.spell)} />
          </GameText>
        </div>
      </div>
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.spell);
  }
}
