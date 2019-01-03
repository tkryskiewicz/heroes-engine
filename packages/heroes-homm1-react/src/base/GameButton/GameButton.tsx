import * as React from "react";

import "./GameButton.scss";

import { buttonImages } from "./assets";

export interface GameButtonPropsBase {
  group: string;
  type: string;
  disabled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

interface AdventureOptionsButtonProps extends GameButtonPropsBase {
  group: "adventure-options";
  type: "cast-spell" | "dig" | "okay" | "view-puzzle" | "view-world";
}

interface CampaignMenuButtonProps extends GameButtonPropsBase {
  group: "campaign-menu";
  type: "cancel" | "play-lord-alamar" | "play-lord-ironfist" | "play-lord-slayer" | "play-queen-lamanda";
}

interface CampaignScenarioInfoWindowButtonProps extends GameButtonPropsBase {
  group: "campaign-scenario-info-window";
  type: "okay" | "restart-scenario";
}

interface CombatLostWindowButtonProps extends GameButtonPropsBase {
  group: "combat-lost-window";
  type: "okay";
}

interface CombatWonWindowButtonProps extends GameButtonPropsBase {
  group: "combat-won-window";
  type: "okay";
}

interface GameOptionsButtonProps extends GameButtonPropsBase {
  group: "game-options";
  type: "info" | "load-game" | "new-game" | "okay" | "quit" | "save-game";
}

interface HeroTradingWindowButtonProps extends GameButtonPropsBase {
  group: "hero-trading-window";
  type: "exit";
}

interface HeroWindowButtonProps extends GameButtonPropsBase {
  group: "hero-window";
  type: "dismiss" | "exit";
}

interface HighScoresWindowButtonProps extends GameButtonPropsBase {
  group: "high-scores-window";
  type: "campaign" | "exit" | "standard";
}

interface KingdomOverviewWindowButtonProps extends GameButtonPropsBase {
  group: "kingdom-overview-window";
  type: "exit";
}

interface LegendButtonProps extends GameButtonPropsBase {
  group: "legend";
  type: "exit";
}

interface MainMenuButtonProps extends GameButtonPropsBase {
  group: "main-menu";
  type: "load-game" | "new-game" | "quit" | "view-credits" | "view-high-scores";
}

interface NewGameMenuButtonProps extends GameButtonPropsBase {
  group: "new-game-menu";
  type: "campaign-game" | "cancel" | "multi-player-game" | "standard-game";
}

interface MultiPlayerMenuButtonProps extends GameButtonPropsBase {
  group: "multi-player-menu";
  type: "hot-seat" | "direct-connect" | "modem" | "network" | "cancel";
}

interface HotSeatMenuButtonProps extends GameButtonPropsBase {
  group: "hot-seat-menu";
  type: "2-players" | "3-players" | "4-players" | "cancel";
}

interface ComMenuButtonProps extends GameButtonPropsBase {
  group: "com-menu";
  type: "com-1" | "com-2" | "com-3" | "com-4" | "cancel";
}

interface BaudMenuButtonProps extends GameButtonPropsBase {
  group: "baud-menu";
  type: "2400-baud" | "9600-baud" | "19200-baud" | "38400-baud" | "cancel";
}

interface NewGameWindowButtonProps extends GameButtonPropsBase {
  group: "new-game-window";
  type: "cancel" | "okay";
}

interface RecruitHeroWindowButtonProps extends GameButtonPropsBase {
  group: "recruit-hero-window";
  type: "recruit";
}

interface RecruitTroopWindowButtonProps extends GameButtonPropsBase {
  group: "recruit-troop-window";
  type: "cancel" | "max" | "okay";
}

interface SystemButtonProps extends GameButtonPropsBase {
  group: "system";
  type: "cancel" | "no" | "okay" | "yes";
}

interface TownWindowButtonProps extends GameButtonPropsBase {
  group: "town-window";
  type: "exit";
}

interface TroopWindowButtonProps extends GameButtonPropsBase {
  group: "troop-window";
  type: "dismiss" | "exit";
}

interface CombatBarButtonProps extends GameButtonPropsBase {
  group: "combat-bar";
  type: "auto" | "skip";
}

interface HeroCombatOptionsButtonProps extends GameButtonPropsBase {
  group: "hero-combat-options";
  type: "cast-spell" | "retreat" | "surrender" | "cancel";
}

type GameButtonProps =
  AdventureOptionsButtonProps |
  CampaignMenuButtonProps |
  CampaignScenarioInfoWindowButtonProps |
  CombatLostWindowButtonProps |
  CombatWonWindowButtonProps |
  GameOptionsButtonProps |
  HeroTradingWindowButtonProps |
  HeroWindowButtonProps |
  HighScoresWindowButtonProps |
  KingdomOverviewWindowButtonProps |
  LegendButtonProps |
  MainMenuButtonProps |
  NewGameMenuButtonProps |
  MultiPlayerMenuButtonProps |
  HotSeatMenuButtonProps |
  ComMenuButtonProps |
  BaudMenuButtonProps |
  NewGameWindowButtonProps |
  RecruitHeroWindowButtonProps |
  RecruitTroopWindowButtonProps |
  SystemButtonProps |
  TownWindowButtonProps |
  TroopWindowButtonProps |
  CombatBarButtonProps |
  HeroCombatOptionsButtonProps;

interface GameButtonState {
  pressed: boolean;
}

export class GameButton extends React.Component<GameButtonProps, GameButtonState> {
  public static defaultProps: Pick<GameButtonProps, "disabled" | "onClick" | "onMouseEnter" | "onMouseLeave"> = {
    disabled: false,
    onClick: () => undefined,
    onMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
  };

  public state: GameButtonState = {
    pressed: false,
  };

  public render() {
    const { type, group, disabled } = this.props;

    const renderEnabled = !disabled && !this.state.pressed;

    return (
      <button
        className="game-button"
        disabled={this.props.disabled}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onClick={this.props.onClick}
      >
        {this.renderImage(group, type, renderEnabled)}
      </button>
    );
  }

  private renderImage(group: string, type: string, enabled: boolean) {
    const images = buttonImages[group][type];

    return (
      <img src={enabled ? images.enabled : images.disabled} />
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
}
