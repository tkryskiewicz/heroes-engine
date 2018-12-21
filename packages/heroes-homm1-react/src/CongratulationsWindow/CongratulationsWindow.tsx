import * as React from "react";

import "./CongratulationsWindow.scss";

import { GameText, GameWindow } from "../core";

export interface CongratulationsWindowProps {
  visible?: boolean;
  onClick?: () => void;
}

export class CongratulationsWindow extends React.Component<CongratulationsWindowProps> {
  public render() {
    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div
          className="congratulations-window"
          onClick={this.props.onClick}
        >
          <div className="congratulations-window-content">
            <GameText size="large">
              {this.props.children}
            </GameText>
          </div>
        </div>
      </GameWindow>
    );
  }
}
