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

interface CombatLostWindowButtonProps extends GameButtonPropsBase {
  group: "combat-lost-window";
  type: "okay";
}

interface CombatWonWindowButtonProps extends GameButtonPropsBase {
  group: "combat-won-window";
  type: "okay";
}

interface LegendButtonProps extends GameButtonPropsBase {
  group: "legend";
  type: "exit";
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

type GameButtonProps =
  CombatLostWindowButtonProps |
  CombatWonWindowButtonProps |
  LegendButtonProps |
  RecruitTroopWindowButtonProps |
  SystemButtonProps |
  TownWindowButtonProps |
  TroopWindowButtonProps;

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
