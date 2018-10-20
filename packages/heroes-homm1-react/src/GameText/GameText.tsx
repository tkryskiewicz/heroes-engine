import * as React from "react";

export interface GameTextProps {
  size: "large" | "normal" | "small";
}

export class GameText extends React.Component<GameTextProps> {
  public render() {
    const fontSize = {
      large: "14px",
      normal: "12px",
      small: "10px",
    };

    const style: React.CSSProperties = {
      color: "#fff",
      fontSize: fontSize[this.props.size],
    };

    return (
      <span style={style}>
        {this.props.children}
      </span>
    );
  }
}
