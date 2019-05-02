import Classnames from "classnames";
import * as React from "react";

import * as styles from "./EditorObjectSlot.module.scss";

export interface EditorObjectSlotProps {
  readonly size: "large" | "small";
  readonly renderObject: () => React.ReactNode;
}

export class EditorObjectSlot extends React.Component<EditorObjectSlotProps> {
  public static readonly defaultProps: Pick<EditorObjectSlotProps, "renderObject"> = {
    renderObject: () => undefined,
  };

  public render() {
    return (
      <div className={Classnames(styles.root, styles[this.props.size])}>
        <div className={styles.object}>
          {this.props.renderObject()}
        </div>
      </div>
    );
  }
}
