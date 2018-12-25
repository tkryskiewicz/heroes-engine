import * as React from "react";

import { GameButton, Menu } from "../base";

export interface BaudMenuProps {
  onOptionClick: (value: number) => void;
  onCancelClick: () => void;
}

export class BaudMenu extends React.Component<BaudMenuProps> {
  public static defaultProps: Pick<BaudMenuProps, "onOptionClick" | "onCancelClick"> = {
    onCancelClick: () => undefined,
    onOptionClick: () => undefined,
  };

  public render() {
    return (
      <Menu>
        <div>
          <GameButton
            group="baud-menu"
            type="2400-baud"
            onClick={this.on2400BaudClick}
          />
        </div>
        <div>
          <GameButton
            group="baud-menu"
            type="9600-baud"
            onClick={this.on9600BaudClick}
          />
        </div>
        <div>
          <GameButton
            group="baud-menu"
            type="19200-baud"
            onClick={this.on19200BaudClick}
          />
        </div>
        <div>
          <GameButton
            group="baud-menu"
            type="38400-baud"
            onClick={this.on38400BaudClick}
          />
        </div>
        <div>
          <GameButton
            group="baud-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </div>
      </Menu>
    );
  }

  private on2400BaudClick = () => {
    this.props.onOptionClick(2400);
  }

  private on9600BaudClick = () => {
    this.props.onOptionClick(9600);
  }

  private on19200BaudClick = () => {
    this.props.onOptionClick(18200);
  }

  private on38400BaudClick = () => {
    this.props.onOptionClick(38400);
  }
}
