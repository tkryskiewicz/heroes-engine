import * as React from "react";

import "./CreditsWindow.scss";

import { withGameWindow } from "../core";

export interface CreditsWindowProps {
  onClick?: () => void;
}

class CreditsWindow extends React.Component<CreditsWindowProps> {
  public render() {
    return (
      <div
        className="credits-window"
        onClick={this.props.onClick}
      />
    );
  }
}

const CreditsWindowWrapped = withGameWindow(640)(CreditsWindow);

export {
  CreditsWindowWrapped as CreditsWindow,
};
