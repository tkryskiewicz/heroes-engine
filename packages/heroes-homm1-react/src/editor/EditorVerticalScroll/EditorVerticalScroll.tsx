import Classnames from "classnames";
import * as React from "react";

import * as styles from "./EditorVerticalScroll.module.scss";

import { buttonImages, ThumbImage } from "./assets";

import { ImageButton } from "../../base";

export interface EditorVerticalScrollProps {
  readonly className?: string;
  readonly progress: number;
  readonly onScrollUpClick?: () => void;
  readonly onScrollDownClick?: () => void;
}

export class EditorVerticalScroll extends React.Component<EditorVerticalScrollProps> {
  public render() {
    const thumbStyle: React.CSSProperties = {
      marginTop: this.props.progress * 393,
    };

    return (
      <div className={Classnames(styles.root, this.props.className)}>
        <ImageButton
          className={styles.up}
          images={buttonImages.up}
          onClick={this.props.onScrollUpClick}
        />
        <div className={styles.track}>
          <img
            className={styles.thumb}
            style={thumbStyle}
            src={ThumbImage}
          />
        </div>
        <ImageButton
          className={styles.down}
          images={buttonImages.down}
          onClick={this.props.onScrollDownClick}
        />
      </div>
    );
  }
}
