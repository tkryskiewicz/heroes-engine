import { Modal } from "antd";
import * as React from "react";

import "./GameWindow.scss";

export interface GameWindowProps {
  width?: number;
  visible?: boolean;
}

export class GameWindow extends React.Component<GameWindowProps> {
  public render() {
    return (
      <Modal
        className="game-window"
        closable={false}
        footer={null}
        width={this.props.width}
        visible={this.props.visible}
      >
        <div
          className="game-window-container"
          style={{ width: this.props.width }}
        >
          {this.props.children}
        </div>
      </Modal>
    );
  }
}
