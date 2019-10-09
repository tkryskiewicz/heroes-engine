import React from "react";

import * as styles from "./GameParagraph.module.scss";

import { GameText, GameTextProps } from "../GameText";

export interface GameParagraphProps {
  readonly textSize: GameTextProps["size"];
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
