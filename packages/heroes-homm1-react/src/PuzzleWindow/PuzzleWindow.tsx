import * as React from "react";

import { PuzzlePieceCount } from "heroes-homm1";

import * as styles from "./PuzzleWindow.module.scss";

import { puzzleImages } from "./assets";

import { ViewWindow } from "../ViewWindow";

export interface PuzzleWindowProps {
  discoveredPieces: number;
  visible?: boolean;
  onExitClick?: () => void;
}

export class PuzzleWindow extends React.Component<PuzzleWindowProps> {
  public render() {
    return (
      <ViewWindow
        type="puzzle"
        visible={this.props.visible}
        onExitClick={this.props.onExitClick}
      >
        {this.renderPuzzle(this.props.discoveredPieces)}
      </ViewWindow>
    );
  }

  private renderPuzzle(discoveredPieces: number) {
    return (
      <div className={styles.puzzle}>
        {this.renderPieces(PuzzlePieceCount - discoveredPieces)}
      </div>
    );
  }

  private renderPieces(count: number) {
    return [...new Array(count).keys()]
      .map((i) => this.renderPiece(PuzzlePieceCount - 1 - i));
  }

  private renderPiece(index: number) {
    return (
      <img
        className={styles.puzzlePiece}
        key={index}
        src={puzzleImages[index]}
      />
    );
  }
}
