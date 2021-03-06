import Classnames from "classnames";
import React from "react";

import { Direction } from "heroes-core";

import * as styles from "./EditorHorizontalScrollbar.module.scss";

import { ThumbImage } from "./assets";

import { EditorScrollButton } from "../EditorScrollButton";

export interface EditorHorizontalScrollbarProps {
  readonly className?: string;
  readonly progress: number;
  readonly onScrollLeftClick?: () => void;
  readonly onScrollRightClick?: () => void;
}

export class EditorHorizontalScrollbar extends React.Component<EditorHorizontalScrollbarProps> {
  public render() {
    const thumbStyle: React.CSSProperties = {
      marginLeft: this.props.progress * 393,
    };

    return (
      <div className={Classnames(styles.root, this.props.className)}>
        <EditorScrollButton
          className={styles.left}
          direction={Direction.West}
          onClick={this.props.onScrollLeftClick}
        />
        <div className={styles.track}>
          <img
            className={styles.thumb}
            style={thumbStyle}
            src={ThumbImage}
          />
        </div>
        <EditorScrollButton
          className={styles.right}
          direction={Direction.East}
          onClick={this.props.onScrollRightClick}
        />
      </div>
    );
  }
}
