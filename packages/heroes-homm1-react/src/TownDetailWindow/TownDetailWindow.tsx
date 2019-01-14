import * as React from "react";

import "./TownDetailWindow.scss";

import { buttonImages } from "../TownWindow/Treasury/assets";

import { ImageButton } from "../base";
import { withGameWindow } from "../core";
import { StatusBar } from "./StatusBar";

export interface TownDetailWindowProps {
  statusText: string;
  onExitMouseEnter: () => void;
  onExitMouseLeave: () => void;
  onExitClick: () => void;
}

type DefaultProp =
  "statusText" |
  "onExitMouseEnter" |
  "onExitMouseLeave" |
  "onExitClick";

class TownDetailWindow extends React.Component<TownDetailWindowProps> {
  public static defaultProps: Pick<TownDetailWindowProps, DefaultProp> = {
    onExitClick: () => undefined,
    onExitMouseEnter: () => undefined,
    onExitMouseLeave: () => undefined,
    statusText: "",
  };

  public render() {
    return (
      <div className="town-detail-window">
        {this.props.children}
        <div className="town-detail-window-status-bar">
          <StatusBar
            statusText={this.props.statusText}
          />
        </div>
        <div className="town-detail-window-exit">
          <ImageButton
            images={buttonImages.exit}
            onMouseEnter={this.props.onExitMouseEnter}
            onMouseLeave={this.props.onExitMouseLeave}
            onClick={this.props.onExitClick}
          />
        </div>
      </div>
    );
  }
}

const TownDetailWindowWrapped = withGameWindow(640)(TownDetailWindow);

export { TownDetailWindowWrapped as TownDetailWindow };
