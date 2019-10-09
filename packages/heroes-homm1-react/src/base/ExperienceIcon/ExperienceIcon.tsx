import React from "react";

import { images } from "./assets";

export interface ExperienceIconProps {
  readonly size: "large" | "small";
  readonly onMouseEnter?: () => void;
  readonly onMouseLeave?: () => void;
  readonly onClick?: () => void;
}

export class ExperienceIcon extends React.Component<ExperienceIconProps> {
  public render() {
    return (
      <img
        src={images[this.props.size]}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.props.onClick}
      />
    );
  }
}
