import * as React from "react";

import { changeOpponentSetting, OpponentSetting } from "heroes-homm1";

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
    return (
      <img
        src={`assets/ui/new-game-window/opponent-${this.props.value}.jpg`}
        onClick={this.onClick}
      />
    );
  }

  private onClick = () => {
    const value = changeOpponentSetting(this.props.value);

    this.props.onChange(this.props.index, value);
  }
}
