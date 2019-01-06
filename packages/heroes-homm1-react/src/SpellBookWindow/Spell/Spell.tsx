import * as React from "react";
import { FormattedMessage } from "react-intl";

import "./Spell.scss";

import { SpellIcon } from "../../base";
import { GameText } from "../../core";
import { getSpellNameMessage } from "../../messages";

export interface SpellProps {
  spell: string;
  charges: number;
  onClick: (spell: string) => void;
}

export class Spell extends React.Component<SpellProps> {
  public static defaultProps: Pick<SpellProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <div className="spell">
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
