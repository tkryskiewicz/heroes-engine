import React from "react";

import { GameDifficulty } from "heroes-homm1";

import * as styles from "./GameDifficultyBox.module.scss";

import { difficultyImages, SelectionImage } from "./assets";

interface Props {
  readonly value: GameDifficulty;
  readonly selected: boolean;
  readonly onClick: (value: GameDifficulty) => void;
}

export class GameDifficultyBox extends React.Component<Props> {
  public static readonly defaultProps: Props = {
    onClick: () => undefined,
    selected: false,
    value: GameDifficulty.Easy,
  };

  public render() {
    return (
      <div
        className={styles.root}
        onClick={this.onClick}
      >
        {this.renderIcon(this.props.value)}
        {this.props.selected && this.renderSelection()}
      </div>
    );
  }

  private renderIcon(difficulty: GameDifficulty) {
    return (
      <img
        className={styles.icon}
        src={difficultyImages[difficulty]}
      />
    );
  }

  private renderSelection() {
    return (
      <img
        data-test-id="selection"
        className={styles.selection}
        src={SelectionImage}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.value);
  }
}

export type GameDifficultyBoxProps = ExtractPublicProps<typeof GameDifficultyBox>;
