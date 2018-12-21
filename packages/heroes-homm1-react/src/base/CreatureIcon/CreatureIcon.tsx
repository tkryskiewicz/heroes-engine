import * as React from "react";

export interface CreatureIconProps {
  size: "large" | "medium" | "small" | "tiny";
  creature: string;
}

export class CreatureIcon extends React.Component<CreatureIconProps> {
  public render() {
    return (
      <img src={`assets/creatures/${this.props.creature}/icon-${this.props.size}.png`} />
    );
  }
}
