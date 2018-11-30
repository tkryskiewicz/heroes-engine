import * as React from "react";

import { ViewWindow } from "../ViewWindow";

export interface ViewWorldWindowProps {
  onExitClick?: () => void;
}

export class ViewWorldWindow extends React.Component<ViewWorldWindowProps> {
  public render() {
    return (
      <ViewWindow
        type="world"
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
