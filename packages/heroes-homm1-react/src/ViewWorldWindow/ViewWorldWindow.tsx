import { Col, Row } from "antd";
import * as React from "react";

import { GameButton } from "../GameButton";

export interface ViewWorldWindowProps {
  onExitClick?: () => void;
}

// NOTE: similar to Puzzle Window
export class ViewWorldWindow extends React.Component<ViewWorldWindowProps> {
  public render() {
    return (
      <Row>
        <Col span={18}>
          {this.renderWorld()}
        </Col>
        <Col span={6}>
          {this.renderLegend()}
        </Col>
      </Row>
    );
  }

  private renderWorld() {
    // TODO: implement

    return "";
  }

  private renderLegend() {
    const style: React.CSSProperties = {
      height: 144,
      position: "relative",
      width: 144,
    };

    const backgroundStyle: React.CSSProperties = {
      left: 0,
      position: "absolute",
      top: 0,
    };

    const buttonStyle: React.CSSProperties = {
      bottom: 6,
      left: 0,
      position: "absolute",
      textAlign: "center",
      width: "100%",
    };

    return (
      <div style={style}>
        <img
          style={backgroundStyle}
          src="assets/ui/view-world-window/legend-background.jpg"
        />
        <div style={buttonStyle}>
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
