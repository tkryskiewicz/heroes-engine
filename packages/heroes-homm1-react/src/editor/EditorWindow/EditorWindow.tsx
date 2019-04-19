import * as React from "react";

import * as styles from "./EditorWindow.module.scss";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { EditorHorizontalScroll } from "../EditorHorizontalScroll";
import { EditorVerticalScroll } from "../EditorVerticalScroll";

export interface EditorWindowProps {
  readonly renderAdventureWindow: () => React.ReactNode;
  readonly renderWorldMap: () => React.ReactNode;
  readonly renderOptions: () => React.ReactNode;
  readonly renderOptionDetails: () => React.ReactNode;
  readonly renderButtons: () => React.ReactNode;
}

export class EditorWindow extends React.Component<EditorWindowProps> {
  public static readonly defaultProps: Pick<EditorWindowProps, keyof EditorWindowProps> = {
    renderAdventureWindow: () => undefined,
    renderButtons: () => undefined,
    renderOptionDetails: () => undefined,
    renderOptions: () => undefined,
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
        />
        <ImageButton
          className={styles.scrollNorthEast}
          images={buttonImages.northEast}
        />
        <ImageButton
          className={styles.scrollSouthWest}
          images={buttonImages.southWest}
        />
        <ImageButton
          className={styles.scrollSouthEast}
          images={buttonImages.southEast}
        />
        <EditorVerticalScroll
          className={styles.verticalScroll}
        />
        <EditorHorizontalScroll
          className={styles.horizontalScroll}
        />
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
