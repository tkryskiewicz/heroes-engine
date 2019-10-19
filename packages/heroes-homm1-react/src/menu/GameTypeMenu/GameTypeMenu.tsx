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
            className="standard-game"
            images={buttonImages.standardGame}
            onClick={this.props.onStandardGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="campaign-game"
            images={buttonImages.campaignGame}
            onClick={this.props.onCampaignGameClick}
          />
        </MenuOption>
        <MenuOption>
          <ImageButton
            className="multi-player-game"
            images={buttonImages.multiPlayerGame}
            onClick={this.props.onMultiPlayerGameClick}
          />
        </MenuOption>
        <MenuOption />
        <MenuOption>
          <ImageButton
            className="cancel"
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </MenuOption>
      </Menu>
    );
  }
}
