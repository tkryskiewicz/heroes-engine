import React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { GameOption } from "heroes-homm1";
import { EndGamePrompt, GameOptionsWindow, GameOptionsWindowProps } from "heroes-homm1-react";

interface Props extends GameOptionsWindowProps, RouteComponentProps {
  readonly endGameOption?: GameOption;
  readonly onOpenEndGamePromptClick: (option: GameOption) => void;
  readonly onCloseEndGamePromptClick: () => void;
}

class GameOptionsWindowContainer extends React.Component<Props> {
  public render() {
    return (
      <>
        <GameOptionsWindow
          {...this.props}
          onNewGameClick={this.onNewGameClick}
          onLoadGameClick={this.onLoadGameClick}
          onQuitClick={this.onQuitClick}
        />
        {this.props.endGameOption && this.renderEndGamePrompt(this.props.endGameOption)}
      </>
    );
  }

  private readonly onNewGameClick = () => {
    this.props.onOpenEndGamePromptClick(GameOption.NewGame);
  }

  private readonly onLoadGameClick = () => {
    this.props.onOpenEndGamePromptClick(GameOption.LoadGame);
  }

  private readonly onQuitClick = () => {
    this.props.onOpenEndGamePromptClick(GameOption.Quit);
  }

  private renderEndGamePrompt(option: GameOption) {
    return (
      <EndGamePrompt
        visible={true}
        option={option}
        onConfirmClick={this.onConfirmEndGameClick}
        onCancelClick={this.props.onCloseEndGamePromptClick}
      />
    );
  }

  private readonly onConfirmEndGameClick = () => {
    this.props.onCloseEndGamePromptClick();

    switch (this.props.endGameOption) {
      case GameOption.NewGame:
        this.props.history.push("/main/new-game/");
        break;
      case GameOption.LoadGame:
        this.props.history.push("/main/load-game/");
        break;
      case GameOption.Quit:
        this.props.history.push("/main");
        break;
    }
  }
}

const ComponentWrapped = withRouter(GameOptionsWindowContainer);

export type ComponentWrappedProps = ExtractPublicProps<typeof GameOptionsWindowContainer>;

export {
  ComponentWrapped as GameOptionsWindowContainer,
  ComponentWrappedProps as GameOptionsWindowContainerProps,
};
