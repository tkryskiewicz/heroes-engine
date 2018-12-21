import { Col, Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";

import "./BuildStructureWindow.scss";

import { GameButton, ResourceCost } from "../base";
import { GameText } from "../core";
import { GameModal } from "../GameModal";
import { getStructureDescriptionMessage } from "../messages";
import { StructureIcon } from "../StructureIcon";
import { messages } from "./messages";

export interface BuildStructureWindowProps {
  town: string;
  structure: string;
  cost: Resources;
  canBuild: boolean;
  visible?: boolean;
  onOkayClick: (town: string, structure: string) => void;
  onCancelClick: () => void;
}

export class BuildStructureWindow extends React.Component<BuildStructureWindowProps> {
  public static defaultProps: Pick<BuildStructureWindowProps, "onOkayClick" | "onCancelClick"> = {
    onCancelClick: () => undefined,
    onOkayClick: () => undefined,
  };

  public render() {
    return (
      <GameModal
        size={5}
        visible={this.props.visible}
      >
        <div className="build-structure-window">
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
              className="build-structure-window-okay"
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
              className="build-structure-window-cancel"
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
    this.props.onOkayClick(this.props.town, this.props.structure);
  }
}
