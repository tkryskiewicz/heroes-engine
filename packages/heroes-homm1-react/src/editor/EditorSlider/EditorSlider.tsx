import * as React from "react";

import { MapObjectOrientation } from "heroes-core";

import * as styles from "./EditorSlider.module.scss";

import { ThumbImage } from "./assets";

import { EditorScrollButton } from "../EditorScrollButton";

const TrackWidth = 227;

export interface EditorSliderProps {
  readonly value: number;
  readonly onValueChange: (value: number) => void;
}

type DefaultProp =
  "onValueChange";

export class EditorSlider extends React.Component<EditorSliderProps> {
  public static readonly defaultProps: Pick<EditorSliderProps, DefaultProp> = {
    onValueChange: () => undefined,
  };

  public render() {
    const thumbStyle: React.CSSProperties = {
      marginLeft: this.props.value * TrackWidth,
    };

    return (
      <div className={styles.root}>
        <EditorScrollButton
          className={styles.decrease}
          direction={MapObjectOrientation.West}
          onClick={this.onDecreaseClick}
        />
        <div className={styles.track}>
          <img
            className={styles.thumb}
            style={thumbStyle}
            src={ThumbImage}
          />
        </div>
        <EditorScrollButton
          className={styles.increase}
          direction={MapObjectOrientation.East}
          onClick={this.onIncreaseClick}
        />
      </div>
    );
  }

  private readonly onDecreaseClick = () => {
    const value = Math.max(this.props.value - (1 / TrackWidth), 0);

    this.props.onValueChange(value);
  }

  private readonly onIncreaseClick = () => {
    const value = Math.min(this.props.value + (1 / TrackWidth), 1);

    this.props.onValueChange(value);
  }
}
