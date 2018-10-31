import * as React from "react";

type SystemButtonType =
  "yes" |
  "no" |
  "okay" |
  "cancel";

type MainMenuButtonType =
  "new-game" |
  "load-game" |
  "view-high-scores" |
  "view-credits" |
  "quit";

type NewGameMenuButtonType =
  "standard-game" |
  "campaign-game" |
  "multi-player-game" |
  "cancel";

type CampaignMenuButtonType =
  "play-red" |
  "play-green" |
  "play-yellow" |
  "play-blue" |
  "cancel";

type NewGameWindowButtonType =
  "okay" |
  "cancel";

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

type GameOptionButtonType =
  "new-game" |
  "load-game" |
  "save-game" |
  "quit" |
  "okay" |
  "info";

type HeroWindowButtonType =
  "dismiss" |
  "exit";

type TroopWindowButtonType =
  "dismiss" |
  "exit";

type HeroTradingWindowButtonType =
  "exit";

type TownWindowButtonType =
  "exit";

type CampaignScenarioInfoWindowButtonType =
  "okay" |
  "restart-scenario";

type KingdomOverviewWindowButtonType =
  "exit";

type HighScoresWindowButtonType =
  "standard" |
  "campaign" |
  "exit";

type RecruitTroopWindowButtonType =
  "max" |
  "okay" |
  "cancel";

type LegendButtonType =
  "exit";

type CombatWonWindowButtonType =
  "okay";

type CombatLostWindowButtonType =
  "okay";

export type GameButtonType =
  SystemButtonType |
  MainMenuButtonType |
  NewGameMenuButtonType |
  CampaignMenuButtonType |
  NewGameWindowButtonType |
  AdventureButtonType |
  AdventureOptionButtonType |
  GameOptionButtonType |
  HeroWindowButtonType |
  TroopWindowButtonType |
  HeroTradingWindowButtonType |
  TownWindowButtonType |
  CampaignScenarioInfoWindowButtonType |
  KingdomOverviewWindowButtonType |
  HighScoresWindowButtonType |
  RecruitTroopWindowButtonType |
  LegendButtonType |
  CombatWonWindowButtonType |
  CombatLostWindowButtonType;

export type GameButtonGroup =
  "system" |
  "main-menu" |
  "new-game-menu" |
  "campaign-menu" |
  "new-game-window" |
  "adventure" |
  "adventure-options" |
  "game-options" |
  "hero-window" |
  "troop-window" |
  "hero-trading-window" |
  "town-window" |
  "campaign-scenario-info-window" |
  "kingdom-overview-window" |
  "high-scores-window" |
  "recruit-troop-window" |
  "legend" |
  "combat-won-window" |
  "combat-lost-window";

// TODO: improve intellisense when using groups
export interface GameButtonProps {
  group: GameButtonGroup;
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
      background: "transparent",
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
