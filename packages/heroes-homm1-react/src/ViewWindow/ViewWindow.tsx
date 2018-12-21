import { Col, Row } from "antd";
import * as React from "react";

import "./ViewWindow.scss";

import { legendImages } from "./assets";

import { GameButton } from "../base";
import { GameWindow } from "../core";

export interface ViewWindowProps {
  // FIXME: inject background
  type: "world" | "puzzle";
  visible?: boolean;
  onExitClick?: () => void;
}

export class ViewWindow extends React.Component<ViewWindowProps> {
  public render() {
    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <Row>
          <Col span={18}>
            {this.props.children}
          </Col>
          <Col span={6}>
            {this.renderLegend(this.props.type)}
          </Col>
        </Row>
      </GameWindow>
    );
  }

  private renderLegend(type: string) {
    return (
      <div className="view-window-legend">
        <img
          className="view-window-legend-background"
          src={legendImages[type]}
        />
        <div className="view-window-exit">
          <GameButton
            group="legend"
            type="exit"
            onClick={this.props.onExitClick}
          />
        </div>
      </div>
    );
  }
}
