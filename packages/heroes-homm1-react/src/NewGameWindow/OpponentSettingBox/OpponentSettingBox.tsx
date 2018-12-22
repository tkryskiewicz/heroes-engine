import * as React from "react";
import { FormattedMessage } from "react-intl";

import { changeOpponentSetting, OpponentSetting } from "heroes-homm1";

import "./OpponentSettingBox.scss";

import { GameParagraph } from "../../core";
import { opponentSettingImages } from "./assets";
import { getOpponentSettingNameMessage } from "./messages";

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
      <div className="opponent-setting-box">
        <img
          src={opponentSettingImages[this.props.value]}
          onClick={this.onClick}
        />
        <GameParagraph textSize="normal">
          <FormattedMessage {...getOpponentSettingNameMessage(this.props.value)} />
        </GameParagraph>
      </div>
    );
  }

  private onClick = () => {
    const value = changeOpponentSetting(this.props.value);

    this.props.onChange(this.props.index, value);
  }
}
