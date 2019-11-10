import Classnames from "classnames";
import React from "react";

import * as styles from "./ImageButton.module.scss";

export interface ButtonImages {
  readonly enabled: string;
  readonly disabled: string;
}

export interface ImageButtonProps {
  readonly className?: string;
  readonly images: ButtonImages;
  readonly disabled: boolean;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
  readonly onClick: () => void;
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
  public static readonly defaultProps: Pick<ImageButtonProps, DefaultProp> = {
    disabled: false,
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public readonly state: ImageButtonState = {
    pressed: false,
  };

  public render() {
    const { images, disabled } = this.props;

    const renderEnabled = !disabled && !this.state.pressed;

    return (
      <button
        className={Classnames(styles.root, this.props.className)}
        disabled={disabled}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onClick={this.onClick}
      >
        <img src={renderEnabled ? images.enabled : images.disabled} />
      </button>
    );
  }

  private readonly onMouseDown = () => {
    this.setState({
      pressed: true,
    });
  }

  private readonly onMouseUp = () => {
    this.setState({
      pressed: false,
    });
  }

  private readonly onClick = () => {
    this.props.onClick();
  }
}
