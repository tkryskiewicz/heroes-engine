import * as React from "react";

export interface MoraleIconProps {
  type: "good" | "neutral" | "bad";
  onClick?: () => void;
}

export class MoraleIcon extends React.Component<MoraleIconProps> {
  public render() {
    return (
      <img
        src={`assets/ui/hero-window/morale-${this.props.type}.png`}
        onClick={this.props.onClick}
      />
    );
  }
}
