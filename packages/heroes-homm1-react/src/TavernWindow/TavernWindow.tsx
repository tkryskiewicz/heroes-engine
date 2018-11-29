import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { StructureId } from "heroes-homm1";

import "./TavernWindow.scss";

import AnimationImage = require("./animation.jpg");

import { GameButton } from "../GameButton";
import { GameModal } from "../GameModal";
import { GameText } from "../GameText";
import { getStructureDescriptionMessage, getStructureNameMessage } from "../messages";

export interface TavernWindowProps {
  onOkayClick?: () => void;
}

export class TavernWindow extends React.Component<TavernWindowProps> {
  public render() {
    return (
      <GameModal size={4}>
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
          <Row>
            <GameButton
              group="system"
              type="okay"
              onClick={this.props.onOkayClick}
            />
          </Row>
        </div>
      </GameModal>
    );
  }
}
