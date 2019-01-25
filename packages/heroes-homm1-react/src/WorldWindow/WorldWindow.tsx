import * as React from "react";

import { ViewWindow } from "../ViewWindow";

export interface WorldWindowProps {
  readonly visible?: boolean;
  readonly onExitClick?: () => void;
}

export class WorldWindow extends React.Component<WorldWindowProps> {
  public render() {
    return (
      <ViewWindow
        type="world"
        visible={this.props.visible}
        onExitClick={this.props.onExitClick}
      >
        {this.renderWorld()}
      </ViewWindow>
    );
  }

  private renderWorld() {
    // TODO: implement

    return "WORLD";
  }
}
