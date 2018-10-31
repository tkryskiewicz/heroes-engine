import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { StructureId } from "heroes-homm1";

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
        <div style={{ textAlign: "center" }}>
          <Row style={{ marginBottom: 5 }}>
            <GameText size="large">
              <FormattedMessage {...getStructureNameMessage(StructureId.Tavern)} />
            </GameText>
          </Row>
          <Row style={{ marginBottom: 5 }}>
            <img src="assets/ui/tavern-window/animation.jpg" />
          </Row>
          <Row style={{ marginBottom: 40 }}>
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
