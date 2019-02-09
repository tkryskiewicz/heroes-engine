import * as React from "react";

import { buttonImages } from "./assets";

import { ImageButton } from "../../base";
import { Menu } from "../Menu";

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
        <div>
          <ImageButton
            images={buttonImages.standardGame}
            onClick={this.props.onStandardGameClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.campaignGame}
            onClick={this.props.onCampaignGameClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.multiPlayerGame}
            onClick={this.props.onMultiPlayerGameClick}
          />
        </div>
        <div>
          <ImageButton
            images={buttonImages.cancel}
            onClick={this.props.onCancelClick}
          />
        </div>
      </Menu>
    );
  }
}
