import * as React from "react";

export interface SpellIconProps {
  spell: string;
  onClick: (spell: string) => void;
}

export class SpellIcon extends React.Component<SpellIconProps> {
  public static defaultProps: Pick<SpellIconProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <img
        src={`assets/spells/${this.props.spell}/icon.png`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.spell);
  }
}
