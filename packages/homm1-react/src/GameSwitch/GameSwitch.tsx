import * as React from "react";

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
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export class GameSwitch extends React.Component<GameSwitchProps> {
  public render() {
    const style: React.CSSProperties = {
      display: "inline-block",
    };

    return (
      <div
        style={style}
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
    if (!this.props.onChange) {
      return;
    }

    this.props.onChange(!this.props.checked);
  }
}
