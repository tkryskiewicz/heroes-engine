import * as React from "react";

import "./GameModal.scss";

import { withGameWindow } from "../../core";

export interface GameModalProps {
  size: number;
  actions: React.ReactNode;
}

class GameModal extends React.Component<GameModalProps> {
  public static defaultProps: Pick<GameModalProps, "size"> = {
    size: 1,
  };

  public render() {
    return (
      <div className="game-modal">
        {this.renderBackground(this.props.size)}
        <div className="game-modal-content">
          {this.props.children}
        </div>
        <div className="game-modal-actions">
          {this.props.actions}
        </div>
      </div>
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

const GameModalWrapped = withGameWindow(286)<typeof GameModal, GameModalProps>(GameModal);

export {
  GameModalWrapped as GameModal,
};
