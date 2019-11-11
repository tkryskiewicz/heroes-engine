import React from "react";

import { noop } from "heroes-helpers";
import { ComPort } from "heroes-homm1";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu, MenuOption } from "../Menu";

interface Props {
  readonly onOptionClick: (value: ComPort) => void;
  readonly onCancelClick: () => void;
}

export class ComPortMenu extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    onCancelClick: noop,
    onOptionClick: noop,
  };

  public render() {
    return (
      <Menu>
        <MenuOption>
          <ImageButton
            data-test-id="com-1"
            images={buttonImages.com1}
            onClick={this.onCom1Click}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="com-2"
            images={buttonImages.com2}
            onClick={this.onCom2Click}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="com-3"
            images={buttonImages.com3}
            onClick={this.onCom3Click}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="com-4"
            images={buttonImages.com4}
            onClick={this.onCom4Click}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="cancel"
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </MenuOption>
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

export type ComPortMenuProps = ExtractPublicProps<typeof ComPortMenu>;
