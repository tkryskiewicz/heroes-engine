import * as React from "react";

import "./CongratulationsWindow.scss";

import { GameText, withGameWindow } from "../core";

export interface CongratulationsWindowProps {
  onClick?: () => void;
}

class CongratulationsWindow extends React.Component<CongratulationsWindowProps> {
  public render() {
    return (
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
    );
  }
}

const CongratulationsWindowWrapped = withGameWindow(640)
  <typeof CongratulationsWindow, CongratulationsWindowProps>(CongratulationsWindow);

export {
  CongratulationsWindowWrapped as CongratulationsWindow,
};
