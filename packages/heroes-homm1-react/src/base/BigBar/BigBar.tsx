import * as React from "react";

import "./BigBar.scss";

import { GameText } from "../../core";

export class BigBar extends React.Component {
  public render() {
    return (
      <div className="big-bar">
        <div className="big-bar-left" />
        <div className="big-bar-right" />
        <div className="big-bar-text">
          <GameText size="large">
            {this.props.children}
          </GameText>
        </div>
      </div>
    );
  }
}
