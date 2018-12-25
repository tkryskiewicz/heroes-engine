import * as React from "react";

import { GameButton, Menu } from "../base";

export interface ComMenuProps {
  onOptionClick: (value: number) => void;
  onCancelClick: () => void;
}

export class ComMenu extends React.Component<ComMenuProps> {
  public render() {
    return (
      <Menu>
        <div>
          <GameButton
            group="com-menu"
            type="com-1"
            onClick={this.onCom1Click}
          />
        </div>
        <div>
          <GameButton
            group="com-menu"
            type="com-2"
            onClick={this.onCom2Click}
          />
        </div>
        <div>
          <GameButton
            group="com-menu"
            type="com-3"
            onClick={this.onCom3Click}
          />
        </div>
        <div>
          <GameButton
            group="com-menu"
            type="com-4"
            onClick={this.onCom4Click}
          />
        </div>
        <div>
          <GameButton
            group="com-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </div>
      </Menu>
    );
  }

  private onCom1Click = () => {
    this.props.onOptionClick(1);
  }

  private onCom2Click = () => {
    this.props.onOptionClick(2);
  }

  private onCom3Click = () => {
    this.props.onOptionClick(3);
  }

  private onCom4Click = () => {
    this.props.onOptionClick(4);
  }
}
