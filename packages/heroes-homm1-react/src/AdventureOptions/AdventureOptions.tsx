import { Col, Row } from "antd";
import * as React from "react";

import "./AdventureOptions.scss";

import { GameButton } from "../GameButton";

export interface AdventureOptionsProps {
  onViewWorldClick?: () => void;
  onViewPuzzleClick?: () => void;
  onCastSpellClick?: () => void;
  onDigClick?: () => void;
  onOkayClick?: () => void;
}

export class AdventureOptions extends React.Component<AdventureOptionsProps> {
  public render() {
    return (
      <div className="adventure-options">
        {/* TODO: Add background */}
        <Row>
          <Col span={12}>
            <GameButton
              group="adventure-options"
              type="view-world"
              onClick={this.props.onViewWorldClick}
            />
          </Col>
          <Col span={12}>
            <GameButton
              group="adventure-options"
              type="view-puzzle"
              onClick={this.props.onViewPuzzleClick}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <GameButton
              group="adventure-options"
              type="cast-spell"
              onClick={this.props.onCastSpellClick}
            />
          </Col>
          <Col span={12}>
            <GameButton
              group="adventure-options"
              type="dig"
              onClick={this.props.onDigClick}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <GameButton
              group="adventure-options"
              type="okay"
              onClick={this.props.onOkayClick}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
