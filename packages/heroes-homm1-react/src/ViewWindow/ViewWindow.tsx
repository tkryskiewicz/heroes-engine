import { Col, Row } from "antd";
import * as React from "react";

import "./ViewWindow.scss";

import { legendImages } from "./assets";

import { GameButton } from "../base";
import { withGameWindow } from "../core";

export interface ViewWindowProps {
  // FIXME: inject background
  type: "world" | "puzzle";
  onExitClick?: () => void;
}

class ViewWindow extends React.Component<ViewWindowProps> {
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

const ViewWindowWrapped = withGameWindow(640)(ViewWindow);

export {
  ViewWindowWrapped as ViewWindow,
};
