import * as React from "react";
import { GameWindow } from "../core";
import { CombatBar } from "./CombatBar";

export interface CombatWindowProps {
  visible?: boolean;
}

export class CombatWindow extends React.Component<CombatWindowProps> {
  public render() {
    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <CombatBar />
      </GameWindow>
    );
  }
}
