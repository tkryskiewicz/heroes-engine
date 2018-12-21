import * as React from "react";

import "./Menu.scss";

export class Menu extends React.Component {
  public render() {
    return (
      <div className="menu">
        {this.props.children}
      </div>
    );
  }
}
