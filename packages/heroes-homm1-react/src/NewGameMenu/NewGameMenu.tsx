import { Row } from "antd";
import * as React from "react";

import { GameButton, Menu } from "../base";

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
          <GameButton
            group="new-game-menu"
            type="standard-game"
            onClick={this.props.onStandardGameClick}
          />
        </Row>
        <Row>
          <GameButton
            group="new-game-menu"
            type="campaign-game"
            onClick={this.props.onCampaignGameClick}
          />
        </Row>
        <Row>
          <GameButton
            group="new-game-menu"
            type="multi-player-game"
            onClick={this.props.onMultiPlayerGameClick}
          />
        </Row>
        <Row>
          <GameButton
            group="new-game-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </Row>
      </Menu>
    );
  }
}
