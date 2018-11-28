import * as React from "react";

import BadImage = require("./luck-bad.png");
import GoodImage = require("./luck-good.png");
import NeturalImage = require("./luck-neutral.png");

// TODO: is bad luck even possible?
export interface LuckIconProps {
  type: "good" | "neutral" | "bad";
  onClick?: () => void;
}

export class LuckIcon extends React.Component<LuckIconProps> {
  public render() {
    const images = {
      bad: BadImage,
      good: GoodImage,
      neutral: NeturalImage,
    };

    return (
      <img
        src={images[this.props.type]}
        onClick={this.props.onClick}
      />
    );
  }
}
