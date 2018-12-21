import * as React from "react";

import "./GameSwitch.scss";

import { switchImages } from "./assets";

type GameOptionSwitchType =
  "auto-save" |
  "effects" |
  "music" |
  "show-path" |
  "view-enemy-movement";

export type GameSwitchType =
  "checkbox" |
  GameOptionSwitchType;

export interface GameSwitchProps {
  type: GameSwitchType;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export class GameSwitch extends React.Component<GameSwitchProps> {
  public static defaultProps: Pick<GameSwitchProps, "checked" | "onChange"> = {
    checked: false,
    onChange: () => undefined,
  };

  public render() {
    return (
      <div
        className="game-switch"
        onClick={this.onClick}
      >
        {this.props.checked ? this.renderChecked(this.props.type) : this.renderUnchecked(this.props.type)}
      </div>
    );
  }

  private renderChecked(type: string) {
    return (
      <img src={switchImages[type].checked} />
    );
  }

  private renderUnchecked(type: string) {
    return (
      <img src={switchImages[type].unchecked} />
    );
  }

  private onClick = () => {
    this.props.onChange(!this.props.checked);
  }
}
