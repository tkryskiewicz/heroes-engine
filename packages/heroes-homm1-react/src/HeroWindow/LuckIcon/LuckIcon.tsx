import * as React from "react";

// TODO: is bad luck even possible?
export interface LuckIconProps {
  type: "good" | "neutral" | "bad";
  onClick?: () => void;
}

export class LuckIcon extends React.Component<LuckIconProps> {
  public render() {
    return (
      <img
        src={`assets/ui/hero-window/luck-${this.props.type}.png`}
        onClick={this.props.onClick}
      />
    );
  }
}
