import * as React from "react";

import { moraleImages } from "./assets";

export interface MoraleIconProps {
  readonly type: "good" | "neutral" | "bad";
  readonly onClick?: () => void;
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
