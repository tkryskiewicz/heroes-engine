import * as React from "react";

import { moraleImages } from "./assets";

export interface MoraleIconProps {
  type: "good" | "neutral" | "bad";
  onClick?: () => void;
}

export class MoraleIcon extends React.Component<MoraleIconProps> {
  public render() {
    return (
      <img
        src={moraleImages[this.props.type]}
        onClick={this.props.onClick}
      />
    );
  }
}
