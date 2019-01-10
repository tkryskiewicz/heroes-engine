import * as React from "react";

import "./ImageButton.scss";

export interface ButtonImages {
  enabled: string;
  disabled: string;
}

export interface ImageButtonProps {
  images: ButtonImages;
  disabled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

interface ImageButtonState {
  readonly pressed: boolean;
}

type DefaultProp =
  "disabled" |
  "onClick" |
  "onMouseEnter" |
  "onMouseLeave";

export class ImageButton extends React.Component<ImageButtonProps, ImageButtonState> {
  public static defaultProps: Pick<ImageButtonProps, DefaultProp> = {
    disabled: false,
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public state: ImageButtonState = {
    pressed: false,
  };

  public render() {
    const { images, disabled } = this.props;

    const renderEnabled = !disabled && !this.state.pressed;

    return (
      <button
        className="image-button"
        disabled={disabled}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onClick={this.props.onClick}
      >
        <img src={renderEnabled ? images.enabled : images.disabled} />
      </button>
    );
  }

  private onMouseDown = () => {
    this.setState({
      pressed: true,
    });
  }

  private onMouseUp = () => {
    this.setState({
      pressed: false,
    });
  }
}
