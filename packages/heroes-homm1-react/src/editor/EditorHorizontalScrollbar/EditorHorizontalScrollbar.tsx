import Classnames from "classnames";
import * as React from "react";

import * as styles from "./EditorHorizontalScrollbar.module.scss";

import { buttonImages, ThumbImage } from "./assets";

import { ImageButton } from "../../base";

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
        <ImageButton
          className={styles.left}
          images={buttonImages.left}
          onClick={this.props.onScrollLeftClick}
        />
        <div className={styles.track}>
          <img
            className={styles.thumb}
            style={thumbStyle}
            src={ThumbImage}
          />
        </div>
        <ImageButton
          className={styles.right}
          images={buttonImages.right}
          onClick={this.props.onScrollRightClick}
        />
      </div>
    );
  }
}
