import * as React from "react";

import * as styles from "./ImageSwitch.module.scss";

export interface SwitchImages {
  readonly checked: string;
  readonly unchecked: string;
}

export interface ImageSwitchProps {
  readonly images: SwitchImages;
  readonly checked: boolean;
  readonly onChange: (value: boolean) => void;
}

export class ImageSwitch extends React.Component<ImageSwitchProps> {
  public static readonly defaultProps: Pick<ImageSwitchProps, "checked" | "onChange"> = {
    checked: false,
    onChange: () => undefined,
  };

  public render() {
    return (
      <div
        className={styles.root}
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
