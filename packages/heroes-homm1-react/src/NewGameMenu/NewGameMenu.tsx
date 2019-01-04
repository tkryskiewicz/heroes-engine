import { Row } from "antd";
import * as React from "react";

import { buttonImages } from "./assets";

import { ImageButton, Menu } from "../base";

export interface NewGameMenuProps {
  onStandardGameClick?: () => void;
  onCampaignGameClick?: () => void;
  onMultiPlayerGameClick?: () => void;
  onCancelClick?: () => void;
}

export class NewGameMenu extends React.Component<NewGameMenuProps> {
  public render() {
    return (
      <Menu>
        <Row>
          <ImageButton
            images={buttonImages.standardGame}
            onClick={this.props.onStandardGameClick}
          />
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.campaignGame}
            onClick={this.props.onCampaignGameClick}
          />
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.multiPlayerGame}
            onClick={this.props.onMultiPlayerGameClick}
          />
        </Row>
        <Row>
          <ImageButton
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </Row>
      </Menu>
    );
  }
}
