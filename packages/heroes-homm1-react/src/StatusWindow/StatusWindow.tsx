import * as React from "react";

import * as styles from "./StatusWindow.module.scss";

export class StatusWindow extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}
