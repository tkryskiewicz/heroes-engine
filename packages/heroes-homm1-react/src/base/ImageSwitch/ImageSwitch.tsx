import * as React from "react";

import "./ImageSwitch.scss";

export interface SwitchImages {
  checked: string;
  unchecked: string;
}

export interface ImageSwitchProps {
  images: SwitchImages;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export class ImageSwitch extends React.Component<ImageSwitchProps> {
  public static defaultProps: Pick<ImageSwitchProps, "checked" | "onChange"> = {
    checked: false,
    onChange: () => undefined,
  };

  public render() {
    return (
      <div
        className="image-switch"
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

  private onClick = () => {
    this.props.onChange(!this.props.checked);
  }
}
