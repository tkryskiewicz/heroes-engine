import { Modal } from "antd";
import * as React from "react";

import * as styles from "./GameWindow.module.scss";

export interface GameWindowProps {
  readonly width?: number;
  readonly visible?: boolean;
}

export class GameWindow extends React.Component<GameWindowProps> {
  public render() {
    return (
      <Modal
        className={styles.root}
        closable={false}
        footer={null}
        width={this.props.width}
        visible={this.props.visible}
      >
        <div
          className={styles.container}
          style={{ width: this.props.width }}
        >
          {this.props.children}
        </div>
      </Modal>
    );
  }
}
