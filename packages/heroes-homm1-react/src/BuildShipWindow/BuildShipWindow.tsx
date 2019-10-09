import React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";

import * as styles from "./BuildShipWindow.module.scss";

import { ShipIconImage } from "./assets";

import { GameModal, ResourceCost } from "../base";
import { GameParagraph } from "../core";
import { messages } from "./messages";

export interface BuildShipWindowProps {
  readonly cost: Resources;
  readonly canBuild: boolean;
  readonly visible?: boolean;
  readonly onOkayClick: () => void;
  readonly onCancelClick: () => void;
}

type DefaultProp =
  "onOkayClick" |
  "onCancelClick";

export class BuildShipWindow extends React.Component<BuildShipWindowProps> {
  public static readonly defaultProps: Pick<BuildShipWindowProps, DefaultProp> = {
    onCancelClick: () => undefined,
    onOkayClick: () => undefined,
  };

  public render() {
    return (
      <GameModal
        type="okayCancel"
        size={3}
        visible={this.props.visible}
        confirmDisabled={!this.props.canBuild}
        onConfirmClick={this.props.onOkayClick}
        onCancelClick={this.props.onCancelClick}
      >
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.title} />:
        </GameParagraph>
        <div className={styles.shipIcon}>
          <img src={ShipIconImage} />
        </div>
        <GameParagraph textSize="large">
          <FormattedMessage {...messages.costTitle} />:
        </GameParagraph>
        <ResourceCost
          cost={this.props.cost}
        />
      </GameModal>
    );
  }
}
