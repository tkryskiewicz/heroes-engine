import { Col, Row } from "antd";
import * as React from "react";

import { Resources, Structure } from "heroes-core";

import "./StructuresWindow.scss";

import { GameButton } from "../../GameButton";
import { GameWindow } from "../../GameWindow";
import { StructureIcon } from "../../StructureIcon";

export interface StructuresWindowProps {
  town: string;
  structures: Structure[];
  resources: Resources;
  visible?: boolean;
  onExitClick?: () => void;
}

export class StructuresWindow extends React.Component<StructuresWindowProps> {
  public render() {
    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div className="structures-window">
          <Row>
            {this.props.structures.map((s) => this.renderStructure(this.props.town, s))}
          </Row>
          <Row className="structures-window-exit">
            <GameButton
              group="town-window"
              type="exit"
              onClick={this.props.onExitClick}
            />
          </Row>
        </div>
      </GameWindow>
    );
  }

  private renderStructure(town: string, structure: Structure) {
    return (
      <Col
        key={structure.id}
        span={6}
      >
        <StructureIcon
          town={town}
          structure={structure.id}
        />
      </Col>
    );
  }
}
