import Classnames from "classnames";
import * as React from "react";

import * as styles from "./EditorHorizontalScroll.module.scss";

import { BackgroundImage, BlockImage, buttonImages } from "./assets";

import { ImageButton } from "../../base";

export interface EditorHorizontalScrollProps {
  readonly className?: string;
  readonly onScrollLeftClick?: () => void;
  readonly onScrollRightClick?: () => void;
}

export class EditorHorizontalScroll extends React.Component<EditorHorizontalScrollProps> {
  public render() {
    return (
      <div className={Classnames(styles.root, this.props.className)}>
        <ImageButton
          className={styles.left}
          images={buttonImages.left}
          onClick={this.props.onScrollLeftClick}
        />
        <img
          className={styles.background}
          src={BackgroundImage}
        />
        <ImageButton
          className={styles.right}
          images={buttonImages.right}
          onClick={this.props.onScrollRightClick}
        />
        <img
          className={styles.block}
          src={BlockImage}
        />
      </div>
    );
  }
}
