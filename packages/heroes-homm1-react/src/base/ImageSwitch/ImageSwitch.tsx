import Classnames from "classnames";
import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./ImageSwitch.module.scss";

export interface SwitchImages {
  readonly checked: string;
  readonly unchecked: string;
}

export interface ImageSwitchProps {
  readonly className?: string;
  readonly images: SwitchImages;
  readonly checked: boolean;
  readonly onChange: (value: boolean) => void;
}

export class ImageSwitch extends React.Component<ImageSwitchProps> {
  public static readonly defaultProps: Pick<ImageSwitchProps, "checked" | "onChange"> = {
    checked: false,
    onChange: noop,
  };

  public render() {
    return (
      <div
        className={Classnames(styles.root, this.props.className)}
        onClick={this.onClick}
      >
        {this.props.checked ? this.renderChecked() : this.renderUnchecked()}
      </div>
    );
  }

  private renderUnchecked() {
    return (
      <img src={this.props.images.unchecked} />
    );
  }

  private renderChecked() {
    return (
      <img src={this.props.images.checked} />
    );
  }

  private readonly onClick = () => {
    this.props.onChange(!this.props.checked);
  }
}
