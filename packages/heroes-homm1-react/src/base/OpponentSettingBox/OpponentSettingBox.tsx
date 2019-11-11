import React from "react";

import { noop } from "heroes-helpers";
import { OpponentSetting } from "heroes-homm1";

import { opponentSettingImages } from "./assets";

interface Props {
  readonly index: number;
  readonly value: OpponentSetting;
  readonly onClick: (index: number, value: OpponentSetting) => void;
}

export class OpponentSettingBox extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    index: 0,
    onClick: noop,
    value: OpponentSetting.None,
  };

  public render() {
    return (
      <img
        src={opponentSettingImages[this.props.value]}
        onClick={this.onClick}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.index, this.props.value);
  }
}

export type OpponentSettingBoxProps = ExtractPublicProps<typeof OpponentSettingBox>;
