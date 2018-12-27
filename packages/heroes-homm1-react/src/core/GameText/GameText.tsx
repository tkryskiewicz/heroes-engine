import * as React from "react";

import "./GameText.scss";

export interface GameTextProps {
  size: "large" | "normal" | "small" | "tiny";
}

export class GameText extends React.Component<GameTextProps> {
  public render() {
    return (
      <span className={`game-text game-text-${this.props.size}`}>
        {this.props.children}
      </span>
    );
  }
}
