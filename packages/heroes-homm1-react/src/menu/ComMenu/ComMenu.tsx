import * as React from "react";

import { ComPort } from "heroes-homm1";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu } from "../Menu";

export interface ComMenuProps {
  readonly onOptionClick: (value: ComPort) => void;
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
    this.props.onOptionClick(ComPort.Com1);
  }

  private readonly onCom2Click = () => {
    this.props.onOptionClick(ComPort.Com2);
  }

  private readonly onCom3Click = () => {
    this.props.onOptionClick(ComPort.Com3);
  }

  private readonly onCom4Click = () => {
    this.props.onOptionClick(ComPort.Com4);
  }
}
