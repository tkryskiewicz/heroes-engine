import { Col, Row } from "antd";
import * as React from "react";

import { Resources, Structure } from "heroes-core";
import { getStructureStatus } from "heroes-homm1";

import "./StructuresWindow.scss";

// FIXME
import { buttonImages } from "../Treasury/assets";

import { ImageButton } from "../../base";
import { withGameWindow } from "../../core";
import { StructureStatusImage } from "../StructureStatusImage";

export interface StructuresWindowProps {
  town: string;
  canConstructStructures: boolean;
  structures: Structure[];
  resources: Resources;
  onExitClick?: () => void;
}

class StructuresWindow extends React.Component<StructuresWindowProps> {
  public render() {
    const { town, structures, canConstructStructures, resources } = this.props;

    return (
      <div className="structures-window">
        <Row>
          {structures.map((s) => this.renderStructure(town, s, canConstructStructures, resources))}
        </Row>
        <Row className="structures-window-exit">
          <ImageButton
            images={buttonImages.exit}
            onClick={this.props.onExitClick}
          />
        </Row>
      </div>
    );
  }

  private renderStructure(town: string, structure: Structure, canConstructStrucutes: boolean, resources: Resources) {
    const status = getStructureStatus(structure, canConstructStrucutes, resources);

    return (
      <Col
        key={structure.id}
        span={6}
      >
        <StructureStatusImage
          town={town}
          structure={structure.id}
          status={status}
        />
      </Col>
    );
  }
}

const StructuresWindowWrapped = withGameWindow(640)<typeof StructuresWindow, StructuresWindowProps>(StructuresWindow);

export {
  StructuresWindowWrapped as StructuresWindow,
};
