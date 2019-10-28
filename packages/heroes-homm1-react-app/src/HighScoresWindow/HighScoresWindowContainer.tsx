import React from "react";

import { GameType, HighScores } from "heroes-homm1";
import { HighScoresWindow } from "heroes-homm1-react";

export interface HighScoresWindowContainerProps {
  readonly visible: boolean;
  readonly scores: HighScores;
  readonly gameType: GameType;
  readonly onGameTypeChange: (value: GameType) => void;
  readonly onExitClick: () => void;
}

export class HighScoresWindowContainer extends React.Component<HighScoresWindowContainerProps> {
  public componentDidMount() {
    this.props.onGameTypeChange(GameType.Standard);
  }

  public render() {
    return (
      <HighScoresWindow
        visible={this.props.visible}
        scores={this.props.scores}
        gameType={this.props.gameType}
        onGameTypeClick={this.onGameTypeClick}
        onExitClick={this.props.onExitClick}
      />
    );
  }

  private readonly onGameTypeClick = () => {
    const value = this.props.gameType === GameType.Standard ?
      GameType.Campaign :
      GameType.Standard;

    this.props.onGameTypeChange(value);
  }
}
