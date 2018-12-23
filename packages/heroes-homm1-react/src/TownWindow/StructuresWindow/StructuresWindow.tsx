import { Col, Row } from "antd";
import * as React from "react";

import { Resources, Structure } from "heroes-core";
import { getStructureStatus } from "heroes-homm1";

import "./StructuresWindow.scss";

import { GameButton } from "../../base";
import { GameWindow } from "../../core";
import { StructureStatusImage } from "../StructureStatusImage";

export interface StructuresWindowProps {
  town: string;
  canConstructStructures: boolean;
  structures: Structure[];
  resources: Resources;
  visible?: boolean;
  onExitClick?: () => void;
}

export class StructuresWindow extends React.Component<StructuresWindowProps> {
  public render() {
    const { town, structures, canConstructStructures, resources } = this.props;

    return (
      <GameWindow
        width={640}
        visible={this.props.visible}
      >
        <div className="structures-window">
          <Row>
            {structures.map((s) => this.renderStructure(town, s, canConstructStructures, resources))}
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
