import * as React from "react";

import { GameDifficulty } from "heroes-homm1";

import "./GameDifficultyBox.scss";

import EasyImage = require("./difficulty-easy.jpg");
import ExpertImage = require("./difficulty-expert.jpg");
import HardImage = require("./difficulty-hard.jpg");
import NormalImage = require("./difficulty-normal.jpg");
import SelectionImage = require("./selection.png");

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
    const images: { [index: string]: string } = {
      easy: EasyImage,
      expert: ExpertImage,
      hard: HardImage,
      normal: NormalImage,
    };

    return (
      <img
        className="game-difficulty-box-icon"
        src={images[difficulty]}
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
