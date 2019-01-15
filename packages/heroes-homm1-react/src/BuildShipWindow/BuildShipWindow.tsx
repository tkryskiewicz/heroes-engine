import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Resources } from "heroes-core";

import "./BuildShipWindow.scss";

import { ShipIconImage } from "./assets";

import { GameModal, ResourceCost } from "../base";
import { GameParagraph } from "../core";
import { messages } from "./messages";

export interface BuildShipWindowProps {
  cost: Resources;
  canBuild: boolean;
  visible?: boolean;
  onOkayClick: () => void;
  onCancelClick: () => void;
}

type DefaultProp =
  "onOkayClick" |
  "onCancelClick";

export class BuildShipWindow extends React.Component<BuildShipWindowProps> {
  public static defaultProps: Pick<BuildShipWindowProps, DefaultProp> = {
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
        <div className="build-ship-window-ship-icon">
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
