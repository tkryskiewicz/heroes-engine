import Classnames from "classnames";
import React from "react";

import { MapObjectOrientation } from "heroes-core";

import * as styles from "./EditorVerticalScrollbar.module.scss";

import { ThumbImage } from "./assets";

import { EditorScrollButton } from "../EditorScrollButton";

export interface EditorVerticalScrollbarProps {
  readonly className?: string;
  readonly progress: number;
  readonly onScrollUpClick?: () => void;
  readonly onScrollDownClick?: () => void;
}

export class EditorVerticalScrollbar extends React.Component<EditorVerticalScrollbarProps> {
  public render() {
    const thumbStyle: React.CSSProperties = {
      marginTop: this.props.progress * 393,
    };

    return (
      <div className={Classnames(styles.root, this.props.className)}>
        <EditorScrollButton
          className={styles.up}
          direction={MapObjectOrientation.North}
          onClick={this.props.onScrollUpClick}
        />
        <div className={styles.track}>
          <img
            className={styles.thumb}
            style={thumbStyle}
            src={ThumbImage}
          />
        </div>
        <EditorScrollButton
          className={styles.down}
          direction={MapObjectOrientation.South}
          onClick={this.props.onScrollDownClick}
        />
      </div>
    );
  }
}
