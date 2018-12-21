import * as React from "react";

import "./CreditsWindow.scss";

import { GameWindow } from "../core";

export interface CreditsWindowProps {
  visible?: boolean;
  onExitClick?: () => void;
}

export class CreditsWindow extends React.Component<CreditsWindowProps> {
  public render() {
    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div
          className="credits-window"
          onClick={this.props.onExitClick}
        />
      </GameWindow>
    );
  }
}
