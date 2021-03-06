import React from "react";

export interface CreatureIconProps {
  readonly size: "large" | "medium" | "small" | "tiny";
  readonly creature: string;
}

export class CreatureIcon extends React.Component<CreatureIconProps> {
  public render() {
    return (
      <img src={`assets/creatures/${this.props.creature}/icon-${this.props.size}.png`} />
    );
  }
}
