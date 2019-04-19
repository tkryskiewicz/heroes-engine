import Classnames from "classnames";
import * as React from "react";

import * as styles from "./EditorVerticalScroll.module.scss";

import { BackgroundImage, BlockImage, buttonImages } from "./assets";

import { ImageButton } from "../../base";

export interface EditorVerticalScrollProps {
  readonly className?: string;
  readonly onScrollUpClick?: () => void;
  readonly onScrollDownClick?: () => void;
}

export class EditorVerticalScroll extends React.Component<EditorVerticalScrollProps> {
  public render() {
    return (
      <div className={Classnames(styles.root, this.props.className)}>
        <ImageButton
          className={styles.up}
          images={buttonImages.up}
          onClick={this.props.onScrollUpClick}
        />
        <img
          className={styles.background}
          src={BackgroundImage}
        />
        <ImageButton
          className={styles.down}
          images={buttonImages.down}
          onClick={this.props.onScrollDownClick}
        />
        <img
          className={styles.block}
          src={BlockImage}
        />
      </div>
    );
  }
}
