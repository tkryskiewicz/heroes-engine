import * as React from "react";

type MainMenuButtonType =
  "new-game" |
  "load-game" |
  "view-high-scores" |
  "view-credits" |
  "quit";

type AdventureButtonType =
  "next-hero" |
  "move" |
  "kingdom-overview" |
  "end-turn" |
  "adventure-options" |
  "game-options";

type AdventureOptionButtonType =
  "view-world" |
  "view-puzzle" |
  "cast-spell" |
  "dig" |
  "okay";

export type GameButtonType =
  MainMenuButtonType |
  AdventureButtonType |
  AdventureOptionButtonType |
  "exit";

export type GameButtonGroup =
  "main-menu" |
  "adventure" |
  "adventure-options";

// TODO: improve intellisense when using groups
export interface GameButtonProps {
  group?: GameButtonGroup;
  type: GameButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

interface GameButtonState {
  pressed: boolean;
}

export class GameButton extends React.Component<GameButtonProps, GameButtonState> {
  public state: GameButtonState = {
    pressed: false,
  };

  public render() {
    const { type, group, disabled } = this.props;

    const renderEnabled = !disabled && !this.state.pressed;

    // TODO: are those styles needed?
    const style: React.CSSProperties = {
      border: "none",
      outline: 0,
      padding: 0,
    };

    return (
      <button
        style={style}
        disabled={this.props.disabled}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onClick={this.onClick}
      >
        {renderEnabled ? this.renderEnabled(type, group) : this.renderDisabled(type, group)}
      </button>
    );
  }

  // TODO: simplify
  private renderEnabled(type: GameButtonType, group?: GameButtonGroup) {
    return (
      <img src={`assets/buttons/${group ? `${group}/` : ""}${type}/enabled.png`} />
    );
  }

  private renderDisabled(type: GameButtonType, group?: GameButtonGroup) {
    return (
      <img src={`assets/buttons/${group ? `${group}/` : ""}${type}/disabled.png`} />
    );
  }

  private onMouseDown = () => {
    this.setState({
      pressed: true,
    });
  }

  private onMouseUp = () => {
    this.setState({
      pressed: false,
    });
  }

  private onClick = () => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick();
  }
}
