import { Col, Row } from "antd";
import * as React from "react";

import { Resources, Structure } from "heroes-core";

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
      <div>
        <Row>
          {this.props.structures.map((s) => this.renderStructure(this.props.town, s))}
        </Row>
        <Row style={{ textAlign: "right" }}>
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
      <Col span={4}>
        <StructureIcon
          town={town}
          structure={structure.id}
        />
      </Col>
    );
  }
}
