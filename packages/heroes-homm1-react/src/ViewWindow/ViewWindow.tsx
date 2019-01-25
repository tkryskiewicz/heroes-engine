import { Col, Row } from "antd";
import * as React from "react";

import * as styles from "./ViewWindow.module.scss";

import { buttonImages, legendImages } from "./assets";

import { ImageButton } from "../base";
import { withGameWindow } from "../core";

export interface ViewWindowProps {
  // FIXME: inject background
  readonly type: "world" | "puzzle";
  readonly onExitClick?: () => void;
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
      <div className={styles.legend}>
        <img
          className={styles.legendBackground}
          src={legendImages[type]}
        />
        <div className={styles.exit}>
          <ImageButton
            images={buttonImages.exit}
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
