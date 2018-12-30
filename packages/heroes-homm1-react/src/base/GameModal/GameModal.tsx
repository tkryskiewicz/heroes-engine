import * as React from "react";

import "./GameModal.scss";

import { GameWindow } from "../../core";

export interface GameModalProps {
  size: number;
  actions: React.ReactNode;
  visible: boolean;
}

export class GameModal extends React.Component<GameModalProps> {
  public static defaultProps: Pick<GameModalProps, "size" | "visible"> = {
    size: 1,
    visible: false,
  };

  public render() {
    return (
      <GameWindow
        width={286}
        visible={this.props.visible}
      >
        <div className="game-modal">
          {this.renderBackground(this.props.size)}
          <div className="game-modal-content">
            {this.props.children}
          </div>
          <div className="game-modal-actions">
            {this.props.actions}
          </div>
        </div>
      </GameWindow>
    );
  }

  private renderBackground(size: number) {
    return (
      <div>
        <div className="game-modal-header" />
        {[...new Array(size).keys()].map((i) => this.renderBody(i))}
        <div className="game-modal-footer" />
      </div>
    );
  }

  private renderBody(index: number) {
    return (
      <div
        key={index}
        className="game-modal-body"
      />
    );
  }
}
