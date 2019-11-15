import React from "react";

import * as styles from "./GameParagraph.module.scss";

import { GameText, GameTextSize } from "../GameText";

export interface GameParagraphProps {
  readonly textSize: GameTextSize;
}

export class GameParagraph extends React.Component<GameParagraphProps> {
  public render() {
    return (
      <div className={`${styles.root} ${styles[this.props.textSize]}`}>
        <GameText size={this.props.textSize}>
          {this.props.children}
        </GameText>
      </div>
    );
  }
}
