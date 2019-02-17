import * as React from "react";

import { LuckType } from "heroes-homm1";

import { luckImages } from "./assets";

export interface LuckIconProps {
  readonly type: LuckType;
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
