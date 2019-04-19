import * as React from "react";

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
          images={buttonImages.zoom}
          onClick={this.props.onZoomClick}
        />
        <ImageButton
          images={buttonImages.undo}
          onClick={this.props.onUndoClick}
        />
        <ImageButton
          images={buttonImages.specs}
          onClick={this.props.onSpecsClick}
        />
        <ImageButton
          images={buttonImages.random}
          onClick={this.props.onRandomClick}
        />
        <ImageButton
          images={buttonImages.new}
          onClick={this.props.onNewClick}
        />
        <ImageButton
          images={buttonImages.load}
          onClick={this.props.onLoadClick}
        />
        <ImageButton
          images={buttonImages.save}
          onClick={this.props.onSaveClick}
        />
        <ImageButton
          images={buttonImages.quit}
          onClick={this.props.onQuitClick}
        />
      </div>
    );
  }
}
