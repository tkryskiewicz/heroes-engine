import Classnames from "classnames";
import * as React from "react";

import * as styles from "./OrientableMapObject.module.scss";

export interface OrientableMapObjectProps {
  readonly invert: boolean;
}

export class OrientableMapObject extends React.Component<OrientableMapObjectProps> {
  public render() {
    return (
      <div className={Classnames(styles.root, this.props.invert && styles.invert)}>
        {this.props.children}
      </div>
    );
  }
}
