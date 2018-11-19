import { Col, Row } from "antd";
import * as React from "react";

import "./GameModal.scss";

export interface GameModalProps {
  size: number;
}

export class GameModal extends React.Component<GameModalProps> {
  public static defaultProps = {
    size: 1,
  };

  public render() {
    return (
      <div className="game-modal">
        {this.renderBackground(this.props.size)}
        <div className="game-modal-content">
          {this.props.children}
        </div>
      </div>
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
