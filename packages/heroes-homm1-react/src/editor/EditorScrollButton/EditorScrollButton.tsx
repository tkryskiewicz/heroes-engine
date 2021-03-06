import React from "react";

import { Direction } from "heroes-core";
import { noop } from "heroes-helpers";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";

export interface EditorScrollButtonProps {
  readonly className?: string;
  readonly direction: Direction;
  readonly onClick: (direction: Direction) => void;
}

export class EditorScrollButton extends React.Component<EditorScrollButtonProps> {
  public static readonly defaultProps: Pick<EditorScrollButtonProps, "onClick"> = {
    onClick: noop,
  };

  public render() {
    return (
      <ImageButton
        className={this.props.className}
        images={buttonImages[this.props.direction]}
        onClick={this.onClick}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.direction);
  }
}
