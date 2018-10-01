import { Row } from "antd";
import * as React from "react";

import { Alignment } from "heroes-homm1";

import { GameButton } from "../GameButton";

export interface CampaignMenuProps {
  onPlayClick?: (alignment: string) => void;
  onCancelClick?: () => void;
}

export class CampaignMenu extends React.Component<CampaignMenuProps> {
  public render() {
    return (
      <>
        <Row>
          <GameButton
            group="campaign-menu"
            type="play-red"
            onClick={this.onPlayRedClick}
          />
        </Row>
        <Row>
          <GameButton
            group="campaign-menu"
            type="play-green"
            onClick={this.onPlayGreenClick}
          />
        </Row>
        <Row>
          <GameButton
            group="campaign-menu"
            type="play-yellow"
            onClick={this.onPlayYellowClick}
          />
        </Row>
        <Row>
          <GameButton
            group="campaign-menu"
            type="play-blue"
            onClick={this.onPlayBlueClick}
          />
        </Row>
        <Row>
          <GameButton
            group="campaign-menu"
            type="cancel"
            onClick={this.props.onCancelClick}
          />
        </Row>
      </>
    );
  }

  private onPlayRedClick = () => this.onPlayClick(Alignment.Red);

  private onPlayGreenClick = () => this.onPlayClick(Alignment.Green);

  private onPlayYellowClick = () => this.onPlayClick(Alignment.Yellow);

  private onPlayBlueClick = () => this.onPlayClick(Alignment.Blue);

  private onPlayClick(alignment: string) {
    if (!this.props.onPlayClick) {
      return;
    }

    this.props.onPlayClick(alignment);
  }
}
