import { Input } from "antd";
import Classnames from "classnames";
import * as React from "react";

import * as styles from "./GameInput.module.scss";

export interface GameInputProps {
  readonly size: "large" | "small";
  readonly maxLength?: number;
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export class GameInput extends React.Component<GameInputProps> {
  public render() {
    const { size } = this.props;

    const Component = size === "large" ?
      Input.TextArea :
      Input;

    return (
      <Component
        className={Classnames(styles.root, styles[size])}
        maxLength={this.props.maxLength}
        value={this.props.value}
        onChange={this.onChange}
      />
    );
  }

  private readonly onChange = (event: React.ChangeEvent<any>) => {
    this.props.onChange(event.target.value);
  }
}
