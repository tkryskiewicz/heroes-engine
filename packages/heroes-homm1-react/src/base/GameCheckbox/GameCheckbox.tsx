import * as React from "react";

import * as styles from "./GameCheckbox.module.scss";

import { CheckboxImage } from "./assets";

export interface GameCheckboxProps {
  readonly checked: boolean;
  readonly onClick: (value: boolean) => void;
}

type DefaultProp =
  "checked" |
  "onClick";

export class GameCheckbox extends React.Component<GameCheckboxProps> {
  public static readonly defaultProps: Pick<GameCheckboxProps, DefaultProp> = {
    checked: false,
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.onClick}
      >
        {this.props.checked && this.renderCheckbox()}
      </div>
    );
  }

  private renderCheckbox() {
    return (
      <img
        className={styles.checkbox}
        src={CheckboxImage}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(!this.props.checked);
  }
}