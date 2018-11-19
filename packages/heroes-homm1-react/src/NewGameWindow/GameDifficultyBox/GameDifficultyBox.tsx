import * as React from "react";

import { GameDifficulty } from "heroes-homm1";

import "./GameDifficultyBox.scss";

export interface GameDifficultyBoxProps {
  value: GameDifficulty;
  selected?: boolean;
  onClick?: (value: GameDifficulty) => void;
}

export class GameDifficultyBox extends React.Component<GameDifficultyBoxProps> {
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
        src={`assets/ui/new-game-window/difficulty-${difficulty}.jpg`}
      />
    );
  }

  private renderSelection() {
    return (
      <img
        className="game-difficulty-box-selection"
        src="assets/ui/new-game-window/selection.png"
      />
    );
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(this.props.value);
  }
}
