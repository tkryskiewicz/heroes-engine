import * as React from "react";

import { luckImages } from "./assets";

// TODO: is bad luck even possible?
export interface LuckIconProps {
  readonly type: "good" | "neutral" | "bad";
  readonly onClick?: () => void;
}

export class LuckIcon extends React.Component<LuckIconProps> {
  public render() {
    return (
      <img
        src={luckImages[this.props.type]}
        onClick={this.props.onClick}
      />
    );
  }
}
