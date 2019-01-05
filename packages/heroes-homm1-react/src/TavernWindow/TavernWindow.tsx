import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { StructureId } from "heroes-homm1";

import "./TavernWindow.scss";

import { AnimationImage } from "./assets";

import { GameModal } from "../base";
import { GameText } from "../core";
import { getStructureDescriptionMessage, getStructureNameMessage } from "../messages";

export interface TavernWindowProps {
  visible?: boolean;
  onOkayClick?: () => void;
}

export class TavernWindow extends React.Component<TavernWindowProps> {
  public render() {
    return (
      <GameModal
        type="okay"
        size={4}
        visible={this.props.visible}
        onConfirmClick={this.props.onOkayClick}
      >
        <div className="tavern-window">
          <Row className="tavern-window-structure-name">
            <GameText size="large">
              <FormattedMessage {...getStructureNameMessage(StructureId.Tavern)} />
            </GameText>
          </Row>
          <Row className="tavern-window-animation">
            <img src={AnimationImage} />
          </Row>
          <Row className="tavern-window-structure-description">
            <GameText size="large">
              <FormattedMessage {...getStructureDescriptionMessage(StructureId.Tavern)} />
            </GameText>
          </Row>
        </div>
      </GameModal>
    );
  }
}
