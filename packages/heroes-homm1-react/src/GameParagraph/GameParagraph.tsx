import * as React from "react";

import "./GameParagraph.scss";

import { GameText, GameTextProps } from "../core";

export interface GameParagraphProps {
  textSize: GameTextProps["size"];
}

export class GameParagraph extends React.Component<GameParagraphProps> {
  public render() {
    return (
      <div className={`game-paragraph game-paragraph-${this.props.textSize}`}>
        <GameText size={this.props.textSize}>
          {this.props.children}
        </GameText>
      </div>
    );
  }
}
