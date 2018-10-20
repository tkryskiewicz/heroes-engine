import * as React from "react";

import { GameDifficulty } from "heroes-homm1";

export interface GameDifficultyBoxProps {
  value: GameDifficulty;
  selected?: boolean;
  onClick?: (value: GameDifficulty) => void;
}

export class GameDifficultyBox extends React.Component<GameDifficultyBoxProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
      height: 71,
      position: "relative",
      width: 71,
    };

    return (
      <div
        style={style}
        onClick={this.onClick}
      >
        {this.renderIcon(this.props.value)}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderIcon(difficulty: string) {
    const style: React.CSSProperties = {
      left: 3,
      position: "absolute",
      top: 3,
    };

    return (
      <img
        style={style}
        src={`assets/ui/new-game-window/difficulty-${difficulty}.jpg`}
      />
    );
  }

  private renderSelection() {
    const style: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    return (
      <img
        style={style}
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
