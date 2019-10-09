import React from "react";

import * as styles from "./EditorButtons.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";

export interface EditorButtonsProps {
  readonly onZoomClick: () => void;
  readonly onUndoClick: () => void;
  readonly onSpecsClick: () => void;
  readonly onRandomClick: () => void;
  readonly onNewClick: () => void;
  readonly onLoadClick: () => void;
  readonly onSaveClick: () => void;
  readonly onQuitClick: () => void;
}

export class EditorButtons extends React.Component<EditorButtonsProps> {
  public static readonly defaultProps: EditorButtonsProps = {
    onLoadClick: () => undefined,
    onNewClick: () => undefined,
    onQuitClick: () => undefined,
    onRandomClick: () => undefined,
    onSaveClick: () => undefined,
    onSpecsClick: () => undefined,
    onUndoClick: () => undefined,
    onZoomClick: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <ImageButton
          className={styles.button}
          images={buttonImages.zoom}
          onClick={this.props.onZoomClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.undo}
          onClick={this.props.onUndoClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.specs}
          onClick={this.props.onSpecsClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.random}
          onClick={this.props.onRandomClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.new}
          onClick={this.props.onNewClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.load}
          onClick={this.props.onLoadClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.save}
          onClick={this.props.onSaveClick}
        />
        <ImageButton
          className={styles.button}
          images={buttonImages.quit}
          onClick={this.props.onQuitClick}
        />
      </div>
    );
  }
}
