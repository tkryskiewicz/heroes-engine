import { Row } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { StructureId } from "heroes-homm1";

import * as styles from "./TavernWindow.module.scss";

import { AnimationImage } from "./assets";

import { GameModal } from "../base";
import { GameText } from "../core";
import { getStructureNameMessage } from "../messages";
import { messages } from "./messages";

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
        <div className={styles.root}>
          <Row className={styles.structureName}>
            <GameText size="large">
              <FormattedMessage {...getStructureNameMessage(StructureId.Tavern)} />
            </GameText>
          </Row>
          <Row className={styles.animation}>
            <img src={AnimationImage} />
          </Row>
          <Row className={styles.structureDescription}>
            <GameText size="large">
              <FormattedMessage {...messages.description} />
            </GameText>
          </Row>
        </div>
      </GameModal>
    );
  }
}
