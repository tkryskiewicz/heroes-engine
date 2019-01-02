import * as React from "react";

import { GameButton, Menu } from "../base";

export interface HotSeatGameMenuProps {
  onOptionClick: (value: number) => void;
  onCancelClick: () => void;
}

export class HotSeatGameMenu extends React.Component<HotSeatGameMenuProps> {
  public render() {
    return (
      <Menu>
        <div>
          <GameButton
            group="hot-seat-menu"
            type="2-players"
            onClick={this.on2PlayersClick}
          />
        </div>
        <div>
          <GameButton
            group="hot-seat-menu"
            type="2-players"
            onClick={this.on3PlayersClick}
          />
        </div>
        <div>
          <GameButton
            group="hot-seat-menu"
            type="2-players"
            onClick={this.on4PlayersClick}
          />
        </div>
        <div>
          <GameButton
            group="hot-seat-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </div>
      </Menu>
    );
  }

  private on2PlayersClick = () => {
    this.props.onOptionClick(2);
  }

  private on3PlayersClick = () => {
    this.props.onOptionClick(3);
  }

  private on4PlayersClick = () => {
    this.props.onOptionClick(4);
  }
}
