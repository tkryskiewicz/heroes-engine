import { Col, Row } from "antd";
import * as React from "react";

import { Resources, Structure } from "heroes-core";

import "./StructuresWindow.scss";

import { GameButton } from "../../GameButton";
import { StructureIcon } from "../../StructureIcon";

export interface StructuresWindowProps {
  town: string;
  structures: Structure[];
  resources: Resources;
  onExitClick?: () => void;
}

export class StructuresWindow extends React.Component<StructuresWindowProps> {
  public render() {
    return (
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
    );
  }

  private renderStructure(town: string, structure: Structure) {
    return (
      <Col
        key={structure.id}
        span={4}
      >
        <StructureIcon
          town={town}
          structure={structure.id}
        />
      </Col>
    );
  }
}
