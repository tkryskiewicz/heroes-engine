import React from "react";

import { MoraleType } from "heroes-homm1";

import { moraleImages } from "./assets";

export interface MoraleIconProps {
  readonly type: MoraleType;
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
