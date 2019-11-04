import React from "react";

import { MapObjectOrientation } from "heroes-core";

import * as styles from "./EditorWindow.module.scss";

import { GameText } from "../../core";
import { EditorScrollButton } from "../EditorScrollButton";

interface Props {
  readonly renderAdventureMap: () => React.ReactNode;
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
  readonly message: string;
}

export class EditorWindow extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    message: "",
    onScrollBottomLeft: () => undefined,
    onScrollBottomRight: () => undefined,
    onScrollTopLeft: () => undefined,
    onScrollTopRight: () => undefined,
    renderAdventureMap: () => undefined,
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
        <div
          data-test-id="adventure-map"
          className={styles.adventureMap}
        >
          {this.props.renderAdventureMap()}
        </div>
        <EditorScrollButton
          data-test-id="scroll-top-left"
          className={styles.scrollNorthWest}
          direction={MapObjectOrientation.NorthWest}
          onClick={this.props.onScrollTopLeft}
        />
        <EditorScrollButton
          data-test-id="scroll-top-right"
          className={styles.scrollNorthEast}
          direction={MapObjectOrientation.NorthEast}
          onClick={this.props.onScrollTopRight}
        />
        <EditorScrollButton
          data-test-id="scroll-bottom-left"
          className={styles.scrollSouthWest}
          direction={MapObjectOrientation.SouthWest}
          onClick={this.props.onScrollBottomLeft}
        />
        <EditorScrollButton
          data-test-id="scroll-bottom-right"
          className={styles.scrollSouthEast}
          direction={MapObjectOrientation.SouthEast}
          onClick={this.props.onScrollBottomRight}
        />
        <div
          data-test-id="vertical-cell-numbers"
          className={styles.verticalCellNumbers}
        >
          {this.props.renderVerticalCellNumbers()}
        </div>
        <div
          data-test-id="horizontal-cell-numbers"
          className={styles.horizontalCellNumbers}
        >
          {this.props.renderHorizontalCellNumbers()}
        </div>
        <div
          data-test-id="vertical-scrollbar"
          className={styles.verticalScrollbar}
        >
          {this.props.renderVerticalScrollbar()}
        </div>
        <div
          data-test-id="horizontal-scrollbar"
          className={styles.horizontalScrollbar}
        >
          {this.props.renderHorizontalScrollbar()}
        </div>
        <div
          data-test-id="world-map"
          className={styles.worldMap}
        >
          {this.props.renderWorldMap()}
        </div>
        <div
          data-test-id="options"
          className={styles.options}
        >
          {this.props.renderOptions()}
        </div>
        <div
          data-test-id="option-details"
          className={styles.optionDetails}
        >
          {this.props.renderOptionDetails()}
        </div>
        <div
          data-test-id="buttons"
          className={styles.buttons}
        >
          {this.props.renderButtons()}
        </div>
        {this.props.message && this.renderMessage(this.props.message)}
      </div>
    );
  }

  private renderMessage(value: string) {
    return (
      <GameText
        data-test-id="message"
        className={styles.message}
        size="normal"
      >
        {value}
      </GameText>
    );
  }
}

export type EditorWindowProps = ExtractPublicProps<typeof EditorWindow>;
