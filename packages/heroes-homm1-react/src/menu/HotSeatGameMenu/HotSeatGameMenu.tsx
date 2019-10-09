import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu } from "../Menu";

export interface HotSeatGameMenuProps {
  readonly onOptionClick: (value: number) => void;
  readonly onCancelClick: () => void;
}

export class HotSeatGameMenu extends React.Component<HotSeatGameMenuProps> {
  public render() {
    return (
      <Menu>
        <div>
          <ImageButton
            images={buttonImages["2-players"]}
            onClick={this.on2PlayersClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages["3-players"]}
            onClick={this.on3PlayersClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages["4-players"]}
            onClick={this.on4PlayersClick}
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

  private readonly on2PlayersClick = () => {
    this.props.onOptionClick(2);
  }

  private readonly on3PlayersClick = () => {
    this.props.onOptionClick(3);
  }

  private readonly on4PlayersClick = () => {
    this.props.onOptionClick(4);
  }
}
