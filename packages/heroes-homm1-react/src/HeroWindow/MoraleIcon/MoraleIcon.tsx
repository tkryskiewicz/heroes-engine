import * as React from "react";

import BadImage = require("./morale-bad.png");
import GoodImage = require("./morale-good.png");
import NeutralImage = require("./morale-neutral.png");

export interface MoraleIconProps {
  type: "good" | "neutral" | "bad";
  onClick?: () => void;
}

export class MoraleIcon extends React.Component<MoraleIconProps> {
  public render() {
    const images = {
      bad: BadImage,
      good: GoodImage,
      neutral: NeutralImage,
    };

    return (
      <img
        src={images[this.props.type]}
        onClick={this.props.onClick}
      />
    );
  }
}
