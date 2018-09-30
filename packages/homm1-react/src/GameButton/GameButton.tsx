import * as React from "react";

export type GameButtonType = "exit";

export interface GameButtonProps {
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
    const enabled = !this.props.disabled && !this.state.pressed;

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
        {enabled ? this.renderEnabled(this.props.type) : this.renderDisabled(this.props.type)}
      </button>
    );
  }

  private renderEnabled(type: string) {
    return (
      <img src={`assets/buttons/${type}/enabled.png`} />
    );
  }

  private renderDisabled(type: string) {
    return (
      <img src={`assets/buttons/${type}/disabled.png`} />
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
