import * as React from "react";

import "./StatusBar.scss";

import { GameText } from "../../core";

export interface StatusBarProps {
  statusText: string;
}

export class StatusBar extends React.Component<StatusBarProps> {
  public static defaultProps: Pick<StatusBarProps, "statusText"> = {
    statusText: "",
  };

  public render() {
    return (
      <div className="status-bar">
        <GameText size="large">
          {this.props.statusText}
        </GameText>
      </div>
    );
  }
}
