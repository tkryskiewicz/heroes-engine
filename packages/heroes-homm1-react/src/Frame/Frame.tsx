import * as React from "react";

import "./Frame.scss";

// FIXME: come up with a better name
export class Frame extends React.Component {
  public render() {
    return (
      <div className="frame">
        {this.props.children}
      </div>
    );
  }
}
