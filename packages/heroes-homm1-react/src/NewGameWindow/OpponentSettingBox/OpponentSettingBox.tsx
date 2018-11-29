import * as React from "react";

import { changeOpponentSetting, OpponentSetting } from "heroes-homm1";

import AverageImage = require("./opponent-average.jpg");
import DumbImage = require("./opponent-dumb.jpg");
import GeniusImage = require("./opponent-genius.jpg");
import NoneImage = require("./opponent-none.jpg");
import SmartImage = require("./opponent-smart.jpg");

export interface OpponentSettingBoxProps {
  index: number;
  value: OpponentSetting;
  onChange: (index: number, value: OpponentSetting) => void;
}

export class OpponentSettingBox extends React.Component<OpponentSettingBoxProps> {
  public static defaultProps: Pick<OpponentSettingBoxProps, "onChange"> = {
    onChange: () => undefined,
  };

  public render() {
    const images = {
      average: AverageImage,
      dumb: DumbImage,
      genius: GeniusImage,
      none: NoneImage,
      smart: SmartImage,
    };

    return (
      <img
        src={images[this.props.value]}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    const value = changeOpponentSetting(this.props.value);

    this.props.onChange(this.props.index, value);
  }
}
