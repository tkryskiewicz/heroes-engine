import * as React from "react";

import { PuzzlePieceCount } from "heroes-homm1";

import "./PuzzleWindow.scss";

import { puzzleImages } from "./puzzle";

import { ViewWindow } from "../ViewWindow";

export interface PuzzleWindowProps {
  discoveredPieces: number;
  onExitClick?: () => void;
}

export class PuzzleWindow extends React.Component<PuzzleWindowProps> {
  public render() {
    return (
      <ViewWindow
        type="puzzle"
        onExitClick={this.props.onExitClick}
      >
        {this.renderPuzzle(this.props.discoveredPieces)}
      </ViewWindow>
    );
  }

  private renderPuzzle(discoveredPieces: number) {
    return (
      <div className="puzzle-window-puzzle">
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
        className="puzzle-window-puzzle-piece"
        key={index}
        src={puzzleImages[index]}
      />
    );
  }
}
