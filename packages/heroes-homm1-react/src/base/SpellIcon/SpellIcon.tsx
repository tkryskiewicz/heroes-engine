import React from "react";

import { noop } from "heroes-helpers";

export interface SpellIconProps {
  readonly spell: string;
  readonly onClick: (spell: string) => void;
}

export class SpellIcon extends React.Component<SpellIconProps> {
  public static readonly defaultProps: Pick<SpellIconProps, "onClick"> = {
    onClick: noop,
  };

  public render() {
    return (
      <img
        src={`assets/spells/${this.props.spell}/icon.png`}
        onClick={this.onClick}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.spell);
  }
}
