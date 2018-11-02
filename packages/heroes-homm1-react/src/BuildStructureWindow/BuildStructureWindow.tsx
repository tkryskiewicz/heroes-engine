import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";

import { GameButton } from "../GameButton";
import { GameModal } from "../GameModal";
import { GameText } from "../GameText";
import { getStructureDescriptionMessage } from "../messages";
import { ResourceCost } from "../ResourceCost";
import { StructureIcon } from "../StructureIcon";
import { messages } from "./messages";

export interface BuildStructureWindowProps {
  town: string;
  structure: string;
  cost: Resources;
  canBuild: boolean;
  onOkayClick?: (town: string, structure: string) => void;
  onCancelClick?: () => void;
}

export class BuildStructureWindow extends React.Component<BuildStructureWindowProps> {
  public render() {
    return (
      <GameModal size={5}>
        <div style={{ textAlign: "center" }}>
          <Row>
            <GameText size="large">
              <FormattedMessage {...messages.title} />
            </GameText>
          </Row>
          <Row>
            <StructureIcon
              town={this.props.town}
              structure={this.props.structure}
            />
          </Row>
          <Row>
            <GameText size="large">
              <FormattedMessage {...getStructureDescriptionMessage(this.props.structure)} />
            </GameText>
          </Row>
          <Row>
            <ResourceCost
              cost={this.props.cost}
            />
          </Row>
          <Row>
            <Col
              style={{ textAlign: "left" }}
              span={12}
            >
              <GameButton
                group="system"
                type="okay"
                disabled={!this.props.canBuild}
                onClick={this.onOkayClick}
              />
            </Col>
            <Col
              style={{ textAlign: "right" }}
              span={12}
            >
              <GameButton
                group="system"
                type="cancel"
                onClick={this.props.onCancelClick}
              />
            </Col>
          </Row>
        </div>
      </GameModal>
    );
  }

  private onOkayClick = () => {
    if (!this.props.onOkayClick) {
      return;
    }

    this.props.onOkayClick(this.props.town, this.props.structure);
  }
}
