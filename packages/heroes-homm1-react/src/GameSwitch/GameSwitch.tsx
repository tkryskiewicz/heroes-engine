import * as React from "react";

import "./GameSwitch.scss";

type GameOptionSwitchType =
  "music" |
  "effects" |
  "auto-save" |
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
      <img src={`assets/switches/${type}/checked.jpg`} />
    );
  }

  private renderUnchecked(type: string) {
    return (
      <img src={`assets/switches/${type}/unchecked.jpg`} />
    );
  }

  private onClick = () => {
    this.props.onChange(!this.props.checked);
  }
}
