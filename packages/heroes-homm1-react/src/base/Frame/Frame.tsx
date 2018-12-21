import * as React from "react";

import "./Frame.scss";

export class Frame extends React.Component {
  public render() {
    return (
      <div className="frame">
        {this.props.children}
      </div>
    );
  }
}
