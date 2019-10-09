import Classnames from "classnames";
import React from "react";

import * as styles from "./EditorObjectSlot.module.scss";

export interface EditorObjectSlotProps {
  readonly size: "large" | "small";
  readonly onClick: () => void;
}

export class EditorObjectSlot extends React.Component<EditorObjectSlotProps> {
  public static readonly defaultProps: Pick<EditorObjectSlotProps, "onClick"> = {
    onClick: () => undefined,
  };

  public render() {
    return (
      <div
        className={Classnames(styles.root, styles[this.props.size])}
        onClick={this.props.onClick}
      >
        <div className={styles.objectContainer}>
          <div className={styles.object}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
