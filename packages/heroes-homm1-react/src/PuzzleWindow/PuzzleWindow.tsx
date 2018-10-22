import { Col, Row } from "antd";
import * as React from "react";

import { PuzzlePieceCount } from "heroes-homm1";

import { GameButton } from "../GameButton";

export interface PuzzleWindowProps {
  discoveredPieces: number;
  onExitClick?: () => void;
}

export class PuzzleWindow extends React.Component<PuzzleWindowProps> {
  public render() {
    return (
      <Row>
        <Col span={18}>
          {this.renderPuzzle(this.props.discoveredPieces)}
        </Col>
        <Col span={6}>
          {this.renderLegend()}
        </Col>
      </Row>
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

  // TODO: find better name than legend
  private renderLegend() {
    const style: React.CSSProperties = {
      height: 144,
      position: "relative",
      width: 144,
    };

    const backgroundStyle: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    const buttonStyle: React.CSSProperties = {
      bottom: 6,
      left: 0,
      position: "absolute",
      textAlign: "center",
      width: "100%",
    };

    return (
      <div style={style}>
        <img
          style={backgroundStyle}
          src="assets/ui/puzzle-window/legend-background.jpg"
        />
        <div style={buttonStyle}>
          <GameButton
            group="legend"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </div>
      </div>
    );
  }
}
