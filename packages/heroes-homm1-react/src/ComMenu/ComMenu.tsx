import * as React from "react";

import { buttonImages } from "./assets";

import { ImageButton, Menu } from "../base";

export interface ComMenuProps {
  readonly onOptionClick: (value: number) => void;
  readonly onCancelClick: () => void;
}

export class ComMenu extends React.Component<ComMenuProps> {
  public render() {
    return (
      <Menu>
        <div>
          <ImageButton
            images={buttonImages.com1}
            onClick={this.onCom1Click}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.com2}
            onClick={this.onCom2Click}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.com3}
            onClick={this.onCom3Click}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.com4}
            onClick={this.onCom4Click}
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

  private readonly onCom1Click = () => {
    this.props.onOptionClick(1);
  }

  private readonly onCom2Click = () => {
    this.props.onOptionClick(2);
  }

  private readonly onCom3Click = () => {
    this.props.onOptionClick(3);
  }

  private readonly onCom4Click = () => {
    this.props.onOptionClick(4);
  }
}
