import React from "react";
import { FormattedMessage } from "react-intl";

import { nextOption } from "heroes-core";
import { OpponentSetting } from "heroes-homm1";

import * as styles from "./OpponentSettingBox.module.scss";

import { opponentSettingImages } from "./assets";

import { GameParagraph } from "../../core";
import { getOpponentSettingNameMessage } from "../../messages";

export interface OpponentSettingBoxProps {
  readonly index: number;
  readonly value: OpponentSetting;
  readonly onChange: (index: number, value: OpponentSetting) => void;
}

export class OpponentSettingBox extends React.Component<OpponentSettingBoxProps> {
  public static readonly defaultProps: Pick<OpponentSettingBoxProps, "onChange"> = {
    onChange: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
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

  private readonly onClick = () => {
    const value = nextOption(Object.values(OpponentSetting), this.props.value);

    this.props.onChange(this.props.index, value);
  }
}
