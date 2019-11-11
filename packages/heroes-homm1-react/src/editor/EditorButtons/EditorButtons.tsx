import React from "react";

import { noop } from "heroes-helpers";

import * as styles from "./EditorButtons.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";

interface Props {
  readonly onZoomClick: () => void;
  readonly onUndoClick: () => void;
  readonly onSpecsClick: () => void;
  readonly onRandomClick: () => void;
  readonly onNewClick: () => void;
  readonly onLoadClick: () => void;
  readonly onSaveClick: () => void;
  readonly onQuitClick: () => void;
}

export class EditorButtons extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    onLoadClick: noop,
    onNewClick: noop,
    onQuitClick: noop,
    onRandomClick: noop,
    onSaveClick: noop,
    onSpecsClick: noop,
    onUndoClick: noop,
    onZoomClick: noop,
  };

  public render() {
    return (
      <div className={styles.root}>
        <ImageButton
          data-test-id="zoom"
          className={styles.button}
          images={buttonImages.zoom}
          onClick={this.props.onZoomClick}
        />
        <ImageButton
          data-test-id="undo"
          className={styles.button}
          images={buttonImages.undo}
          onClick={this.props.onUndoClick}
        />
        <ImageButton
          data-test-id="specs"
          className={styles.button}
          images={buttonImages.specs}
          onClick={this.props.onSpecsClick}
        />
        <ImageButton
          data-test-id="random"
          className={styles.button}
          images={buttonImages.random}
          onClick={this.props.onRandomClick}
        />
        <ImageButton
          data-test-id="new"
          className={styles.button}
          images={buttonImages.new}
          onClick={this.props.onNewClick}
        />
        <ImageButton
          data-test-id="load"
          className={styles.button}
          images={buttonImages.load}
          onClick={this.props.onLoadClick}
        />
        <ImageButton
          data-test-id="save"
          className={styles.button}
          images={buttonImages.save}
          onClick={this.props.onSaveClick}
        />
        <ImageButton
          data-test-id="quit"
          className={styles.button}
          images={buttonImages.quit}
          onClick={this.props.onQuitClick}
        />
      </div>
    );
  }
}

export type EditorButtonsProps = ExtractPublicProps<typeof EditorButtons>;
