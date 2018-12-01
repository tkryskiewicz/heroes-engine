import * as React from "react";

import { GameDifficulty } from "heroes-homm1";

import "./GameDifficultyBox.scss";

import { difficultyImages, SelectionImage } from "./assets";

export interface GameDifficultyBoxProps {
  value: GameDifficulty;
  selected: boolean;
  onClick: (value: GameDifficulty) => void;
}

export class GameDifficultyBox extends React.Component<GameDifficultyBoxProps> {
  public static defaultProps: Pick<GameDifficultyBoxProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <div
        className="game-difficulty-box"
        onClick={this.onClick}
      >
        {this.renderIcon(this.props.value)}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderIcon(difficulty: string) {
    return (
      <img
        className="game-difficulty-box-icon"
        src={difficultyImages[difficulty]}
      />
    );
  }

  private renderSelection() {
    return (
      <img
        className="game-difficulty-box-selection"
        src={SelectionImage}
      />
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.value);
  }
}
