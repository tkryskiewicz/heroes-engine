import React from "react";

import * as styles from "./Menu.module.scss";

export class Menu extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}
