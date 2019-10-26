import React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu, MenuOption } from "../Menu";

export interface GameTypeMenuProps {
  readonly onStandardGameClick?: () => void;
  readonly onCampaignGameClick?: () => void;
  readonly onMultiPlayerGameClick?: () => void;
  readonly onCancelClick?: () => void;
}

export class GameTypeMenu extends React.Component<GameTypeMenuProps> {
  public render() {
    return (
      <Menu>
        <MenuOption>
          <ImageButton
            data-test-id="standard-game"
            images={buttonImages.standardGame}
            onClick={this.props.onStandardGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="campaign-game"
            images={buttonImages.campaignGame}
            onClick={this.props.onCampaignGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            data-test-id="multi-player-game"
            images={buttonImages.multiPlayerGame}
            onClick={this.props.onMultiPlayerGameClick}
          />
        </MenuOption>
        <MenuOption />
        <MenuOption>
          <ImageButton
            data-test-id="cancel"
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </MenuOption>
      </Menu>
    );
  }
}
