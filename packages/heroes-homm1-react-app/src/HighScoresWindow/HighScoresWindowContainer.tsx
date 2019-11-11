import React from "react";

import { nextOption } from "heroes-core";
import { noop } from "heroes-helpers";
import { GameType, HighScores } from "heroes-homm1";
import { HighScoresWindow } from "heroes-homm1-react";

interface Props {
  readonly visible: boolean;
  readonly scores: HighScores;
  readonly gameType: GameType;
  readonly onGameTypeChange: (value: GameType) => void;
  readonly onExitClick: () => void;
}

type DefaultProp =
  "onGameTypeChange" |
  "onExitClick";

export class HighScoresWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    onExitClick: noop,
    onGameTypeChange: noop,
  };

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
    const gameTypes = [
      GameType.Standard,
      GameType.Campaign,
    ];

    const value = nextOption(gameTypes, this.props.gameType);

    this.props.onGameTypeChange(value);
  }
}

export type HighScoresWindowContainerProps = ExtractPublicProps<typeof HighScoresWindowContainer>;
