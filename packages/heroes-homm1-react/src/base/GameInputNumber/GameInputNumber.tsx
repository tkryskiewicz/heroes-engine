import InputNumber from "antd/lib/input-number";
import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./GameInputNumber.module.scss";

export interface GameInputNumberProps {
  readonly min?: number;
  readonly max?: number;
  readonly value: number;
  readonly disabled: boolean;
  readonly onChange: (value: number) => void;
}

type DefaultProp =
  "disabled" |
  "onChange";

export class GameInputNumber extends React.Component<GameInputNumberProps> {
  public static readonly defaultProps: Pick<GameInputNumberProps, DefaultProp> = {
    disabled: false,
    onChange: noop,
  };

  public render() {
    return (
      <InputNumber
        className={styles.root}
        precision={0}
        min={this.props.min}
        max={this.props.max}
        value={this.props.value}
        disabled={this.props.disabled}
        onChange={this.onChange}
      />
    );
  }

  private readonly onChange = (value: number | undefined) => {
    if (value === undefined || isNaN(value)) {
      return;
    }

    this.props.onChange(value);
  }
}
