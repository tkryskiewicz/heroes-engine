import React from "react";

import { noop } from "heroes-helpers";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu } from "../Menu";

export interface BaudMenuProps {
  readonly onOptionClick: (value: number) => void;
  readonly onCancelClick: () => void;
}

export class BaudMenu extends React.Component<BaudMenuProps> {
  public static readonly defaultProps: BaudMenuProps = {
    onCancelClick: noop,
    onOptionClick: noop,
  };

  public render() {
    return (
      <Menu>
        <div>
          <ImageButton
            images={buttonImages["2400-baud"]}
            onClick={this.on2400BaudClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages["9600-baud"]}
            onClick={this.on9600BaudClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages["19200-baud"]}
            onClick={this.on19200BaudClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages["38400-baud"]}
            onClick={this.on38400BaudClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </div>
      </Menu>
    );
  }

  private readonly on2400BaudClick = () => {
    this.props.onOptionClick(2400);
  }

  private readonly on9600BaudClick = () => {
    this.props.onOptionClick(9600);
  }

  private readonly on19200BaudClick = () => {
    this.props.onOptionClick(19200);
  }

  private readonly on38400BaudClick = () => {
    this.props.onOptionClick(38400);
  }
}
