import { Col, Row } from "antd";
import * as React from "react";

import "./GameModal.scss";

import { GameWindow } from "../core";

export interface GameModalProps {
  size: number;
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
        </div>
      </GameWindow>
    );
  }

  private renderBackground(size: number) {
    return (
      <div>
        {this.renderHeader()}
        {[...new Array(size).keys()].map((i) => this.renderBody(i))}
        {this.renderFooter()}
      </div>
    );
  }

  private renderHeader() {
    return (
      <Row>
        <Col className="game-modal-header game-modal-reverse" span={12} />
        <Col className="game-modal-header" span={12} />
      </Row>
    );
  }

  private renderBody(index: number) {
    return (
      <Row key={index}>
        <Col className="game-modal-body game-modal-reverse" span={12} />
        <Col className="game-modal-body" span={12} />
      </Row>
    );
  }

  private renderFooter() {
    return (
      <Row>
        <Col className="game-modal-footer game-modal-reverse" span={12} />
        <Col className="game-modal-footer" span={12} />
      </Row>
    );
  }
}
