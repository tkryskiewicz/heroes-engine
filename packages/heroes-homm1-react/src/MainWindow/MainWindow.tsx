import React from "react";

import * as styles from "./MainWindow.module.scss";

export class MainWindow extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}
