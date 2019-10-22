import React from "react";

import { GameType, HighScores } from "heroes-homm1";
import { CreditsWindow, HighScoresWindow, MainMenu, MainWindow } from "heroes-homm1-react";

interface Props {
  readonly highScores: HighScores;
  readonly gameType: GameType;
  readonly onGameTypeChange: (value: GameType) => void;
  readonly highScoresVisible: boolean;
  readonly onOpenHighScoresClick: () => void;
  readonly onCloseHighScoresClick: () => void;
  readonly creditsVisible: boolean;
  readonly onOpenCreditsClick: () => void;
  readonly onCloseCreditsClick: () => void;
}

type DefaultProp =
  "highScores" |
  "gameType" |
  "onGameTypeChange" |
  "highScoresVisible" |
  "onOpenHighScoresClick" |
  "onCloseHighScoresClick" |
  "creditsVisible" |
  "onOpenCreditsClick" |
  "onCloseCreditsClick";

export class MainWindowContainer extends React.Component<Props> {
  public static readonly defaultProps: Pick<Props, DefaultProp> = {
    creditsVisible: false,
    gameType: GameType.Standard,
    highScores: {
      [GameType.Standard]: [],
      [GameType.Campaign]: [],
    },
    highScoresVisible: false,
    onCloseCreditsClick: () => undefined,
    onCloseHighScoresClick: () => undefined,
    onGameTypeChange: () => undefined,
    onOpenCreditsClick: () => undefined,
    onOpenHighScoresClick: () => undefined,
  };

  public render() {
    return (
      <MainWindow>
        <MainMenu
          onViewHighScoresClick={this.props.onOpenHighScoresClick}
          onViewCreditsClick={this.props.onOpenCreditsClick}
        />
        <HighScoresWindow
          visible={this.props.highScoresVisible}
          scores={this.props.highScores}
          gameType={this.props.gameType}
          onGameTypeClick={this.onGameTypeClick}
          onExitClick={this.props.onCloseHighScoresClick}
        />
        <CreditsWindow
          visible={this.props.creditsVisible}
          onClick={this.props.onCloseCreditsClick}
        />
      </MainWindow>
    );
  }

  private readonly onGameTypeClick = () => {
    const value = this.props.gameType === GameType.Standard ?
      GameType.Campaign :
      GameType.Standard;

    this.props.onGameTypeChange(value);
  }
}

export type MainWindowContainerProps = ExtractPublicProps<typeof MainWindowContainer>;
