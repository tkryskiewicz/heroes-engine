import * as React from "react";

import * as styles from "./EditorWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";

export interface EditorWindowProps {
  readonly renderAdventureWindow: () => React.ReactNode;
  readonly onScrollTopLeft: () => void;
  readonly onScrollTopRight: () => void;
  readonly onScrollBottomLeft: () => void;
  readonly onScrollBottomRight: () => void;
  readonly renderVerticalCellNumbers: () => React.ReactNode;
  readonly renderHorizontalCellNumbers: () => React.ReactNode;
  readonly renderHorizontalScrollbar: () => React.ReactNode;
  readonly renderVerticalScrollbar: () => React.ReactNode;
  readonly renderWorldMap: () => React.ReactNode;
  readonly renderOptions: () => React.ReactNode;
  readonly renderOptionDetails: () => React.ReactNode;
  readonly renderButtons: () => React.ReactNode;
}

export class EditorWindow extends React.Component<EditorWindowProps> {
  public static readonly defaultProps: Pick<EditorWindowProps, keyof EditorWindowProps> = {
    onScrollBottomLeft: () => undefined,
    onScrollBottomRight: () => undefined,
    onScrollTopLeft: () => undefined,
    onScrollTopRight: () => undefined,
    renderAdventureWindow: () => undefined,
    renderButtons: () => undefined,
    renderHorizontalCellNumbers: () => undefined,
    renderHorizontalScrollbar: () => undefined,
    renderOptionDetails: () => undefined,
    renderOptions: () => undefined,
    renderVerticalCellNumbers: () => undefined,
    renderVerticalScrollbar: () => undefined,
    renderWorldMap: () => undefined,
  };

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.adventureWindow}>
          {this.props.renderAdventureWindow()}
        </div>
        <ImageButton
          className={styles.scrollNorthWest}
          images={buttonImages.northWest}
          onClick={this.props.onScrollTopLeft}
        />
        <ImageButton
          className={styles.scrollNorthEast}
          images={buttonImages.northEast}
          onClick={this.props.onScrollTopRight}
        />
        <ImageButton
          className={styles.scrollSouthWest}
          images={buttonImages.southWest}
          onClick={this.props.onScrollBottomLeft}
        />
        <ImageButton
          className={styles.scrollSouthEast}
          images={buttonImages.southEast}
          onClick={this.props.onScrollBottomRight}
        />
        <div className={styles.verticalCellNumbers}>
          {this.props.renderVerticalCellNumbers()}
        </div>
        <div className={styles.horizontalCellNumbers}>
          {this.props.renderHorizontalCellNumbers()}
        </div>
        <div className={styles.verticalScrollbar}>
          {this.props.renderVerticalScrollbar()}
        </div>
        <div className={styles.horizontalScrollbar}>
          {this.props.renderHorizontalScrollbar()}
        </div>
        <div className={styles.worldMap}>
          {this.props.renderWorldMap()}
        </div>
        <div className={styles.options}>
          {this.props.renderOptions()}
        </div>
        <div className={styles.optionDetails}>
          {this.props.renderOptionDetails()}
        </div>
        <div className={styles.buttons}>
          {this.props.renderButtons()}
        </div>
      </div>
    );
  }
}
