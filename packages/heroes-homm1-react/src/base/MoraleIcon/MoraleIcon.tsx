import React from "react";

import { MoraleType } from "heroes-homm1";

import { images } from "./assets";

export interface MoraleIconProps {
  readonly type: MoraleType;
  readonly onClick?: () => void;
}

export class MoraleIcon extends React.Component<MoraleIconProps> {
  public render() {
    return (
      <img
        src={images[this.props.type]}
        onClick={this.props.onClick}
      />
    );
  }
}
