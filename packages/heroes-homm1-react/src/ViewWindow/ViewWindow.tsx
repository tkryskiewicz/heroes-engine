import { Col, Row } from "antd";
import * as React from "react";

import "./ViewWindow.scss";

import { GameButton } from "../GameButton";

export interface ViewWindowProps {
  // FIXME: inject background
  type: "view-world" | "puzzle";
  onExitClick?: () => void;
}

export class ViewWindow extends React.Component<ViewWindowProps> {
  public render() {
    return (
      <Row>
        <Col span={18}>
          {this.props.children}
        </Col>
        <Col span={6}>
          {this.renderLegend(this.props.type)}
        </Col>
      </Row>
    );
  }

  private renderLegend(type: string) {
    return (
      <div className="view-window-legend">
        <img
          className="view-window-legend-background"
          src={`assets/ui/${type}-window/legend-background.jpg`}
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
