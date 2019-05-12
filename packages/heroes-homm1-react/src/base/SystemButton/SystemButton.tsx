import * as React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../ImageButton";

export interface SystemButtonProps {
  readonly type: "yes" | "no" | "okay" | "cancel";
  readonly disabled?: boolean;
  readonly onClick?: () => void;
}

export class SystemButton extends React.Component<SystemButtonProps> {
  public render() {
    return (
      <ImageButton
        images={buttonImages[this.props.type]}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      />
    );
  }
}
