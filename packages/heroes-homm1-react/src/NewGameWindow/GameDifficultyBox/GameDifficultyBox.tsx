import * as React from "react";
import { FormattedMessage } from "react-intl";

import { GameDifficulty } from "heroes-homm1";

import * as styles from "./GameDifficultyBox.module.scss";

import { GameText } from "../../core";
import { getGameDifficultyMessage } from "../../messages";
import { difficultyImages, SelectionImage } from "./assets";

export interface GameDifficultyBoxProps {
  readonly value: GameDifficulty;
  readonly selected: boolean;
  readonly onClick: (value: GameDifficulty) => void;
}

export class GameDifficultyBox extends React.Component<GameDifficultyBoxProps> {
  public static readonly defaultProps: Pick<GameDifficultyBoxProps, "selected" | "onClick"> = {
    onClick: () => undefined,
    selected: false,
  };

  public render() {
    return (
      <div
        className={styles.root}
      >
        <div className={styles.image}>
          {this.renderIcon(this.props.value)}
          {this.props.selected && this.renderSelection()}
        </div>
        <GameText size="normal">
          <FormattedMessage {...getGameDifficultyMessage(this.props.value)} />
        </GameText>
      </div>
    );
  }

  private renderIcon(difficulty: string) {
    return (
      <img
        className={styles.icon}
        src={difficultyImages[difficulty]}
        onClick={this.onClick}
      />
    );
  }

  private renderSelection() {
    return (
      <img
        className={styles.selection}
        src={SelectionImage}
      />
    );
  }

  private readonly onClick = () => {
    this.props.onClick(this.props.value);
  }
}
