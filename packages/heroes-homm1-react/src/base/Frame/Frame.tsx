import * as React from "react";

import * as styles from "./Frame.module.scss";

export class Frame extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}
