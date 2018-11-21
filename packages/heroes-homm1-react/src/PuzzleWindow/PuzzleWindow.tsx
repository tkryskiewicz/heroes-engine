import * as React from "react";

import { PuzzlePieceCount } from "heroes-homm1";

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
    const style: React.CSSProperties = {
      height: 448,
      position: "relative",
      width: 448,
    };

    return (
      <div style={style}>
        {this.renderPieces(PuzzlePieceCount - discoveredPieces)}
      </div>
    );
  }

  private renderPieces(count: number) {
    return [...new Array(count).keys()]
      .map((i) => this.renderPiece(PuzzlePieceCount - 1 - i));
  }

  private renderPiece(index: number) {
    const style: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    return (
      <img
        key={index}
        style={style}
        src={`assets/ui/puzzle-window/puzzle-${index}.png`}
      />
    );
  }
}
